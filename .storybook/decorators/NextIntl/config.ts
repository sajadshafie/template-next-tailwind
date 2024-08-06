import appConfig from "../../../src/configs";
import { loadIntlMessages } from "../../../src/utils";

const nextIntl = {
  defaultLocale: appConfig.defaultLocale,
  locales: appConfig.locales,
  messages: loadIntlMessages(),
};

export default nextIntl;
