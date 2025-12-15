// src/data/hero.js

export const hero = {
  tagline: "Cloud • AI • Full-stack",
  name: "Edric Yeo",
  subtitle:
    "Cloud Engineering Intern @ Oracle. Building AI-driven systems and enterprise workflows.",
  location: "Based in Singapore",

  ctas: [
    { label: "View Projects", href: "#projects", variant: "primary" },
    { label: "Contact", href: "#contact", variant: "secondary" },
  ],

  focus: {
    title: "Currently focused on",
    items: [
      {
        id: "ai-orchestration",
        title: "AI systems orchestration",
        detail: "TTS, RAG, pipelines",
      },
      {
        id: "erp-ingestion",
        title: "ERP document ingestion workflows",
        detail: "n8n + DB upserts",
      },
      {
        id: "dashboards",
        title: "React dashboards",
        detail: "Vendor / PO / Invoice insights",
      },
    ],
  },
};
