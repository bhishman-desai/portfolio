import React from "react";
import {FaAngular, FaGraduationCap, FaJava, FaCogs, FaDatabase} from "react-icons/fa";
import awsLambdaGenerator from "@/public/aws-lambda-generator.png"
import simmerprofile from "@/public/simmerprofile.png";
import lightweigthDBMS from "@/public/lightweight-dbms.png";
import jobVerse from "@/public/job-verse.png";
import thriftHarbour from "@/public/thrift-harbour.png";
import twitterAIAgent from "@/public/twitter-ai-agent.png";

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
      "As a Student Engagement Ambassador at the Digital Engagement Centre, Office of Advancement, Dalhousie University, I successfully raised $65,000 by engaging with alumni to gather gifts and funds. My role involved fostering relationships with past students, promoting student funding, and encouraging continued support for the university. Additionally, I serve as a Teaching Assistant for CSCI 5100, where I help bridge the gap for students in effective communication and formal writing.",
    icon: React.createElement(FaGraduationCap),
    date: "Sep. 2023 - present",
  },
  {
    title: "Puppet Academy (SaySo Communications)",
    location: "Halifax, Canada",
    description:
      "As a Solutions Architect, I automated backend infrastructure using Terraform on AWS, enhancing scalability and reliability through Infrastructure as Code (IaC). I developed the frontend for the Puppet Academy application with Next.js, creating a responsive user interface for performance insights. I optimized CI/CD pipelines for both frontend and backend, using AWS Amplify and GitLab runners on EC2, respectively. This streamlined deployment workflows, reduced errors, and improved release speed. Additionally, I managed and scaled the Puppet Academy website on EC2, ensuring high availability and performance during peak times.",
    icon: React.createElement(FaCogs),
    date: "May. 2024 - present",
  },
  {
    title: "Nova Scotia Health Authority",
    location: "Halifax, Canada",
    description:
        "As a Data Engineer, I work as a bridge between teams, participating in the development of workflows that include predictive models and production pipelines to generate different types of forecasts. I enable interactivity through the development of an efficient front-end that collects inputs from the end users and presents results produced by predictive models.",
    icon: React.createElement(FaDatabase),
    date: "Jan. 2024 - present",
  },
] as const;

export const projectsData = [
  /*{
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
  },*/
  {
    title: "Twitter AI Agent",
    description:
      "This is an AI tool that helps you manage your Twitter/X account. It takes your thoughts and turns them into well-written tweets. It’s like having a personal assistant for your social media, making it easier to share your ideas and connect with your audience.",
    tags: ["Socket.io", "OpenAI", "Node.js"],
    imageUrl: twitterAIAgent,
    projectUrl: "https://github.com/bhishman-desai/twitter-ai-agent",
  },{
    title: "AWS Lambda Generator",
    description:
      "Previously, generating layers manually for Lambda dependencies was time-consuming and often led to compatibility issues. This application automates the process: users select the Python runtime and architecture, enter package names, and the backend handles building the Docker image, installing packages, and providing a downloadable zip file. Streamline your AWS Lambda Layer creation with a single click using AWS Layer Generator.",
    tags: ["React", "Node js (Express)", "Docker", "AWS"],
    imageUrl: awsLambdaGenerator,
    projectUrl: "https://github.com/bhishman-desai/aws-layer-generator",
  },
  {
    title: "Lightweight Database Management System",
    description:
      "During my Data Management and Warehousing course in my second term, I became curious about how MySQL efficiently manages, stores, and retrieves data while maintaining ACID properties. This curiosity led me to dive deep into the subject, researching the fundamentals of database management. Through thorough research, I solidified my understanding and realized that creating a lightweight database management system isn't as daunting as it seems if designed thoughtfully from the start. I then developed a DBMS that supports basic DDL and DML commands, complete with transaction support.",
    tags: ["JAVA"],
    imageUrl: lightweigthDBMS,
    projectUrl: "https://github.com/bhishman-desai/lightweight-dbms",
  },
  {
    title: "Game Dev Profile",
    description:
      "Welcome to my gaming world! Immerse yourself in a world of excitement and adventure by exploring the games I've passionately crafted. Play, enjoy, and let me know your thoughts! Your feedback is invaluable in shaping the future of these gaming experiences.",
    tags: ["C#", "Unity 3D"],
    imageUrl: simmerprofile,
    projectUrl: "https://simmer.io/@bhishman",
  },
  {
    title: "Thrift Harbour",
    description:
      "This project addresses the issue of fake or false pricing on online selling platforms. It provides a streamlined solution where products listed by sellers must be approved or rejected by a moderator before becoming available to buyers. This system ensures accurate pricing and builds trust among sellers, buyers, and moderators, creating a more reliable online marketplace.",
    tags: ["React", "Spring Boot", "MySQL"],
    imageUrl: thriftHarbour,
    projectUrl: "https://github.com/bhishman-desai/thrift-harbour",
  },
  {
    title: "Job Verse",
    description:
      "This app is designed to assist students in finding jobs by streamlining the job search and posting process. It bridges the gap between students and recruiters, making it easier for both parties to connect. A unique feature of the app is its events section, where recruiters can post events, and students can register to interact directly with recruiters, enhancing networking opportunities and job placement success.",
    tags: ["React", "Node js (Express)", "MongoDB"],
    imageUrl: jobVerse,
    projectUrl: "https://github.com/bhishman-desai/job-verse",
  },
] as const;

export const skillsData = [
  "Angular",
  "AWS",
  "Azure",
  "Databricks",
  "Django",
  "DynamoDB",
  "GCP",
  "IaC (Terraform & Cloudformation)",
  "Java",
  "Jira",
  "Kubernetes",
  "MongoDB",
  "Neo4j",
  "Next.js",
  "Node js (Express)",
  "PostgreSQL",
  "React",
  "Redis",
  "Spring Boot",
  "SQL",
  "Unity 3D"
] as const;

