import ReactLogo from "../assets/react.png";
import NodejsLogo from "../assets/nodejs.png";
import MongodbLogo from "../assets/mongodb.png";
import SqlLogo from "../assets/sql.png";
import PythonLogo from "../assets/python.png";
import CSharpLogo from "../assets/csharp.png";
import JavaLogo from "../assets/java.png";
import AndroidStudioLogo from "../assets/androidstudio.png";
import CPlusPlusLogo from "../assets/cplusplus.png";
import JavaScriptLogo from "../assets/javascript.png";
import HtmlLogo from "../assets/html.png";
import CssLogo from "../assets/css.png";
import DynamoDBLogo from "../assets/dynamoDB.png";

// Optional: add if you have these logos
// import AwsLogo from "../assets/aws.png";
// import GithubLogo from "../assets/github.png";
// import N8nLogo from "../assets/n8n.png";

export const technologyStack = [
  // Frontend
  { name: "HTML", group: "Frontend", description: "Markup language for web documents.", logo: HtmlLogo, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", group: "Frontend", description: "Stylesheet language for web UI.", logo: CssLogo, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", group: "Frontend", description: "Programming language for the web.", logo: JavaScriptLogo, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "React.js", group: "Frontend", description: "UI library for building interfaces.", logo: ReactLogo, link: "https://react.dev/" },

  // Backend (incl. languages you use for backend work)
  { name: "Node.js", group: "Backend", description: "JavaScript runtime (server-side).", logo: NodejsLogo, link: "https://nodejs.org/en/docs" },
  { name: "Python", group: "Backend", description: "General-purpose language used for scripting and tooling.", logo: PythonLogo, link: "https://docs.python.org/3/" },
  { name: "C#", group: "Backend", description: "Multi-paradigm language used for OOP and backend systems.", logo: CSharpLogo, link: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
  { name: "C++", group: "Backend", description: "General-purpose language (currently learning).", logo: CPlusPlusLogo, link: "https://cplusplus.com/doc/tutorial/" },
  { name: "Java", group: "Backend", description: "Class-based OOP language used in enterprise and Android.", logo: JavaLogo, link: "https://docs.oracle.com/en/java/" },

  // Databases
  { name: "MongoDB", group: "Databases", description: "Document database (NoSQL).", logo: MongodbLogo, link: "https://www.mongodb.com/docs/" },
  { name: "DynamoDB", group: "Databases", description: "Managed NoSQL (key-value / document).", logo: DynamoDBLogo, link: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html" },
  { name: "SQL", group: "Databases", description: "Language for relational data operations.", logo: SqlLogo, link: "https://dev.mysql.com/doc/" },

  // Cloud & Tools
  { name: "Android Studio", group: "Cloud & Tools", description: "IDE for Android development.", logo: AndroidStudioLogo, link: "https://developer.android.com/studio" },

  // Add these once you have icons (logo optional; fallback will render)
  // { name: "AWS", group: "Cloud & Tools", description: "Cloud platform services.", logo: AwsLogo, link: "https://docs.aws.amazon.com/" },
  // { name: "GitHub", group: "Cloud & Tools", description: "Source control and collaboration.", logo: GithubLogo, link: "https://docs.github.com/" },
  // { name: "n8n", group: "Cloud & Tools", description: "Workflow automation for integrations.", logo: N8nLogo, link: "https://docs.n8n.io/" },
];
