const path = require("path");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Beacon Docs",
  tagline: "Connecting dApps with wallets.",
  url: "https://docs.walletbeacon.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "airgap-it",
  projectName: "beacon-docs",
  themeConfig: {
    algolia: {
      apiKey: "b28005d19273bc50236b7f73e6a0e7d7",
      indexName: "walletbeacon",
      searchParameters: {},
    },
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
        { to: "playground/", label: "Playground", position: "right" },
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
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/airgap-it/beacon-docs/edit/main/src/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
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
};
