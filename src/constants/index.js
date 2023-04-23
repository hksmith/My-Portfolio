import {
    mobile,
    fullstack,
    creator,
    web,
    javascript,
    sass,
    html,
    css,
    reactjs,
    C,
    tailwind,
    nodejs,
    mongodb,
    git,
    python,
    wolkite,
    wkucpc,
    threejs,
    java,
    oracle,
    sql,
    php,
    githubb,
    linkedin,
    Medium,
    phpFO,
    current,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "project",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Full-Stack Developer",
      icon: fullstack,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Sass",
      icon: sass,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "C++",
      icon: C,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Mysql",
      icon: sql,
    },
    {
      name: "Oracle",
      icon: oracle,
    },
  ];

  const socialMedia = [
    {
      name: "Github",
      icon: githubb,
      link: "https://github.com/hksmith",
    },
    {
      name: "Linkedin",
      icon: linkedin,
      link: "https://www.linkedin.com/in/kalab-solomon-780a8b254",
    },
    {
      name: "Medium",
      icon: Medium,
      link: "https://medium.com/@kalab27solomon",
    },
  ]
  
  const experiences = [
    {
      title: "MERN Developer, Intern",
      company_name: "Wolkite University",
      icon: wolkite,
      iconBg: "#383E56",
      date: "June 2022 - April 2023",
      points: [
        "Developing and maintaining web applications using MERN-Stack and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Club President",
      company_name: "WKUCPC",
      icon: wkucpc,
      iconBg: "#E6DEDD",
      date: "Mar 2023 - Present",
      points: [
        "Led a team of club leaders and faculty advisors to plan events, workshops, and guest lectures for members to build their programming skills.",
        "Organized a hackathon that brought together students from across the university to work on innovative projects.",
        "Established partnerships with local tech companies to provide members with career insights and opportunities.",
        "Mentored and supported individual members in their programming journeys.",
        "Developed valuable leadership, communication, and project management skills that will serve in future career pursuits.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Online Registration System",
      description:
        "Web application that allows users to view available registration categories and courses, apply for their preferred option, and complete registration by making a fee through our integrated payment system. (It's on Development Stage) ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: current,
      source_code_link: "https://github.com/",
    },
    {
      name: "Food Ordering System",
      description:
        "Web application that enables users to watch availble food, search for food in diffrent category and order foods.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "sass",
          color: "pink-text-gradient",
        },
      ],
      image: phpFO,
      source_code_link: "https://github.com/hksmith/Online_food_ordering__Class_project_just_pushing_to_show_case",
    },
  ];
  
  export { services, technologies, socialMedia, experiences, projects };