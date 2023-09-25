// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const path = require("path");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Beacon Docs",
  tagline: "Connecting dApps with wallets.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.walletbeacon.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "airgap-it", // Usually your GitHub org/user name.
  projectName: "beacon-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  plugins: [
    "docusaurus-node-polyfills",
    path.join(__dirname, "/plugins/monaco-editor"),
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/supported-wallets",
            from: ["/supported-wallets.html", "/beacon/wallets"], // string | string[]
          },
        ],
      },
    ],
  ],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/airgap-it/beacon-docs/edit/main/src/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "Beacon Logo",
          src: "img/logo.svg",
          srcDark: "img/logo-white.svg",
        },
        items: [
          {
            type: "doc",
            position: "left",
            docId: "getting-started/simple-example",
            label: "dApps",
          },
          {
            type: "doc",
            position: "left",
            docId: "wallet/getting-started/web/getting-started",
            label: "Wallets",
          },
          {
            href: "https://stackblitz.com/edit/vitejs-vite-71wsul?file=src%2Fmain.ts&terminal=dev",
            label: "Playgorund",
            position: "right",
          },
          {
            href: "https://debug.walletbeacon.io",
            label: "Debug Wallet",
            position: "right",
          },
          {
            href: "https://github.com/airgap-it/beacon-sdk",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "/",
              },
              {
                label: "Typedoc Reference",
                href: "https://typedocs.walletbeacon.io",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Telegram",
                href: "https://t.me/AirGap",
              },
              {
                label: "Discord",
                href: "https://discord.gg/vuf4Gtnqh7",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/airgap_it",
              },
              {
                label: "Blog",
                href: "https://medium.com/airgap-it",
              },
            ],
          },
          {
            title: "Beacon Components",
            items: [
              {
                label: "Beacon SDK",
                href: "https://github.com/airgap-it/beacon-sdk",
              },
              {
                label: "Beacon Android SDK",
                href: "https://github.com/airgap-it/beacon-android-sdk",
              },
              {
                label: "Beacon iOS SDK",
                href: "https://github.com/airgap-it/beacon-ios-sdk",
              },
              {
                label: "Beacon Node",
                href: "https://github.com/airgap-it/beacon-node",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Papers AG - Open Source MIT License`,
      },
      prism: {
        additionalLanguages: ["kotlin", "groovy", "swift", "ruby"],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
