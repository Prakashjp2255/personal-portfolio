import { FaReact, FaNodeJs, FaDatabase, FaHtml5 } from "react-icons/fa"; // Example icons from react-icons

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
];
