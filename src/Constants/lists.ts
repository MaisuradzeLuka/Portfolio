import { images } from "../Constants";

export const navList = [
  { section: "Home", id: "home" },
  { section: "About", id: "about" },
  { section: "Work", id: "work" },
  { section: "Skills", id: "skills" },
  { section: "Contact", id: "contact" },
];

export const aboutList = [
  {
    title: "Front-End Developer",
    description:
      "I am a frontend developer with a passion for building beautiful and functional web applications.",
    id: "frontend",
    img: images.about01,
  },
  {
    title: "Project Showcase",
    description:
      "My work revolves around bringing ideas to life through clean and efficient code.",
    id: "showcase",
    img: images.about02,
  },
  {
    title: "Tech Stack Proficiency",
    description:
      "I specialize in crafting seamless user experiences. With expertise in popular front-end libraries and frameworks such as React.",
    id: "proficiency",
    img: images.about03,
  },
];

export const workList = [
  {
    title: "Yc-directory",
    img: images.yc_directory,
    id: "blogs",
    projectUrl: "https://yc-directory-gilt.vercel.app/",
    codeUrl: "https://github.com/MaisuradzeLuka/YC-directory",
  },
  {
    title: "Language Tester",
    img: images.langQuize,
    id: "shoppingCart",
    projectUrl: "https://language-tester.vercel.app/",
    codeUrl: "https://github.com/MaisuradzeLuka/Language-Tester",
  },
  {
    title: "TouTube Clone",
    img: images.youtube_clone,
    id: "blogs",
    projectUrl: "https://you-tube-clone-1dcvpqyp9-maisuradzeluka.vercel.app/",
    codeUrl: "https://github.com/MaisuradzeLuka/YouTube_Clone",
  },
  {
    title: "Car Hub",
    img: images.car_hub,
    id: "carHub",
    projectUrl: "https://car-hub-mauve-gamma.vercel.app/",
    codeUrl: "https://github.com/MaisuradzeLuka/CarHub",
  },
  {
    title: "Cv Page",
    img: images.cvPage,
    id: "cvPage",
    projectUrl: "https://cv-page-one.vercel.app/",
    codeUrl: "https://github.com/MaisuradzeLuka/CvPage",
  },
  {
    title: "Travel App",
    img: images.travel_app,
    id: "travelApp",
    projectUrl: "https://travel-app-eta-jet.vercel.app/",
    codeUrl: "https://github.com/MaisuradzeLuka/Travel-app",
  },
];

export const skillsList = [
  {
    title: "Html",
    id: "html",
    img: images.html,
    bgColor: "rgb(255, 244, 242)",
  },
  { title: "Css", id: "css", img: images.css, bgColor: "rgb(221, 232, 238)" },
  {
    title: "Javascript",
    id: "javascript",
    img: images.javascript,
    bgColor: "rgb(253, 247, 209)",
  },
  {
    title: "React",
    id: "react",
    img: images.react,
    bgColor: "rgb(236, 252, 255)",
  },
  {
    title: "TypeScript",
    id: "typescript",
    img: images.typescript,
    bgColor: "rgb(210, 222, 218)",
  },
  {
    title: "Git/Github",
    id: "git",
    img: images.git,
    bgColor: "rgb(255, 230, 234)",
  },
  {
    title: "Firebase",
    id: "firebase",
    img: images.firebase,
    bgColor: "rgba(255, 255, 160)",
  },
];

export const experienceList = [
  {
    title: "Bitcamp",
    date: 2022,
    description:
      "Complteted Bitcamp's starter course (general programmer) and stage 1 (begginer web-developer: Html, Css and jacascript)",
    id: "bitcamp",
  },
  {
    title: "Contests",
    date: 2023,
    description:
      "Participated in Redberry and Bitcamp contests which gave me lots of experience",
    id: "contests",
  },
  {
    title: "Epam",
    date: 2023,
    description: "Completed Epam learning program with high score",
    id: "epam",
  },
];
