import ReactLogo from "../assets/react.png";
import NodejsLogo from "../assets/nodejs.png";
import ExpressLogo from "../assets/logos/express.svg";
import MongodbLogo from "../assets/mongodb.png";
import SqlLogo from "../assets/sql.png";
import PythonLogo from "../assets/python.png";
import CSharpLogo from "../assets/csharp.png";
import JavaLogo from "../assets/java.png";
import KotlinLogo from "../assets/kotlin.png";
import AndroidStudioLogo from "../assets/androidstudio.png";
import CPlusPlusLogo from "../assets/cplusplus.png";
import JavaScriptLogo from "../assets/javascript.png";
import HtmlLogo from "../assets/html.png";
import CssLogo from "../assets/css.png";
import TailwindLogo from "../assets/tailwind.svg";
import DynamoDBLogo from "../assets/dynamoDB.png";
import FirebaseLogo from "../assets/firebase.svg";
import FastAPILogo from "../assets/fastapi.svg";
import AwsLogo from "../assets/aws.svg";
import OracleLogo from "../assets/oracle.svg";
import GithubLogo from "../assets/github.png";
import N8nLogo from "../assets/n8n.svg";
import TypeScriptLogo from "../assets/logos/typescript.svg";
import VueLogo from "../assets/logos/vuejs.svg";
import InertiaLogo from "../assets/logos/inertiajs.svg";
import NextLogo from "../assets/logos/nextjs.svg";
import PhpLogo from "../assets/logos/php.svg";
import LaravelLogo from "../assets/logos/laravel.svg";
import MySqlLogo from "../assets/logos/mysql.svg";
import PostgreSqlLogo from "../assets/logos/postgresql.svg";
import SupabaseLogo from "../assets/logos/supabase.svg";
import AzureLogo from "../assets/logos/azure.svg";

export const technologyStack = [
  { name: "HTML", group: "Web Standards", description: "Markup language for structuring web content.", logo: HtmlLogo, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", group: "Web Standards", description: "Stylesheet language for layout, styling, and responsive UI design.", logo: CssLogo, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", group: "Languages", description: "Core programming language for interactive web applications.", logo: JavaScriptLogo, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", group: "Languages", description: "Typed JavaScript for maintainable web applications.", logo: TypeScriptLogo, link: "https://www.typescriptlang.org/docs/" },
  { name: "React", group: "Frameworks & Libraries", description: "Component-based library for building modern frontend interfaces.", logo: ReactLogo, link: "https://react.dev/" },
  { name: "Vue 3", group: "Frameworks & Libraries", description: "Frontend framework used in Urbanware's application interface.", logo: VueLogo, link: "https://vuejs.org/guide/introduction.html" },
  { name: "Inertia.js", group: "Frameworks & Libraries", description: "Connects Laravel routes and controllers to the Vue interface.", logo: InertiaLogo, link: "https://inertiajs.com/" },
  { name: "Next.js", group: "Frameworks & Libraries", description: "React framework used in full-stack web applications.", logo: NextLogo, link: "https://nextjs.org/docs" },
  { name: "Tailwind CSS", group: "Frameworks & Libraries", description: "Utility-first CSS framework for building clean and responsive interfaces quickly.", logo: TailwindLogo, link: "https://tailwindcss.com/docs" },

  { name: "Node.js", group: "Platforms & Tools", description: "JavaScript runtime used for backend services and API development.", logo: NodejsLogo, link: "https://nodejs.org/en/docs" },
  { name: "Express.js", group: "Frameworks & Libraries", description: "Minimal Node.js framework for APIs and backend routing.", logo: ExpressLogo, link: "https://expressjs.com/" },
  { name: "Python", group: "Languages", description: "General-purpose language used for backend services, scripting, automation, and AI workflows.", logo: PythonLogo, link: "https://docs.python.org/3/" },
  { name: "FastAPI", group: "Frameworks & Libraries", description: "Python framework for high-performance APIs and service orchestration.", logo: FastAPILogo, link: "https://fastapi.tiangolo.com/" },
  { name: "PHP", group: "Languages", description: "Server-side language used for Urbanware development.", logo: PhpLogo, link: "https://www.php.net/docs.php" },
  { name: "Laravel", group: "Frameworks & Libraries", description: "PHP framework used for Urbanware's application and integrations.", logo: LaravelLogo, link: "https://laravel.com/docs" },
  { name: "Java", group: "Languages", description: "Object-oriented language used in enterprise systems and applied AI integrations.", logo: JavaLogo, link: "https://docs.oracle.com/en/java/" },
  { name: "Kotlin", group: "Languages", description: "Modern JVM language used for Android and hardware-linked application development.", logo: KotlinLogo, link: "https://kotlinlang.org/docs/home.html" },
  { name: "C#", group: "Languages", description: "Language used for OOP-based systems and structured application logic.", logo: CSharpLogo, link: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
  { name: "C++", group: "Languages", description: "General-purpose systems programming language with strong performance foundations.", logo: CPlusPlusLogo, link: "https://cplusplus.com/doc/tutorial/" },

  { name: "SQL", group: "Languages", description: "Relational query language used across structured database systems.", logo: SqlLogo, link: "https://dev.mysql.com/doc/" },
  { name: "MySQL", group: "Databases", description: "Relational database used in web application development.", logo: MySqlLogo, link: "https://dev.mysql.com/doc/" },
  { name: "PostgreSQL", group: "Databases", description: "Relational database behind Supabase-backed application data.", logo: PostgreSqlLogo, link: "https://www.postgresql.org/docs/" },
  { name: "Supabase", group: "Databases", description: "Postgres-backed application platform used in CloseBuddy and Sales Dojo.", logo: SupabaseLogo, link: "https://supabase.com/docs" },
  { name: "MongoDB", group: "Databases", description: "Document-oriented NoSQL database for flexible application data models.", logo: MongodbLogo, link: "https://www.mongodb.com/docs/" },
  { name: "DynamoDB", group: "Databases", description: "Managed NoSQL database for scalable key-value and document storage.", logo: DynamoDBLogo, link: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html" },
  { name: "Firebase", group: "Databases", description: "Backend platform used for app data, authentication, and rapid prototyping workflows.", logo: FirebaseLogo, link: "https://firebase.google.com/docs" },

  { name: "AWS", group: "Platforms & Tools", description: "Cloud platform used for storage, backend integrations, and scalable system components.", logo: AwsLogo, link: "https://docs.aws.amazon.com/" },
  { name: "Microsoft Azure", group: "Platforms & Tools", description: "Cloud deployment and Azure SQL Database used in Urbanware and Sales Dojo migrations.", logo: AzureLogo, link: "https://learn.microsoft.com/en-us/azure/" },
  { name: "Oracle Cloud", group: "Platforms & Tools", description: "Cloud platform used for enterprise demos, database-connected systems, and AI-enabled workflows.", logo: OracleLogo, link: "https://docs.oracle.com/en-us/iaas/" },
  { name: "Android Studio", group: "Platforms & Tools", description: "Primary IDE for Android application development and testing.", logo: AndroidStudioLogo, link: "https://developer.android.com/studio" },
  { name: "GitHub", group: "Platforms & Tools", description: "Version control and collaboration platform for source code and project delivery.", logo: GithubLogo, link: "https://docs.github.com/" },
  { name: "n8n", group: "Platforms & Tools", description: "Workflow automation tool used for integration pipelines and orchestration.", logo: N8nLogo, link: "https://docs.n8n.io/" },
];
