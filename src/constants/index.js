import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT_P1 = `I am a driven Software Engineer with 3+ years of experience specializing in developing cybersecurity solutions and robust applications using Python, JavaScript, and frameworks like Django and React. My work included building softwares, dashboards, APIs and automation tools to enhance threat intelligence and streamline security operations.`;

export const HERO_CONTENT_P2 = `I am currently pursuing my M.Sc. in Computer Science at the International University of Applied Sciences, Berlin, where I aim to deepen my expertise and contribute to innovative technological advancements.`;

export const HERO_CONTENT_P3 = `Beyond my professional pursuits, I hold a 1st Degree Black Belt in Taekwondo, a sport I continue to practice actively. I am also a mural artist who has transformed spaces across cafes and schools with vibrant wall art. When not coding or creating, I love to cook and stay active through sports, fitness, and bouldering.`;

export const EXPERIENCES = [
  {
    year: "Nov 2024 - Present",
    duration : "(3 Months)",
    role: "Information Technology Administrator",
    company: "Bearlocal GmbH",
    description: {
      p1 : `Developed a landing page for a telecommunication software using React, delivering a modern and user-friendly interface.`,
      p2 : `Configured and optimized IT infrastructure, including workstation setups, software installations, driver configurations, and data encryption with BitLocker and VeraCrypt.`,
      p3 : `Customized and managed Dolibarr CRM, enhancing modules with contract management, ticketing systems, search filters, email templates, and time-sheet tracking.`,
      p4 : `Proposed and implemented process automation innovations, including WhatsApp integration, website creation, SEO optimization, and task management improvements.`,
    } ,
    technologies: ["Javascript", "React.js", "MySQL", "Dolibarr CRM"],
  },
  {
    year: "Sep 2022 - Sep 2024",
    duration : "(3 Years 1 Month)",
    role: "Senior Software Engineer",
    company: "Subex",
    description: {
      p1 : `Cybersecurity: Work on developing new cybersecurity related products or further enhancing existing different ones.`,
      p2 : `Design and Architecture: Collaborate with product managers and other developers to design software solutions that meet business requirements. Create high-level, low-level and database designs and detailed technical design documentation.`,
      p3 : `Coding and Implementation: Write clean, maintainable, and efficient code using appropriate coding practices and design patterns. Develop new features and functionalities for the product.`,
      p4 : `Web Development: Build Full-stack application for the web for both internal and external use.`,
      p5 : `Develop and Maintain APIs: Code and develop APIs, be able to research and address integration issues.`,
      p6 : `Testing and Debugging: Conduct unit testing and integration testing to ensure software quality and functionality. Identify and fix bugs and performance bottlenecks.`,
      p7 : `Version Control: Use version control systems (e.g., Git) to manage code changes and collaborate effectively with team members.`,
      p8 : ` Documentation: Document code, workflows, and technical specifications for both internal and external use.`,
      p9 : ` Automation & Scripting: Write code to automate multiple tasks over the multiple functionalities in the system`,
    } ,
    technologies: ["Python", "Django","Bash","Linux","Apache","Git","React.js","Javascript","MySQL","PostgreSQL","MongoDB" ],
  },
  {
    year: "Feb 2021 - Jul 2021",
    duration : "(6 Months)",
    role: "Software Intern",
    company: "Subex",
    description: {
      p1 : `Built Cyber Threat Intelligence Platform consisting of APIs to exchange Threat-Intel data and dashboards and visualiser to visualise the same using Django and Bootstrap.`,
      p2 : `Designed server side Decoy and Deception module and deployed it across multiple sites to redirect malicious connections to decoy network`,
      p3 : `Designed and built a honeypot‑dashboard which allow user to analyse all the honeypot data processed using multiple algorithms n rules.`,
      p4 : `Designed and developed a bot detection system which can detect a bot attack on any website/API like DOS,Brute‑force etc and alert using and add entry of the details in the dashboard.`,
    } ,
    technologies: ["Python", "Django","Shell-scripting","Apache","Javascript","Bootstrap","MySQL","MongoDB" ],
  },
  {
    year: "Oct 2020 - Dec 2020",
    duration : "(3 Months)",
    role: "Performance Test Intern",
    company: "Comviva",
    description: {
      p1 : `Build Dashboards for Tracking the Performance of Factoreal Business and Traffic Performance for different Customers Using the Platform.`,
      p2 : `Write scripts to migrate data across systems using Node.js. Use Postman for Load testing and Strapi to build custom API’s.`,
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
