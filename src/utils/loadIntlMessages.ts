import appConfig from "@/configs";

type Messages = {
  [key in Locale]: { key: string }[];
};

export default function loadIntlMessages(): Messages {
  return appConfig.locales.reduce(
    (acc, lang) => ({
      ...acc,
      [lang]: require(`../../messages/${lang}.json`), // whatever the relative path to your messages json is
    }),
    {},
  ) as Messages;
}
