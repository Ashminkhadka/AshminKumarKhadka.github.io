import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cloteverImg from "@/public/clotever.png";
import swargadwaryImg from "@/public/swargadwary.png";
import userauthImg from "@/public/userauth.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Internship",
    location: "Chakupat, Lalitpur",
    description:
      "I have done inten in Frontend developmentusing React js",
    icon: React.createElement(LuGraduationCap),
    date: "Apr, 2024 - Jul, 2024",
  },
] as const;

export const projectsData = [
  {
    title: "ClotEver",
    description:
      "I worked as a frontend developer on this startup project using React. Using Hooks for state management, fetching the data using Axios.",
    tags: ["React","Tailwind","ContextAPI","Firebase","EmailJs", "Netlify", "Microsoft Azure"],
    imageUrl: cloteverImg,
    link: "https://clotever.netlify.app",
  },
  {
    title: "Swargadwary Driving Center",
    description:
      "Built using React JS with Hooks, providing a dynamic and responsive user interface map by using the GoogleMapAPI along with latitudes and longitudes.",
    tags: ["React", "Tailwind","framer-motion"],
    imageUrl: swargadwaryImg,
    link: "https://swargadwarymotorsdriving.netlify.app/",
  },
  {
    title: "User Authenticaton",
    description:
      "Practising the MERN project where the users data can be saved and can be authorized",
    tags: ["React", "Tailwind","Node","express","Mongodb","jwt","bcrypt"],
    imageUrl: userauthImg,
    link: "https://github.com/Ashminkhadka/login_register?tab=readme-ov-file",
    
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SQL",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "ContextAPI",
  "Redux",
  "Express",
  "Python",
  "Framer Motion",
] as const;
