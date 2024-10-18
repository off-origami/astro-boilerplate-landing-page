# 🚀 Astro Template Base

This is a starter template for building Astro projects with integrated i18n, SEO, and Tailwind CSS support. It also includes a sitemap generator, ESLint, and Prettier for consistent coding styles.


## 📂 Project Structure

The following structure outlines the key directories and files in this Astro project:
```bash
/
├── public/              # Static assets (favicon, images, etc.)
│   └── favicon.svg
├── src/                
│   ├── components/      # UI components
│   ├── constants/       # Configuration and constants (i18n, site data)
│   │   └── i18nConfig.ts
│   ├── layouts/         # Layout components (global layout, etc.)
│   │   └── Layout.astro
│   └── pages/           # Page components, where routes are defined
│       ├── es/          # Spanish locale pages
│       │   └── index.astro
│       ├── about.astro
│       ├── contact.astro
│       ├── index.astro
│       └── robots.txt.ts
├── .eslintrc.cjs        
├── .gitignore           
├── .prettierignore      
├── .prettierrc.json     
├── README.md            
├── astro.config.mjs     
├── package-lock.json    
├── package.json         
├── tailwind.config.mjs  
└── tsconfig.json        
```


## 🚀 Features

### Internationalization (i18n)

This project has i18n (Internationalization) support built-in, allowing you to create multiple language versions of your site.

Configuration:
- Defined in /src/constants/i18nConfig.ts
- Manage your default language and additional locales with a flexible TypeScript interface.
```ts
interface I18nConfig {
  defaultLocale: string;
  locales: Record<string, string>;
}

const i18nConfig: I18nConfig = {
  defaultLocale: "en",
  locales: {
    en: "en-US",
    es: "es-ES", // Add more languages as needed
  },
};

export default i18nConfig;
```

- The i18n setup is integrated directly into your astro.config.mjs:
```js
import i18nConfig from "./src/constants/i18nConfig";

export default defineConfig({
  i18n: {
    defaultLocale: i18nConfig.defaultLocale,
    locales: Object.keys(i18nConfig.locales),
  },
  integrations: [
    sitemap({
      i18n: i18nConfig,
    }),
  ],
});
```

### SEO Optimization
This template includes SEO support via the [astro-seo](https://github.com/jonasmerlin/astro-seo) package. You can manage meta tags, OpenGraph, and more settings through /src/layouts/Layout.astro.

The SEO metadata is used in /src/pages/Layout.astro:
```astro
---
import { SEO } from "astro-seo";
---
```

Example configuration:
```astro
<SEO
    title="Descriptive Title."
    description="Optimized description full of well-researched keywords."
    openGraph={{
      basic: {
        title: "Descriptive Title.",
        type: "A type.", // check https://ogp.me/#types
        url: "",
        image: ""
      },
      optional: {
        description:
          "Optimized description full of well-researched keywords."
      }
    }}
    twitter={{
      card: "summary_large_image", // Must be one of “summary”, “summary_large_image”, “app”, or “player”.
      title: "Descriptive Title.",
      description:
        "Optimized description full of well-researched keywords.",
      creator: "@...",
      site: "@...",
      image: "",
      imageAlt: ""
    }}
  />
```

### Tailwind CSS
Tailwind CSS is pre-configured to streamline styling. You can customize it via the ```tailwind.config.mjs``` file.

### Sitemap Generation
Automatically generate a sitemap for your project using the Astro Sitemap integration.

### Code Quality Tools
- ESLint: For linting and enforcing best practices in your code.
- Prettier: For automatic code formatting.


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
