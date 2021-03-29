const path = require("path");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Beacon Docs",
  tagline: "Connecting dApps with wallets.",
  url: "https://airgap-it.github.io",
  baseUrl: "/beacon-docs/",
  onBrokenLinks: "warn", // TODO: throw
  onBrokenMarkdownLinks: "warn", // TODO: throw
  favicon: "img/favicon.ico",
  organizationName: "airgap-it",
  projectName: "beacon-docs",
  themes: ["@docusaurus/theme-live-codeblock"],
  themeConfig: {
    navbar: {
      logo: {
        alt: "Beacon Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          position: "left",
          docId: "getting-started/simple-example",
          label: "Docs",
        },
        {
          type: "doc",
          position: "left",
          docId: "wallet/getting-started",
          label: "Wallet",
        },
        { to: "playground/", label: "Playground", position: "right" },
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
              to: "docs/",
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
              href: "https://discordapp.com/", // TODO: Discord invite
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
      copyright: `Copyright © ${new Date().getFullYear()} Papers AG - Open Source MIT License`, // TODO
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
          editUrl: "https://github.com/airgap-it/beacon-docs/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [path.join(__dirname, "/plugins/monaco-editor")],
};
