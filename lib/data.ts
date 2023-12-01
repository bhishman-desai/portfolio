import React from "react";
import { FaAngular, FaGraduationCap, FaJava } from "react-icons/fa";
import his from "@/public/his.png";
import riverbed from "@/public/riverbed.png";
import simmerprofile from "@/public/simmerprofile.png";

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
    title: "Bachelor of Technology Information Technology",
    location: "NMIMS University, India",
    description:
      "I achieved Second Place and earned a Certificate of Honour in the 2017–21 Bachelor of Technology Information Technology cohort. Additionally, I received a Merit Certificate for being in the list of meritorious students.",
    icon: React.createElement(FaGraduationCap),
    date: "Sep. 2017 - Mar. 2021",
  },
  {
    title: "Software Engineer",
    location: "Infogain, India",
    description:
      "I completed comprehensive training as a software engineer trainee, specializing in SQL, JAVA, Angular, React, Cloud computing, Blockchain, and Testing. In my role on the Riverbed support project, I excelled as a Java developer, enhancing the support portal by adding new features and resolving bugs, ensuring smooth operation and minimizing downtime for clients. I engaged directly with clients to understand their requirements, maintaining clear communication and providing timely updates on project progress. Additionally, I actively contributed to code reviews, offering valuable insights to improve the overall quality and performance of the support portal.",
    icon: React.createElement(FaJava),
    date: "Jul. 2021 - Jan. 2023",
  },
  {
    title: "Software Engineer",
    location: "BosLeo, India",
    description:
      "I played a key role in developing a Healthcare Information System focused on patient data. Utilizing TypeScript and the Angular framework, I optimized user interfaces for seamless interaction with backend responses, resulting in a 30% reduction in HTTP calls. Actively participating in code reviews, I received valuable feedback on coding standards and best practices, while also ensuring clear and organized documentation for project comprehension and future reference.",
    icon: React.createElement(FaAngular),
    date: "Jan 2023 - Jul. 2023",
  },
  {
    title: "Masters in Applied Computer Science",
    location: "Dalhousie University, Canada",
    description:
      "I am currently serving as a Student Engagement Ambassador at the Office of Advancement, actively promoting student funding.",
    icon: React.createElement(FaGraduationCap ),
    date: "Sep. 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "HIS",
    description:
      "As an Angular developer, I contributed to a cloud-native Healthcare Information System. This platform optimizes end-to-end healthcare operations, from patient registration to discharge, and includes supply chain management. My role focused on enhancing the user interface, ensuring a seamless and efficient experience for healthcare providers.",
    tags: ["Angular", "Tailwind", "RxJS"],
    imageUrl: his,
    projectUrl: "https://alyssa.global/",
  },
  {
    title: "Riverbed",
    description:
      "Responsible for the development and maintenance of Riverbed's support portal, catering to a range of services such as Unified Observability, Network Visibility, End User Experience Management, Network Performance Monitoring, and Application Performance Management. Additionally, the project offers products for Wide Area Networks, including SD-WAN. A standout offering is the SteelHead product, ensuring secure optimization for all applications across networks.",
    tags: ["Java", "JQuery", "Solr"],
    imageUrl: riverbed,
    projectUrl: "https://support.riverbed.com/",
  },
  {
    title: "Game Dev Profile",
    description:
      "Welcome to my gaming world! Immerse yourself in a world of excitement and adventure by exploring the games I've passionately crafted. Play, enjoy, and let me know your thoughts! Your feedback is invaluable in shaping the future of these gaming experiences.",
    tags: ["C#", "Unity 3D"],
    imageUrl: simmerprofile,
    projectUrl: "https://simmer.io/@bhishman",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "Angular",
  "React",
  "Next.js",
  "Tailwind",
  "Framer Motion",
  "JAVA",
  "Python",
  "Git",
  "Jira",
  "Unity 3D",
] as const;
