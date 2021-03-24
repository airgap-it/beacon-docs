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
      title: "Beacon Docs",
      logo: {
        alt: "Beacon Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
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
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog", // TODO
            },
            {
              label: "GitHub",
              href: "https://github.com/airgap-it/beacon-sdk",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`, // TODO
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/airgap-it/beacon-docs/edit/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/airgap-it/beacon-docs/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
