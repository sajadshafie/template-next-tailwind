import { UseFormReturn, SubmitHandler, FieldValues } from "react-hook-form";
import { mapChildrenWithProps } from "@/utils";

interface Props<FormFields extends FieldValues>
  extends UseFormReturn<FormFields> {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FormFields>;
}

const setValueComponentsName = ["Autocomplete"];

export default function FormProvider<FormFields extends FieldValues>(
  props: Props<FormFields>,
) {
  const { children, onSubmit, handleSubmit, control, setValue } = props;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {mapChildrenWithProps({
        children,
        renderProps: (childProps, child) => {
          const passSetValue = setValueComponentsName.some((componentName) =>
            child.type.toString().includes(componentName),
          );

          return {
            ...childProps,
            ...(childProps?.name && {
              key: childProps.name,
              control,
              ...(passSetValue && {
                setValue,
              }),
            }),
          };
        },
      })}
    </form>
  );
}
