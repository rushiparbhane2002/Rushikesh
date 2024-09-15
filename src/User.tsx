import IconCloud from "./Components/magicui/icon-cloud";

const Info = {
  name: "Rushikesh Parbhane",
  stack: [
    "Software Engineer",
    "FullStack Web Developer",
    "Competitive Programmer",
  ],
  bio: "I’m a passionate software engineer with a strong background in competitive programming and web development. I specialize in software development and top-notch web applications. My approach combines rigorous problem-solving with a commitment to delivering high-quality, user-centric solutions. I am dedicated to continuous learning and staying updated with the latest industry trends to ensure innovative and effective solutions. Let’s connect and create something amazing together!",
};

const ProjectInfo = [
  {
    title: "Preksha Cloud - School and College ERP",
    desc: "Preksha Cloud is a complete and feature-rich school/college/institution management software for all educational organizations. This software supports learning, administration, and management activities in schools, colleges, universities, tuition centres, or training centres. It manages everything from admissions to attendance, exams to result cards, and online video lectures to multimedia transfer.",
    image: "/PrekshaImg.png",
    live: true,
    technologies: [
      "C#",
      "MVC",
      "Web API",
      "SQL Server",
      "CSS",
      "HTML",
      "Bootstrap",
      "jQuery",
      "Ajax",
      "N-Tier Architecture",
    ],
    link: "https://prekshacloud.com/",
  },
  {
    title: "CRM - Customer Relationship Management",
    desc: "A comprehensive Customer Relationship Management (CRM) solution designed to streamline sales, marketing, and customer service operations. It offers an intuitive interface for managing leads, tracking interactions, and analyzing customer data. This project aims to enhance customer engagement, improve team productivity, and drive business growth.",
    image: "/CrmImg.png",
    live: true,
    technologies: ["ASP.NET Core", "Entity Framework"],
  },
  {
    title: "Manufacturing Industrial ERP - Multiclient Project",
    desc: "ERP system for a manufacturing company with various modules such as Master, Technical, Order Process, Manufacturing Service, Maintenance, Training, Engineering, Quality, Sales, Finance, and HR.",
    image: "/Erp.png",
    live: true,
    technologies: ["ASP.NET"],
  },
  {
    title: "Bitmetric Solutions",
    desc: "Bitmetric's flagship software, TrakIT, is a powerful Workflow Management System designed to boost productivity and efficiency. It automates repetitive tasks, enhances collaboration, and offers real-time visibility into projects. TrakIT helps standardize processes and provides the agility needed for organizations to quickly adapt to changing business conditions.",
    image: "/Bitmetric.png",
    live: true,
    technologies: ["ASP.NET Core", "Entity Framework"],
  },
  {
    title: "HRMS Project",
    desc: "HRMS, developed using ASP.NET Web Pages, features key sections to streamline HR operations including Employees, Leave Application, Task Management, Department, and Search Employee functionalities. This well-rounded system is designed to improve HR efficiency and organizational effectiveness.",
    image: "/HRMSWebPage.png",
    live: true,
    technologies: ["ASP.NET Web Pages", "Entity Framework"],
  },
  {
    title: "Ericsson Project",
    desc: "Ericsson is spearheading a groundbreaking project to redefine digital infrastructure with 6G technology, focusing on an intelligent network platform that integrates advanced capabilities like the Internet of Senses and cognitive networks. This project promises transformative impacts across industries.",
    image: "/Ericsson.png",
    live: true,
    technologies: ["ASP.NET MVVM Architecture", "Entity Framework"],
  },
  {
    title: "Students CRUD Application",
    desc: "A student CRUD application, developed using ASP.NET MVC, allows users to manage student data efficiently with features for creating, reading, updating, and deleting student records. It supports robust data validation and seamless integration with backend services.",
    image: "/StudentCrudForm.png",
    live: true,
    technologies: ["ASP.NET MVC"],
  },
  {
    title: "CoreLight - Theater Management System",
    desc: "CoreLight is an advanced Theater Management System that leverages microservices for scalable and efficient operations. It manages theater, hall, and other data, streamlining ticket booking, show scheduling, and customer interactions. The backend utilizes MySQL Workbench for robust data handling and storage. React.js powers the frontend, providing a dynamic and responsive user interface. The system ensures real-time updates and seamless integration of services. CoreLight enhances operational efficiency and delivers a superior theater experience.",
    image: "/EventData.png",
    live: true,
    technologies: ["Asp.Net Core Microservices", "Mysql workbench"],
  },
];

const SkillInfo = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJs",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: [
      "ASP.NET",
      "ASP.NET Core",
      "SQL Server",
      "Web API",
      "Firebase",
      "LINQ",
    ],
  },
  {
    title: "Languages",
    skills: ["C#", "JavaScript", "TypeScript"],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Visual Studio",
      "Postman",
      "Swagger",
      "Sublime Text",
    ],
  },
];

const ExperienceInfo = [
  {
    role: "Software Developer",
    company: "Senwell Group Private Limited",
    date: "June 2022 - Present",
    desc: "Led software development with ASP.NET Core, React, and VB.NET, creating scalable microservices and interfaces. Optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborated in agile teams to foster innovation and efficiency.",
    skills: ["ASP.NET", "SQL Server", "Microservices", "ReactJs", "Web API"],
  },
  {
    role: "Software Developer",
    company: "Vertical TechSoft Private Limited",
    date: "April 2022 - June 2022",
    desc: "Designed and implemented automated frameworks using ASP.NET, MySQL, and APIs to ensure robust software validation. Optimized database performance and reliability, and collaborated with cross-functional teams for seamless integrations.",
    skills: ["ASP.NET", "SQL Server", "Microservices"],
  },
];

export const Slugs = [
  "typescript",
  "javascript",
  "react",
  "flutter",
  "html5",
  "css3",
  "bootstrap",
  "jquery",
  "ajax",
  "sqlserver",
  "api",
  "nodedotjs",
  "express",
  "nextdotjs",
  "swagger",
  "azuredevops",
  "postgresql",
  "firebase",
  "visualstudio",
  "vercel",
  "csharp",
  "dotnet",
  "microsoftsqlserver",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "postman",
  "rest",
  "figma",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8">
      <IconCloud iconSlugs={Slugs} />
    </div>
  );
}

export { Info, ProjectInfo, SkillInfo, ExperienceInfo };
