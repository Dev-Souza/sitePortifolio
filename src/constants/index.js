import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  java,
  spring,
  angular,
  postgres,
  toDoList,
  kauanTech,
  kauanCine
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mim",
  },
  {
    id: "works",
    title: "Projetos",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "FrontEnd",
    icon: web,
  },
  {
    title: "React Native",
    icon: mobile,
  },
  {
    title: "Backend",
    icon: backend,
  },
  {
    title: "Desenvolvedor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Boot",
    icon: spring,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular JS",
    icon: angular,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
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
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "KauanCine",
    description:
      "Sistema de cinema completo, com tela de gerência de filmes, sessões e etc. Dashboard com gráficos, escolha de filme, assento e pagamento. ",
    tags: [
      {
        name: "react+next",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "localStorage",
        color: "pink-text-gradient",
      },
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
    ],
    image: kauanCine,
    source_code_link: {
      front: "https://github.com/Dev-Souza/kauanCine",
      post: "https://www.linkedin.com/posts/kauan-souza-lima-b88347276_kauancine-react-nextjs-activity-7311859802022801408-HHKT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENTfdgBII1u-1Kl415mm20Cm_zlZ3RAOZU"
    },
  },
  {
    name: "ToDoList",
    description:
      "Gerenciamento de tarefas feitas no dia a dia com react native. Tarefas separadas por categoria, data, urgência e etc. Fiz uma API REST em Java e Spring com PostgreSQL e conectei os dois com axios.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "react-native-paper",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
      {
        name: "spring",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
    ],
    image: toDoList,
    source_code_link: {
      front: "https://github.com/Dev-Souza/toDoList_mobile",
      back: "https://github.com/Dev-Souza/toDoList",
      post: "https://www.linkedin.com/posts/kauan-souza-lima-b88347276_reactnative-springboot-mobiledevelopment-activity-7338939606249230336-eN9h?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENTfdgBII1u-1Kl415mm20Cm_zlZ3RAOZU"
    },
  },
  {
    name: "KauanTech",
    description:
      "Fiz uma loja de tecnologia baseadas na amazon e mercado livre. Com tela de gerências dos itens da loja e usuários, dashboard com gráficos do ChartJS e login com JWT. Fiz um backend em JS, express e MongoDB e etc.",
    tags: [
      {
        name: "react+vite",
        color: "blue-text-gradient",
      },
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "blue-text-gradient",
      },
    ],
    image: kauanTech,
    source_code_link: {
      front: "https://github.com/Dev-Souza/kauanTech_front",
      back: "https://github.com/Dev-Souza/kauanTech",
      post: "https://www.linkedin.com/posts/kauan-souza-lima-b88347276_javascript-reactjs-nodejs-activity-7343021554030579713-ikl8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENTfdgBII1u-1Kl415mm20Cm_zlZ3RAOZU"
    }
  },
];

export { services, technologies, experiences, testimonials, projects };