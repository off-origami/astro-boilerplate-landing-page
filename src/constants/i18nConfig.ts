interface I18nConfig {
  defaultLocale: string;
  locales: Record<string, string>;
}

const i18nConfig: I18nConfig = {
  defaultLocale: "en",
  locales: {
    en: "en-US", // The `defaultLocale` value must present in `locales` keys
    es: "es-ES"
  }
};

export default i18nConfig;
