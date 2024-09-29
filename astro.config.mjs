// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// Import the i18n configuration from the constants file
import i18nConfig from "./src/constants/i18nConfig";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  i18n: {
    defaultLocale: i18nConfig.defaultLocale,
    locales: Object.keys(i18nConfig.locales)
  },
  integrations: [
    tailwind(),
    sitemap({
      i18n: i18nConfig
    })
  ]
});
