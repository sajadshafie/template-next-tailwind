import { forwardRef, HTMLAttributes, ReactElement, cloneElement } from "react";
import { Virtuoso } from "react-virtuoso";

export default forwardRef<HTMLUListElement, HTMLAttributes<HTMLElement>>(
  function Listbox(props, ref) {
    const { children, ...restProps } = props;
    const data = children as ReactElement[];

    return (
      <ul
        style={{
          boxSizing: "border-box",
          padding: "8px 0px",
          margin: 0,
        }}
        ref={ref}
        {...restProps}
      >
        <Virtuoso
          data={data}
          itemContent={(index, child) => cloneElement(child, { index })}
          style={{
            minHeight: `calc(40vh - 16px)`,
            padding: 0,
            margin: 0,
          }}
        />
      </ul>
    );
  },
);
