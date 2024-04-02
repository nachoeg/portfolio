import TAGS from "./tags";

const PROJECTS = [
  {
    id: "portfolio",
    title: "Portfolio",
    date: "2024",
    description: "Este sitio web.",
    link: "/",
    projectLink: "/projects/portfolio",
    github: "https://github.com/nachoeg/portfolio",
    image: "/assets/portfolio.webp",
    imagePosition: "object-center",
    tags: [TAGS.ASTRO, TAGS.REACT, TAGS.TAILWIND],
    selected: true,
  },
  {
    id: "ohmydog",
    title: "OhMyDog",
    date: "2023",
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
    date: "2022",
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
