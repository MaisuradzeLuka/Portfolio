import { images } from "../Constants";

export const navList = [
  { section: "Home", id: "home" },
  { section: "Work", id: "work" },
  { section: "Skills", id: "skills" },
  { section: "Contact", id: "contact" },
];

export const workList = [
  {
    title: "Bookwise",
    img: images.bookwise,
    id: "bookwise",
    projectUrl: "https://bookwise-mauve-three.vercel.app/",
    codeUrl: "https://github.com/MaisuradzeLuka/bookwise",
  },

  {
    title: "Momentum",
    img: images.memoentum,
    id: "momentum",
    projectUrl: "https://redberry-2025.vercel.app/",
    codeUrl: "https://github.com/MaisuradzeLuka/Redberry-2025",
  },

  {
    title: "Linkedin Clone",
    img: images.linkedin_clone,
    id: "linkedin",
    projectUrl: "https://linkedin-clone-woad-sigma.vercel.app/",
    codeUrl: "https://github.com/MaisuradzeLuka/linkedin-clone",
  },

  {
    title: "Image Generator",
    img: images.image_generator,
    id: "imageGenerator",
    projectUrl: "https://image-generator-nu-ivory.vercel.app/",
    codeUrl: "https://github.com/MaisuradzeLuka/image-generator",
  },

  {
    title: "TouTube Clone",
    img: images.youtube_clone,
    id: "ty_clone",
    projectUrl: "https://you-tube-clone-1dcvpqyp9-maisuradzeluka.vercel.app/",
    codeUrl: "https://github.com/MaisuradzeLuka/YouTube_Clone",
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
    title: "NextJs",
    id: "nextjs",
    img: images.nextjs,
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
    title: "Mongodb",
    id: "mongodb",
    img: images.mongodb,
    bgColor: "rgba(0, 145, 96, 0.31)",
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
