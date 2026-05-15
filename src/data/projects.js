import aiHologramCover from "../assets/projects/ai-hologram/cover.jpeg";
// import droneCover from "../assets/projects/drone-cv/cover.jpeg";
import erpDocCover from "../assets/projects/erp-doc/cover.jpeg";
import bannerBitesCover from "../assets/projects/bannerbites/BannerBites.png";
import pocketChefCover from "../assets/projects/pocketchef/Pocketchef_logo.svg";
import nutriaidHome from "../assets/projects/nutriaid-backend/Homepage.png";
import nutriaidEdit from "../assets/projects/nutriaid-backend/RecipePageEdit.png";
import nutriaidRecipe from "../assets/projects/nutriaid-backend/RecipePage.png";

export const projects = [
  {
    key: "ai-hologram",
    title: "Interactive AI Hologram",
    tagline: "Enterprise-facing AI showcase built during my Oracle internship",
    description:
      "Built an interactive AI hologram system that combined LLM-driven responses, text-to-speech, orchestration logic, and presentation-ready user interaction for live showcases and customer engagements.",
    outcome:
      "Delivered a working showcase system used in real demo environments, with emphasis on reliability, responsiveness, and presentation quality.",
    whatIBuilt: [
      "Designed and implemented key parts of the hologram interaction flow",
      "Integrated AI response handling, orchestration logic, and audio-driven interaction",
      "Worked on system behavior and reliability for live customer-facing demos",
    ],
    stack: ["Java", "AI", "TTS", "Backend", "Showcase Systems"],
    type: "Internship",
    featured: true,
    priority: 1,
    githubLinks: [
      {
        label: "Main Repo",
        url: "https://github.com/EdricYeo117/AseanAIHologram",
      },
    ],
    links: {
      writeup: "",
    },
    media: {
      cover: aiHologramCover,
      gallery: [],
      alt: "Interactive AI Hologram project preview",
    },
  },

  {
    key: "oracle-drone",
    title: "AI-Enabled Drone Control and Computer Vision",
    tagline: "Android + DJI SDK + remotely callable drone workflows",
    description:
      "Developed Android application features for an AI-enabled drone initiative, including remotely callable control flows and computer vision capabilities such as pose estimation and fire/smoke-related detection workflows.",
    outcome:
      "Extended the drone demo into a more capable technical system by combining Android development, remote command workflows, and computer vision integration.",
    whatIBuilt: [
      "Built Kotlin-based Android features tied to drone workflows",
      "Worked on remotely callable DJI control logic",
      "Integrated and supported computer vision features for the demo pipeline",
    ],
    stack: ["Kotlin", "Android", "DJI SDK", "Computer Vision", "AI"],
    type: "Internship",
    featured: true,
    priority: 2,
    githubLinks: [
      {
        label: "Android Controller",
        url: "https://github.com/EdricYeo117/OracleDJIDroneMSDK",
      },
      {
        label: "Backend Server",
        url: "https://github.com/EdricYeo117/OracleIntruderServer",
      },
      {
        label: "Classification Model",
        url: "https://github.com/EdricYeo117/OracleClassificationModel",
      },
    ],
    links: {
      writeup: "",
    },
    media: {
      cover: null ,
      gallery: [
        "/assets/projects/drone-cv/1.png",
        "/assets/projects/drone-cv/2.png",
      ],
      alt: "AI-enabled drone system preview",
    },
  },

  {
    key: "erp-doc-ingestion",
    title: "Agentic ERP Document Ingestion Workflow",
    tagline:
      "Document extraction, structured data mapping, and safer SQL generation",
    description:
      "Built an agentic workflow pipeline for processing ERP-style business documents, extracting structured fields, and supporting downstream insertion and analytics workflows.",
    outcome:
      "Reduced manual handling in the document-processing flow and improved the clarity of downstream insights through structured extraction and orchestration.",
    whatIBuilt: [
      "Designed the document ingestion and extraction workflow",
      "Mapped extracted fields into ERP-style data structures",
      "Connected the workflow to dashboard and downstream processing logic",
    ],
    stack: ["n8n", "Oracle", "SQL", "React", "AI"],
    type: "Internship",
    featured: true,
    priority: 3,
    githubLinks: [
      {
        label: "n8n Workflows",
        url: "https://github.com/EdricYeo117/OracleERPN8NWorkflows",
      },
      {
        label: "Frontend",
        url: "https://github.com/EdricYeo117/OracleERP-FrontEnd",
      },
    ],
    links: {
      writeup: "",
    },
    media: {
      cover: erpDocCover,
      gallery: [
        "/assets/projects/erp-doc/1.png",
        "/assets/projects/erp-doc/2.png",
      ],
      alt: "ERP document ingestion workflow preview",
    },
  },

  {
    key: "bannerbites",
    title: "BannerBites",
    tagline:
      "Cloud-based advertisement scheduling and layout management platform",
    description:
      "Built a full-stack advertisement scheduling and layout management system with React, Node.js, Express, DynamoDB, and AWS-connected asset workflows.",
    outcome:
      "Delivered a functioning platform for scheduling, asset handling, and real-time viewing workflows across a grid-based ad management experience.",
    whatIBuilt: [
      "Implemented the frontend experience in React",
      "Worked on backend workflows and DynamoDB-backed data handling",
      "Built real-time viewing and media-related flows",
    ],
    stack: ["React", "Node.js", "Express", "DynamoDB", "AWS"],
    type: "School",
    featured: true,
    priority: 4,
    githubLinks: [
      {
        label: "Project Repo",
        url: "https://github.com/EdricYeo117/BannerBites_FSDIT03",
      },
    ],
    links: {
      writeup: "",
    },
    media: {
      cover: bannerBitesCover,
      gallery: [
        "/assets/projects/bannerbites/1.png",
        "/assets/projects/bannerbites/2.png",
      ],
      alt: "BannerBites project preview",
    },
  },

  {
    key: "pocketchef",
    title: "PocketChef",
    tagline: "Recipe generation and pantry-driven application workflow",
    description:
      "Built a recommendation and recipe workflow application using recipe APIs, pantry input, and supporting storage and app integration layers.",
    outcome:
      "Created a more user-friendly meal planning flow by combining ingredient input, recipe generation, and persistence workflows.",
    whatIBuilt: [
      "Integrated recipe and pantry-related workflows",
      "Worked across app logic, storage, and user interaction flow",
      "Focused on turning raw inputs into practical recipe suggestions",
    ],
    stack: ["JavaScript", "API", "Firebase", "SQLite"],
    type: "School",
    featured: true,
    priority: 5,
    githubLinks: [
      {
        label: "Project Repo",
        url: "https://github.com/EdricYeo117/MAD24_P02_Team1",
      },
    ],
    links: {
      writeup: "",
    },
    media: {
      cover: pocketChefCover,
      gallery: [
        "/assets/projects/pocketchef/1.png",
        "/assets/projects/pocketchef/2.png",
      ],
      alt: "PocketChef project preview",
    },
  },

  {
    key: "recipes-api",
    title: "NutriAid Recipes API",
    description:
      "Backend API integrating Spoonacular for recipe data; implemented endpoints with Node.js and persistence using MongoDB and SQL.",
    githubLinks: [
      {
        label: "Project Repo",
        url: "https://github.com/EdricYeo117/BED2024Apr_P03_T05",
      },
    ],
    stack: ["Node.js", "MongoDB", "SQL", "API"],
    type: "School",
    featured: false,
    priority: 15,
    links: {
      writeup: "",
    },
    media: {
      cover: nutriaidHome,
      gallery: [nutriaidRecipe, nutriaidEdit],
      alt: "NutriAid Recipes API preview",
    },
  },
];

export const pinnedProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999));

export const otherProjects = projects
  .filter((p) => !p.featured)
  .sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999));
