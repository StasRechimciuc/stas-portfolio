import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  expressjs,
  upwork,
  experience1,
  softCommunication,
  softLearn,
  softProblemSolving,
  softSearch,
  softSettings,
  softAi,
  sass,
  project1,
  project2,
  project3,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "React Development",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "UX/UI Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "ExpressJS",
    icon: expressjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "sass",
    icon: sass,
  },
];

const soft = [
  {
    title: "Communication",
    icon: softCommunication,
    points: [
      "Easily talk and adapt myself with any business partner while working together.",
      "Clearly explain technical concepts or reworks/updates for reports.",
    ],
  },
  {
    title: "Attention to Detail",
    icon: softSettings,
    points: [
      "Commitment to write the code clean and easily updatable including any required conventions such as BEM methodology.",
      "Following the design that should be adapted as vividly as possible.",
    ],
  },
  {
    title: "Problem-solving",
    icon: softProblemSolving,
    points: [
      "Possessing analytical and critical thinking in order to complete abstract/unusual tasks.",
      "Ability to delve into the code and explain how it works.",
    ],
  },
  {
    title: "Research Skills",
    icon: softSearch,
    points: [
      "Ability to conduct thorough documentation or forum websites to gather information and solve problems.",
      "Effective online research and utilizing resources like Google.",
    ],
  },
  {
    title: "Effective Communication with AI",
    icon: softAi,
    points: [
      "Effectively communicate and extract useful information from chat-based AI models like ChatGPT.",
      "Integration of AI models' code into mine when required.",
    ],
  },
  {
    title: "Consciousness Learning.",
    icon: softLearn,
    points: [
      "While learning new concepts,techniques or conventions delving in-depth to understand their underlying mechanisms.",
      "As long as I study I don't get distracted from the subject in order to comprehend it entirely.",
    ],
  },
];

const experiences = [
  {
    title: "Start",
    company_name: "",
    icon: experience1,
    iconBg: "#383E56",
    date: "Jan 2023",
    points: [
      "I was obsessed by the idea of working as a front-end developer and creating apps and websites.",
      "I dedicated myself entirely to learn all the basic concepts,languages,comprehend all the aspects in the world of front-end.",
      "While delving continuously into learning front-end technologies I understod that it fits me and I will succeed.",
      "All this served as a strong base in the start of my journey till today.",
    ],
  },
  {
    title: "React SASS Developer",
    company_name: "Freelance",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "May 10 2023 - May 13 2023",
    points: [
      "I implemented a figma design into a responsive React SASS app about football matches that were coming from an API.",
      "My job was to fix some styling bugs working with BEM methodology where I handled it efficiently.",
      "Due to completing the task quickly I got some additional tasks:implementing a working hamburger-menu,creating a data-picker for the app that also was responsive.",
      "I handled the hamburger-menu with basic react-router-dom npm package and used another external library for the calendar- react-datepicker .",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Great work. Always able to make requested changes and great code overall. Highly recomended.",
    name: "Bruno Ramos",
    designation: "Freelancer",
    company: "Upwork",
  },
];
const projects = [
  {
    name: "Sociable",
    description:
      "MERN application with both light and dark theme which allows you to like,see and comment other users' posts as well as posting yourself and adding them to friends.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "@mui-material",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    image_link: "https://sociable-demo.netlify.app",
    source_code_link: "https://github.com/StasRechimciuc/Sociable",
  },
  {
    name: "Cosy Heaven",
    description:
      "E-commerce web page using useContext and react-router with user-friendly interface to showcase the necessary skills for building e-commerce websites.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "useContext",
        color: "green-text-gradient",
      },
      {
        name: "react-router",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    image_link: "https://cosy-heaven.netlify.app",
    source_code_link: "https://github.com/StasRechimciuc/Cosy-Heaven",
  },
  {
    name: "Note Forge",
    description:
      "Robust note-taking app with Redux, crafted with TypeScript and styled using SCSS, this application offers seamless organization and management of your notes, ensuring productivity at your fingertips.",
    tags: [
      {
        name: "Redx",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    image_link: "https://note-forge.netlify.app",
    source_code_link: "https://github.com/StasRechimciuc/Todo-App",
  },
];

export { services, technologies, soft, experiences, testimonials, projects };
