// src/data/projects.js

export const projects = [
  // ===== PINNED / FEATURED (show these in your carousel) =====
  {
    key: "oracle-erp-doc-ingestion",
    title: "Agentic ERP Document Ingestion (n8n + Oracle)",
    description:
      "Built an agentic workflow pipeline for extracting Vendor/PO/Invoice data from documents and generating safe SQL upserts for an ERP-style schema, with dashboards for insights.",
    githubLink: "", // add when public
    stack: ["n8n", "Oracle", "SQL", "React", "AI"],
    type: "Internship",
    featured: true,
    priority: 1,
    media: {
      cover: null, // e.g. "/assets/projects/erp-doc/cover.png"
      gallery: [], // e.g. ["/assets/projects/erp-doc/1.png", ...]
      alt: "ERP document ingestion workflow preview",
    },
    links: {
      demo: "", // optional
      writeup: "", // optional
    },
  },
  {
    key: "ai-hologram",
    title: "AI Hologram System",
    description:
      "Designed and integrated an AI-driven hologram experience with TTS, orchestration, and backend services—demonstrated in high-visibility internal showcases.",
    githubLink: "", // add when public
    stack: ["Java", "TTS", "AI", "Streaming"],
    type: "Internship",
    featured: true,
    priority: 2,
    media: {
      cover: null,
      gallery: [],
      alt: "AI hologram system preview",
    },
    links: {
      demo: "",
      writeup: "",
    },
  },
  {
    key: "bannerbites",
    title: "Cloud-Based Advertisement Management System",
    description:
      "Full-stack ad scheduling and layout system using AWS DynamoDB, React, and Node/Express. Includes real-time viewing and asset handling workflows.",
    githubLink: "https://github.com/EdricYeo117/BannerBites_FSDIT03",
    stack: ["React", "Node.js", "Express", "DynamoDB", "AWS"],
    type: "School",
    featured: true,
    priority: 3,
    media: {
      cover: null,
      gallery: [],
      alt: "BannerBites project preview",
    },
    links: {
      demo: "",
      writeup: "",
    },
  },

  // ===== OTHER PROJECTS (grid/list) =====
  {
    key: "carpark-python",
    title: "Carpark Python Application",
    description:
      "Used data.gov.sg Carpark Availability API to build a Python application for retrieving and presenting live carpark availability data.",
    githubLink: "https://github.com/EdricYeo117/PRG1Sem1/tree/main",
    stack: ["Python", "API"],
    type: "School",
    featured: false,
    priority: 20,
    media: { cover: null, gallery: [], alt: "Carpark application preview" },
    links: { demo: "", writeup: "" },
  },
  {
    key: "ice-cream-system",
    title: "Ice Cream Management System",
    description:
      "C# OOP-based management system implementing core workflows such as inventory, orders, and role-based operations.",
    githubLink: "https://github.com/EdricYeo117/T03_Group02_PRG2Assignment",
    stack: ["C#", "OOP"],
    type: "School",
    featured: false,
    priority: 21,
    media: { cover: null, gallery: [], alt: "Ice cream management system preview" },
    links: { demo: "", writeup: "" },
  },
  {
    key: "recipes-api",
    title: "Back End API for Recipes Web Application",
    description:
      "Backend API integrating Spoonacular for recipe data; implemented endpoints with Node.js and persistence using MongoDB and SQL.",
    githubLink: "https://github.com/EdricYeo117/BED2024Apr_P03_T05",
    stack: ["Node.js", "MongoDB", "SQL", "API"],
    type: "School",
    featured: false,
    priority: 22,
    media: { cover: null, gallery: [], alt: "Recipes API preview" },
    links: { demo: "", writeup: "" },
  },
  {
    key: "sql-condo-db",
    title: "SQL Database Project",
    description:
      "Designed a relational database architecture for a Condo Management System including schema design and SQL implementation.",
    githubLink: "https://github.com/EdricYeo117/T03_Group1_Database",
    stack: ["SQL", "Data Modeling"],
    type: "School",
    featured: false,
    priority: 23,
    media: { cover: null, gallery: [], alt: "SQL database architecture preview" },
    links: { demo: "", writeup: "" },
  },
  {
    key: "genshin-frontend",
    title: "Front End Development Project",
    description:
      "Promotional website built with HTML/CSS/JavaScript, focusing on layout, interaction, and responsive UI.",
    githubLink: "https://github.com/EdricYeo117/FED_GenshinPromo_website",
    stack: ["HTML", "CSS", "JavaScript"],
    type: "School",
    featured: false,
    priority: 24,
    media: { cover: null, gallery: [], alt: "Front end project preview" },
    links: { demo: "", writeup: "" },
  },
  {
    key: "spm-scrum",
    title: "Software Management Project",
    description:
      "Applied Scrum practices and delivered project artifacts while building a web deliverable using HTML/CSS/JavaScript.",
    githubLink: "https://github.com/EdricYeo117/SPM_Assignment_GroupA",
    stack: ["SCRUM", "HTML", "CSS", "JavaScript"],
    type: "School",
    featured: false,
    priority: 25,
    media: { cover: null, gallery: [], alt: "Software management project preview" },
    links: { demo: "", writeup: "" },
  },
  {
    key: "swad-uml",
    title: "Software Analysis and Design Project",
    description:
      "Produced UML and design artifacts (Visual Paradigm) and implemented core components in C#.",
    githubLink: "https://github.com/EdricYeo117/SWAD_P03_GroupE_Classes",
    stack: ["C#", "UML"],
    type: "School",
    featured: false,
    priority: 26,
    media: { cover: null, gallery: [], alt: "SWAD project preview" },
    links: { demo: "", writeup: "" },
  },
  {
    key: "mad-android",
    title: "Mobile Applications Development Project",
    description:
      "Android Studio project implemented in Java, covering common mobile patterns and app structure.",
    githubLink: "https://github.com/EdricYeo117/MAD24_P02_Team1/tree/main",
    stack: ["Java", "Android"],
    type: "School",
    featured: false,
    priority: 27,
    media: { cover: null, gallery: [], alt: "Android project preview" },
    links: { demo: "", writeup: "" },
  },
];

// Helpers (optional) — makes rendering easy
export const pinnedProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999));

export const otherProjects = projects
  .filter((p) => !p.featured)
  .sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999));
