import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  future: {
    experimental_faster: true,
  },
  title: "Welcome to Pre-KDU",
  tagline: "Congrats on making it to the first day of tech-school!",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://kickdrum.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/kickdrum-university/",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "kickdrum", // Usually your GitHub org/user name.
  projectName: "kickdrum-university", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  // Setup for Local Search Index stored in user's browser using PageFind
  // Might revisit this later. Algolia is working well for now.

  // plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

  themes: [
    // [
    //   require.resolve("@getcanary/docusaurus-theme-search-pagefind"),
    //   {
    //     // https://getcanary.dev/docs/common/customization/styling#css-variables
    //     styles: {
    //       "--canary-color-primary-c": 0.1,
    //       "--canary-color-primary-h": 270,
    //     },
    //     // https://pagefind.app/docs/ranking
    //     pagefind: {
    //       ranking: {
    //         pageLength: 0.9,
    //         termFrequency: 1.0,
    //         termSimilarity: 1.0,
    //         termSaturation: 1.5,
    //       }
    //     },
    //     indexOnly: false,
    //     includeRoutes: ["**/*"],
    //     excludeRoutes: ['/api/**'],
    //     // https://getcanary.dev/docs/local/demo
    //     // https://getcanary.dev/docs/common/guides/filtering
    //     // e.g. [{"name":"All","pattern":"**/*"}]
    //     tabs: [],
    //   },
    // ]
  ],

  themeConfig: {
    algolia: {
      // The application ID provided by Algolia
      appId: '0GN63ACSV7',

      // Public API key: it is safe to commit it
      apiKey: '0287f32ceae77a8ddfd5f8cbb7be9560',

      indexName: 'kickdrumio',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/docs/',
      },

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

    },
    // Replace with your project's social card
    image: "img/kdot.png",
    navbar: {
      title: "Kickdrum University",
      logo: {
        alt: "KD Logo",
        src: "img/kdot.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
      ],
    },
    darkMode: true,
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
