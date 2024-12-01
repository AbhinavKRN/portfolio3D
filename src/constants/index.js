import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    hellow,
    threejs,
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "AI/ML Developer",
      icon: web,
    },
    {
      title: "ReactJS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Web3 Developer",
      icon: creator,
    },
    {
      title: "DevOps Engineer",
      icon: web,
    },
    {
      title: "Java Developer",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    }
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "git",
      icon: git,
    }
    
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "Project Dark Horse",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Sept 2023 - Current",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Teaching Assistant",
      company_name: "Scaler",
      icon: shopify,
      iconBg: "#E6DEDD",
      date: "Sept 2024 - Nov 2024",
      points: [
        "Assisted in lectures and study sessions, helping students understand complex concepts.",
        "Developed notes and examples to enhance student comprehension.",
        "Offered personalized assistance to students for improved academic performance.",
        "Facilitated smooth classroom or lab operations, ensuring student engagement.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Map-Tool",
      description:
        "This project allows users to drop pins on a map, add remarks, and automatically fetch the corresponding address using the Nominatim OpenStreetMap API.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Leaflet",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/AbhinavKRN/Map-Tool",
    },
    {
      name: "voice-clone-app",
      description:
        "A web application that allows users to clone voices using AI technology. Users can upload a voice sample and generate new audio with custom text using the uploaded voice.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
        {
          name: "Express.js",
          color: "blue-text-gradient",
        },
        {
          name: "Supabase",
          color: "pink-text-gradient",
        }
      ],
      image: jobit,
      source_code_link: "https://github.com/AbhinavKRN/voice-clone-app",
    },
    {
      name: "MusicStoreManagement",
      description:
        "This project is a comprehensive system for managing a music store. It includes handling of product inventory, customer profiles, sales transactions, and employee management. The system facilitates the creation, update, retrieval, and deletion of information about musical products, customers, sales, and staff.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Maven",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/AbhinavKRN/MusicStoreManagement",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };
