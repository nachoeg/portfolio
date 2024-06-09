import Github from "@/icons/Github.astro";
import TAGS from "./tags";
import VSCode from "@/icons/VSCode.astro";

const PROJECTS = [
  {
    id: "enhanced-default-theme",
    title: "Enhanced Default",
    date: "Mayo 2024",
    description:
      "Tema de Visual Studio Code. Es como el predeterminado, pero un poco mejor.",
    links: {
      github: "https://github.com/nachoeg/enhanced-default-theme",
      marketplace:
        "https://marketplace.visualstudio.com/items?itemName=nachoeg.better-default-theme",
    },
    projectUrl: "/projects/enhanced-default-theme",
    image: "/assets/enhanced-default-theme.webp",
    imagePosition: "object-center",
    tags: [TAGS.JSON, TAGS.VSCODE],
    selected: true,
  },
  {
    id: "portfolio",
    title: "Portfolio",
    date: "Marzo 2024",
    description: "Este sitio web.",
    links: {
      github: "https://github.com/nachoeg/portfolio",
    },
    projectUrl: "/projects/portfolio",
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
    links: {
      github: "https://github.com/nachoeg/ohmydog-frontend",
    },
    projectUrl: "/projects/ohmydog",
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
    links: {
      github: "https://github.com/nachoeg/portal-juegos",
      website: "https://portal-juegos.onrender.com/",
    },
    projectUrl: "/projects/portal-de-juegos",
    image: "/assets/portal-de-juegos.jpg",
    imagePosition: "object-center",
    tags: [TAGS.EXPRESS, TAGS.JS, TAGS.CSS, TAGS.HTML],
    selected: false,
  },
];

export default PROJECTS;
