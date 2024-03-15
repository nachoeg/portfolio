import Quarkus from "../icons/Quarkus.astro";
import Express from "../icons/Express.astro";
import Mui from "../icons/Mui.astro";
import Css from "../icons/Css.astro";
import Html from "../icons/Html.astro";
import JavaScript from "../icons/JavaScript.astro";
import Tailwind from "../icons/Tailwind.astro";
import React from "../icons/React.astro";
import AstroIcon from "../icons/AstroIcon.astro";

const TAGS = {
  ASTRO: {
    name: "Astro",
    class: "bg-[#000000] text-white",
    icon: AstroIcon,
  },
  QUARKUS: {
    name: "Quarkus",
    class: "bg-[#0d1c2c] text-white",
    icon: Quarkus,
  },
  EXPRESS: {
    name: "Express",
    class: "bg-[#000000] text-white",
    icon: Express,
  },
  MUI: {
    name: "Material UI",
    class: "bg-[#003265] text-white",
    icon: Mui,
  },
  HTML: {
    name: "HTML",
    class: "bg-amber-900 text-white",
    icon: Html,
  },
  CSS: {
    name: "CSS",
    class: "bg-blue-700 text-white",
    icon: Css,
  },
  JS: {
    name: "JavaScript",
    class: "bg-yellow-700 text-white",
    icon: JavaScript,
  },
  REACT: {
    name: "React",
    class: "bg-black text-white",
    icon: React,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: Tailwind,
  },
};

export default TAGS;
