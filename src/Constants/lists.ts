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
      "Completed the first and second stages of Bitcamp’s programing course, which focuses on giving begginer developers basics, that are essential for every programer.  And stared working independently on individual projects. ",
    id: "bitcamp",
  },

  {
    title: "Epam",
    date: 2024,
    description:
      "Completed Epam learning program in Front-end development, which is focusing on giving full theoreitical knowledge and practical experience,which is needed for junio front end developer,",
    id: "epam",
  },
  {
    title: "Internship",
    date: 2025,
    description:
      "Worked as an intern on a full-stack project in a team of four junior and one senior developer. My role as a front-end developer involved building the client-side UI and API integrations. I also gained experience with server-side CRUD operations and teamwork in an agile environment.",
    id: "internship",
  },
];
