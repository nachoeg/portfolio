import TAGS from "./tags";

const PROJECTS = [
  {
    id: "better-default-theme",
    title: "Better Default",
    date: "Mayo 2024",
    description:
      "Tema de Visual Studio Code. Es como el predeterminado, pero un poco mejor.",
    link: "https://marketplace.visualstudio.com/items?itemName=nachoeg.better-default-theme",
    projectLink: "/projects/better-default-theme",
    github: "https://github.com/nachoeg/better-default-theme",
    image: "/assets/better-default-theme.webp",
    imagePosition: "object-center",
    tags: [TAGS.JSON, TAGS.VSCODE],
    selected: true,
  },
  {
    id: "portfolio",
    title: "Portfolio",
    date: "Marzo 2024",
    description: "Este sitio web.",
    link: "/",
    projectLink: "/projects/portfolio",
    github: "https://github.com/nachoeg/portfolio",
    image: "/assets/portfolio.webp",
    imagePosition: "object-center",
    tags: [TAGS.ASTRO, TAGS.REACT, TAGS.TAILWIND],
    selected: false,
  },
  {
    id: "ohmydog",
    title: "OhMyDog",
    date: "Abril 2023",
    description:
      "Aplicación para la gestión de una veterinaria, que ofrece servicios de consulta, adopciones, perros perdidos, campañas benéficas y turnos.",
    link: "",
    github: "https://github.com/nachoeg/ohmydog-frontend",
    projectLink: "/projects/ohmydog",
    image: "/assets/ohmydog.jpg",
    imagePosition: "object-left",
    tags: [TAGS.REACT, TAGS.MUI, TAGS.QUARKUS],
    selected: true,
  },
  {
    id: "portal-de-juegos",
    title: "Portal de Juegos",
    date: "Agosto 2022",
    description: "Página web para jugar al reversi online.",
    link: "https://portal-juegos.onrender.com/",
    github: "https://github.com/nachoeg/portal-juegos",
    projectLink: "/projects/portal-de-juegos",
    image: "/assets/portal-de-juegos.jpg",
    imagePosition: "object-center",
    tags: [TAGS.EXPRESS, TAGS.JS, TAGS.CSS, TAGS.HTML],
    selected: false,
  },
];

export default PROJECTS;
