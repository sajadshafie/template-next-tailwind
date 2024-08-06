interface ComponentChildren {
  children: React.ReactNode;
}

type Locale = "en" | "fa";

interface AppConfig {
  locales: Locale[];
  defaultLocale: Locale;
}

interface CommonPageParams {
  locale: Locale;
}

interface LabelValueType {
  label: string;
  value: string | number;
}

type FormControlRenderField = ControllerRenderProps<FieldValues, string>;
type FormControlRenderFieldState = ControllerRenderProps;
type ProcessLoadingType = "loading" | "data" | "error" | "notfound";
