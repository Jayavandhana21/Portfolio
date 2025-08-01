import project1 from "../assets/Projects/to-do list.jpg";
import project2 from "../assets/Projects/tictactoe.jpg";
import project3 from "../assets/Projects/portfolioo.png";
// import project4 from "../assets/Projects/e-dine.jpg";

export const HERO_CONTENT = `Hi, I'm Jayavandhana, a Computer Science graduate with a specialization in Data Analytics. I'm passionate about front-end development and love creating responsive, user-friendly web interfaces. With a strong foundation in React.js, JavaScript, and UI design, I aim to build seamless digital experiences. I'm eager to learn, grow, and contribute to innovative tech projects. `;

export const ABOUT_TEXT = `Hello! I’m a passionate Computer Science and Data Analytics graduate from PSG College of Arts & science in Coimbatore, Tamil Nadu. I’ve always been curious about how things work on the web, which led me to dive deep into front-end development.

I have a strong foundation in programming languages like Python and JavaScript. I enjoy building clean, responsive, and engaging interfaces using React.js, JavaScript, and Tailwind CSS. I love turning ideas into real, functional websites that not only work well but also look great.

I’ve gained practical experience as a Web Developer Intern at Hashmato, where I worked on Website for restaurants in Singapore. I’m always eager to learn and explore new areas in software development.

I also participate in extracurricular activities and hold certifications in Cyber Security.`;

export const EXPERIENCES = [
  {
    year: "Dec 2024 - March 2025",
    role: "Junior Web Developer",
    company: "Hashmato",
    description: `I worked as a Junior Web Developer at Hashmato, focusing on front-end development using React, TypeScript, and Tailwind CSS. My role involved converting Figma designs into fully responsive web interfaces, optimizing components for both desktop and mobile, and ensuring smooth user experiences. This experience strengthened my skills in modern UI development, reusable component creation, and responsive design best practices.`,
    technologies: ["Typescript","Tailwind","HTML CSS", "Reactjs"],
  },
  {
    year: "Sep 2024 - Nov 2024",
    role: "Web Developer Intern",
    company: "Hashmato",
    description: `I worked as a Web Developer Intern, where I focused on building and enhancing front-end features using React, TypeScript, and Tailwind CSS. During my internship, I translated Figma UI designs into responsive web pages, optimized component structures for reusability, and improved the overall user experience for both web and mobile platforms.`,
    technologies: ["Javascript","Node.js","ReactJs", "Git"],
  },
];

export const EDUCATION = [
  {
    degree: "Bachelors of Computer Science with Data Analytics",
    institution: "PSG College of Arts & Science, Coimbatore",
    duration: "Aug 2021 - May 2024",
    description:
      "Graduated with a  understanding of core computer science fundamentals. Explored a wide range of topics including coding, cyber forensics, web development, and machine learning. Lived away from home in a hostel, where I made lasting friendships and created wonderful memories",
  },
  {
    degree: "SSLC",
    institution: "Alvernia Matriculation Higher Secondary School, Coimbatore",
    duration: "June 2020 - May 2021",
    description:
      "Studied Physics, Chemistry, Mathematics, and Computer Science with a focus on Python. Developed a growing interest in programming, enjoyed memorable trips with friends, and cherished the final moments of school life.",
  },
  {
    degree: "SSC",
    institution: "Shri Ganga Matriculation School",
    duration: "June 2018 - May 2019",
    description:
      "Gained a solid foundation across all subjects while growing from a curious child into a motivated young adult. Embraced a wide range of activities, including quizzes, Taekwondo, and other extracurriculars, which enriched my learning experience and personal development.",
  },
]; 

export const PROJECTS = [
  {
    title:"To-do List",
    image: project1,
    description:
    "The To-Do List project is a simple and efficient task management app built with React that allows users to add, edit, and delete tasks with ease. It features real-time updates, a clean and responsive interface, and leverages React state management to keep track of completed and pending tasks. This project demonstrates the core concepts of dynamic UI updates and interactive front-end functionality in a minimal, user-friendly design.",
    technologies:["React","Typescript","Tailwind","HTML CSS"],
    github:"https://github.com/Jayavandhana21/TODO-LIST",
    live:"https://jayavandhana21.github.io/TODO-LIST/"
  },
  {
    title: "Tic-Tc-Toe",
    image: project2,
    description:
      "The Tic Tac Toe project is a simple interactive game built with React, where two players compete to align three Xs or Os on a 3×3 grid. It features real-time win and draw detection, a quick reset option, and a clean, responsive interface for smooth gameplay across devices. This project highlights core React skills like state management and dynamic UI updates in an engaging, classic game format.",
    technologies: ["HTML", "CSS", "Javascript"],
    github : "https://github.com/Jayavandhana21/Tic-Tac-Toe",
    live : "https://jayavandhana21.github.io/Tic-Tac-Toe/" 
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "The Portfolio project is a personal website built to showcase my skills, projects, and experience as a front-end developer. Designed with a clean and responsive layout, it highlights my work through interactive sections and smooth navigation, providing an engaging user experience across devices. This project demonstrates my ability to create visually appealing, functional web applications using modern front-end technologies.",
    technologies: ["HTML", "Tailwind Css", "React","Vite","Javascript"],
    github : "https://github.com/Jayavandhana21/React-Portfolio",
    live : "https://jayavandhana21.github.io/React-Portfolio/" 
  },
  // {
  //   title: "e-Dine",
  //   image: project4,
  //   description:
  //     "e-Dine is an initial setup of a responsive food ordering system for school students, where I was tasked with developing three screens provided as Figma designs. I implemented these screens in React using TypeScript and Tailwind CSS, ensuring they were fully responsive for both mobile and web. This project showcases my ability to accurately convert UI/UX designs into functional, visually clean front-end components as part of an early-stage product setup.",
  //   technologies: ["HTML", "Tailwind Css", "React","Typescript","Vite"],
  //   github : "https://github.com/Jayavandhana21/e-Dine-Demo",
  //   live : "https://jayavandhana21.github.io/React-Portfolio/" 
  // }
];

export const CONTACT = {
  address: "Palani, Tamil Nadu",
  phoneNo: "+91 6384xxxxxx",
  email: "jayavandhana21@gmail.com",
};