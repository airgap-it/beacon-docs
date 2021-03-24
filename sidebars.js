module.exports = {
  docs: [
    {
      type: "category",
      label: "Beacon",
      items: [
        "beacon/introduction",
        "beacon/design-principles",
        "beacon/contributing",
        "beacon/wallets",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "Getting Started",
      items: ["getting-started/installation", "getting-started/example"],
      collapsed: false,
    },
    {
      type: "category",
      label: "Guides",
      items: ["guides/getting-started"],
      collapsed: true,
    },
    {
      type: "category",
      label: "Advanced",
      items: ["advanced/ui-elements"],
      collapsed: true,
    },
    "FAQ",
    "CHANGELOG",
    {
      type: "link",
      label: "Custom Label", // The label that should be displayed (string).
      href: "https://example.com", // The target URL (string).
    },
  ],
};
