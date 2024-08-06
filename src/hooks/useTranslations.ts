import { useTranslations as useInlTranslations } from "next-intl";
import appConfig from "@/configs";
import { loadIntlMessages, findInObjectWithKey } from "@/utils";

export default function useTranslations(namespace?: undefined) {
  const intl = useInlTranslations(namespace);

  const t = (key?: string) => {
    if (!key) return "";

    try {
      const messages = require(
        `../../messages/${appConfig.defaultLocale}.json`,
      );

      const keyObj = findInObjectWithKey(messages, key);
      if (!keyObj) return key;
      return intl(key);
    } catch (error) {
      return key;
    }
  };

  return { t, orgT: intl };
}
