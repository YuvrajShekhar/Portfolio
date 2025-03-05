import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

const getDurationSince = (startYear, startMonth) => {
  const startDate = new Date(startYear, startMonth - 1); // Months are 0-indexed
  const currentDate = new Date();
  
  const yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
  const monthsDiff = currentDate.getMonth() - startDate.getMonth();
  
  const totalMonths = yearsDiff * 12 + monthsDiff + 1;
  
  return `(${totalMonths} Months)`;
};

export const HERO_CONTENT_P1 = `I am a driven Software Engineer with 3+ years of experience specializing in developing cybersecurity solutions and robust applications using Python, JavaScript, and frameworks such as Django and React. My work includes building software, dashboards, APIs, and automation tools to enhance threat intelligence and streamline security operations.`;

export const HERO_CONTENT_P2 = `I am currently pursuing my M.Sc. in Computer Science at the International University of Applied Sciences, Berlin, where I aim to deepen my expertise and contribute to innovative technological advancements.`;

export const HERO_CONTENT_P3 = `Outside of my professional pursuits, I hold a 1st Degree Black Belt in Taekwondo, a discipline I actively practice. I am also a mural artist who has transformed spaces in cafes and schools with vibrant and creative wall art. When I’m not coding or creating, I enjoy cooking, staying active through sports and fitness, and exploring bouldering.`;

export const EXPERIENCES = [
  {
    year: "Nov 2024 - Present",
    duration: getDurationSince(2024, 11), // Dynamically calculates the months
    role: "Information Technology Administrator",
    company: "Bearlocal GmbH",
    description: {
      p1: `Developed solutions: Built a modern landing page for NetzNavi using React, implementing smooth scrolling, responsive design, and multilingual support. Enhanced styling, content structuring, and email functionality.`,
      p2: `Optimized IT infrastructure: Configured encryption solutions for internal and external drives using BitLocker and VeraCrypt. Successfully set up system backups, new devices, and secure email configurations.`,
      p3: `Enhanced CRM functionality: Customized Dolibarr CRM with advanced modules for contract management, ticketing, customer tagging, and email notifications. Implemented sorting, search, and filtering features for better usability.`,
      p3: `Automated data retrieval: Developed a Check24 web scraper using Python to fetch and process address-based results, improving efficiency with config parsers, CSV-to-Excel conversion, and formatted output handling.`,
    },
    technologies: ["React.js", "Python", "MySQL", "Dolibarr CRM"],
  },
  {
    year: "Sep 2021 - Sep 2024",
    duration : "(3 Years 1 Month)",
    role: "Senior Software Engineer",
    company: "Subex",
    description: {
      p1 : `Cybersecurity Development: Developed and enhanced cybersecurity products, addressing evolving threats and security requirements.`,
      p2 : `Design and Architecture: Created detailed technical designs, including high-level, low-level, and database architectures, collaborating with product managers and developers.`,
      p3 : `Full-Stack Development: Built and maintained full-stack web applications for internal and external use, including APIs and integration solutions.`,
      p4 : `Coding and Testing: Wrote clean, efficient code following best practices, and conducted unit and integration testing to ensure quality and performance.`,
      p5 : `Version Control & Documentation: Used version control systems like Git for collaboration and maintained comprehensive technical documentation for workflows and codebases.`,
      p6 : `Automation & Debugging: Automated tasks across system functionalities and identified and resolved bugs or performance issues to optimize processes.`,
    } ,
    technologies: ["Python", "Django","Bash","Linux","Apache","Git","React.js","Javascript","MySQL","PostgreSQL","MongoDB" ],
  },
  {
    year: "Feb 2021 - Jul 2021",
    duration : "(6 Months)",
    role: "Software Intern",
    company: "Subex",
    description: {
      p1 : `Cybersecurity Platforms: Built a Cyber Threat Intelligence Platform with APIs for threat data exchange and dashboards using Django and Bootstrap. Designed decoy modules and honeypot dashboards to analyze malicious connections and process threat data using advanced algorithms.`,
      p2 : `Bot Detection System: Developed a system to detect and alert bot attacks (e.g., DOS, brute force) on websites and APIs, integrating real-time monitoring through dashboards.`,
    } ,
    technologies: ["Python", "Django","Shell-scripting","Apache","Javascript","Bootstrap","MySQL","MongoDB" ],
  },
  {
    year: "Oct 2020 - Dec 2020",
    duration : "(3 Months)",
    role: "Performance Test Intern",
    company: "Comviva",
    description: {
      p1 : `Performance Dashboards: Built dashboards to track the performance of Factoreal business and analyze traffic metrics for different customers using the platform.`,
      p2 : `Data Migration and API Development: Wrote scripts to migrate data across systems using Node.js, conducted load testing with Postman, and developed custom APIs using Strapi.`,
    } ,
    technologies: ["Postman", "JSON","Strapi"],
  },
];

export const EDUCATION = [
  {
    year: "October 2024 - Present",
    university : "IU International University of Applied Sciences",
    branch : "M.Sc. Computer Science",
  },
  {
    year: "August 2017 - August 2021",
    university : "University Visvesvaraya College of Engineering (UVCE)",
    branch : "BE in Electical and Electronics",
  },
]


export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Berlin, Germany",
  phoneNo: "+49 15560 763530",
  email: "syuvraj1999@gmail.com",
};
