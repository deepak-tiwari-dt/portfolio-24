import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  tcr,
  tokyorevengers,
  meditationclock,
  calculator,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Javascript Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "TCR INNOVATION",
    icon: tcr,
    iconBg: "#383E56",
    date: "July 2022 - Sept 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Deepak proved me wrong.",
    name: "Rutuja Doiphode",
    designation: "CEO",
    company: "TCR INNOVATION",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Deepak does.",
    name: "Saheel Ramji",
    designation: "COO",
    company: "TCR INNOVATION",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    testimonial:
      "After Deepak optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Siddhesh Patil",
    designation: "HR",
    company: "TCR INNOVATION",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const projects = [
  {
    name: "Tokyo Revengers - Characters",
    description:
      "Web-based platform showcasing Tokyo Revengers characters, offering fans quick access to profiles, backgrounds, and abilities for an engaging experience.",
    tags: [
      {
        name: "html",
        color: "white-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: tokyorevengers,
    source_code_link:
      "https://github.com/deepak-tiwari-dt/tokyo-revengers-characters",
  },
  {
    name: "Meditation Clock",
    description:
      "Web-based platform featuring a meditation clock, providing users with customizable timers, calming sounds, and guided sessions for a tranquil meditation experience.",
    tags: [
      {
        name: "html",
        color: "white-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: meditationclock,
    source_code_link: "https://github.com/deepak-tiwari-dt/Meditation-Clock",
  },
  {
    name: "Calculator",
    description:
      "Web-based platform offering a versatile calculator, enabling users to perform basic and advanced calculations with ease, featuring a user-friendly interface for an efficient calculation experience.",
    tags: [
      {
        name: "html",
        color: "white-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: calculator,
    source_code_link: "https://github.com/deepak-tiwari-dt/Calculator",
  },
];

export { services, technologies, experiences, testimonials, projects };
