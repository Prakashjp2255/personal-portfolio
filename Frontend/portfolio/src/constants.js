import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaAngular , FaCss3Alt , FaJsSquare , FaJava  } from "react-icons/fa"; // Example icons from react-icons


export const SKILL_TABS = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
];

export const SKILLS = [
  {
    id: 1,
    skill: "ReactJS",
    description: "A JavaScript library for building user interfaces, developed by Facebook. It uses a component-based architecture and virtual DOM for efficient rendering of interactive web applications.",
    type: "frontend",
    progress: 85,
    icon: FaReact,
  },
  {
    id: 2,
    skill: "Node.js",
    description: " A JavaScript runtime that allows you to run JavaScript on the server side, built on Chrome's V8 engine. Enables full-stack JavaScript development with npm package management.",
    type: "backend",
    progress: 75,
    icon: FaNodeJs,
  },
  {
    id: 3,
    skill: "MongoDB",
    description: "A NoSQL database that stores data in flexible, JSON-like documents instead of traditional tables. Popular for web applications due to its scalability and ease of use with JavaScript.RetryClaude can make mistakes. Please double-check responses.",
    type: "database",
    progress: 70,
    icon: FaDatabase,
  },
  {
    id: 4,
    skill: "HTML5",
    description: "(HyperText Markup Language) - The standard markup language for creating web pages. Uses tags to structure content like headings, paragraphs, links, and images that browsers can interpret and display.",
    type: "frontend",
    progress: 90,
    icon: FaHtml5,
  },
  {
    id: 5,
    skill: "Angular JS",
    description: " A TypeScript-based front-end framework developed by Google for building dynamic single-page applications.It uses a component-based architecture with built-in tools for routing, forms, and HTTP communication. ",
    type: "frontend",
    progress: 60,
    icon: FaAngular ,
  },
  {
    id: 6,
    skill: "CSS 3 ",
    description: "CSS3 is the latest evolution of Cascading Style Sheets, used for styling HTML elements on web pages.It introduces new features like media queries, flexbox, animations, transitions, and rounded corners for responsive design.",
    type: "frontend",
    progress: 80,
    icon : FaCss3Alt ,
  },
  {
    id: 7,
    skill: "Express JS",
    description: " Express.js is a minimal and flexible Node.js web application framework used to build APIs and web servers. It simplifies routing, middleware integration, and server-side logic for full-stack JavaScript applications. ",
    type: "backend",
    progress: 75,
    icon : FaJsSquare  ,
  },
  {
    id: 8,
    skill: "Java",
    description: " Java is a high-level, object-oriented programming language known for its platform independence and strong memory management.Widely used for building enterprise applications, Android apps, and backend systems using the JVM ",
    type: "backend",
    progress: 70,
    icon : FaJava   ,
  },
  
];
