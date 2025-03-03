import TAGS from "./tags";

export const PROJECTS = [
  {
    id: "que-comemos",
    title: "¿Qué Comemos?",
    date: "Septiembre 2024",
    description:
      "Aplicación para gestionar el buffet de la Facultad de Informática de la UNLP.",
    links: [
      {
        name: "Repositorio",
        url: "https://github.com/nicohe/ttpsJava",
        icon: "github",
      },
    ],
    projectUrl: "/projects/que-comemos",
    image: "/assets/que-comemos.webp",
    imagePosition: "object-center",
    tags: [TAGS.SPRING, TAGS.JAVA, TAGS.MYSQL, TAGS.ANGULAR, TAGS.BOOTSTRAP],
  },
  {
    id: "cedica",
    title: "CEDICA",
    date: "Agosto 2024",
    description:
      "Aplicación interna de administración y portal web para un Centro de Equitación para Personas con Discapacidad y Carenciadas.",
    links: [
      {
        name: "Portal",
        url: "https://grupo17.proyecto2024.linti.unlp.edu.ar/",
        icon: "link",
      },
      {
        name: "Admin",
        url: "https://admin-grupo17.proyecto2024.linti.unlp.edu.ar/",
        icon: "link",
      },
      {
        name: "Repositorio",
        url: "https://github.com/nachoeg/cedica",
        icon: "github",
      },
    ],
    projectUrl: "/projects/cedica",
    image: "/assets/cedica.webp",
    imagePosition: "object-center",
    tags: [TAGS.PYTHON, TAGS.FLASK, TAGS.POSTGRESQL, TAGS.VUE, TAGS.TAILWIND],
  },
  {
    id: "guillermo-portfolio",
    title: "Guillermo Portfolio",
    date: "Junio 2024",
    description:
      "Aplicación web para la gestión de un portfolio, permitiendo crear proyectos, agregar imágenes y etiquetas, y visualizarlos en una galería.",
    links: [
      {
        name: "Sitio web",
        url: "https://guillermoescudero.vercel.app/",
        icon: "link",
      },
      {
        name: "Repositorio",
        url: "https://github.com/nachoeg/guillermo-portfolio",
        icon: "github",
      },
    ],
    projectUrl: "/projects/guillermo-portfolio",
    image: "/assets/guillermo-portfolio.webp",
    imagePosition: "object-center",
    tags: [TAGS.ASTRO, TAGS.REACT, TAGS.TAILWIND, TAGS.SUPABASE],
  },
  {
    id: "enhanced-default-theme",
    title: "Enhanced Default",
    date: "Mayo 2024",
    description:
      "Tema de Visual Studio Code con mejoras respecto al tema por defecto.",
    links: [
      {
        name: "Repositorio",
        url: "https://github.com/nachoeg/enhanced-default-theme",
        icon: "github",
      },
      {
        name: "Marketplace",
        url: "https://marketplace.visualstudio.com/items?itemName=nachoeg.better-default-theme",
        icon: "vscode",
      },
    ],
    projectUrl: "/projects/enhanced-default-theme",
    image: "/assets/enhanced-default-theme.webp",
    imagePosition: "object-center",
    tags: [TAGS.JSON, TAGS.VSCODE],
  },
  {
    id: "portfolio",
    title: "Portfolio",
    date: "Marzo 2024",
    description: "Este sitio web.",
    links: [
      {
        name: "Repositorio",
        url: "https://github.com/nachoeg/portfolio",
        icon: "github",
      },
    ],
    projectUrl: "/projects/portfolio",
    image: "/assets/portfolio.webp",
    imagePosition: "object-center",
    tags: [TAGS.ASTRO, TAGS.REACT, TAGS.TAILWIND],
  },
  {
    id: "ohmydog",
    title: "¡Oh my dog!",
    date: "Abril 2023",
    description:
      "Aplicación para la gestión de una veterinaria, que ofrece servicios de consulta, adopciones, perros perdidos, campañas benéficas y turnos.",
    links: [
      {
        name: "Frontend",
        url: "https://github.com/nachoeg/ohmydog-frontend",
        icon: "github",
      },
      {
        name: "Backend",
        url: "https://github.com/nachoeg/ohmydog-backend",
        icon: "github",
      },
    ],
    projectUrl: "/projects/ohmydog",
    image: "/assets/ohmydog.webp",
    imagePosition: "object-left",
    tags: [TAGS.REACT, TAGS.MUI, TAGS.QUARKUS, TAGS.JAVA],
  },
  {
    id: "portal-de-juegos",
    title: "Portal de Juegos",
    date: "Agosto 2022",
    description: "Página web para jugar al reversi online.",
    links: [
      {
        name: "Repositorio",
        url: "https://github.com/nachoeg/portal-juegos",
        icon: "github",
      },
      {
        name: "Sitio web",
        url: "https://portal-juegos.onrender.com/",
        icon: "link",
      },
    ],
    projectUrl: "/projects/portal-de-juegos",
    image: "/assets/portal-de-juegos.jpg",
    imagePosition: "object-center",
    tags: [TAGS.EXPRESS, TAGS.JS, TAGS.CSS, TAGS.HTML],
  },
];

export const SELECTED_PROJECTS = [
  PROJECTS[1], // CEDICA
  PROJECTS[0], // QUE COMEMOS
  PROJECTS[5], // OHMYDOG
  PROJECTS[2], // GUILLERMO
];
