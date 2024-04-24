import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  // figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  express,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  mongodb,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  rust,
  python,
  bitcoin,
  ethereum,
  ICP,

} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'MERN Developer',
    icon: frontend,
  },
  {
    title: 'Blockchain Developer',
    icon: backend,
  },
  {
    title: 'AIML Engineer',
    icon: ux,
  },
  {
    title: 'IOT Engineer',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'mongodb',
    icon: mongodb,
  },
  {
    name: 'express',
    icon: express,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'nodejs',
    icon: nodejs,
  },
  {
    name: 'Rust',
    icon: rust,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Bitcoin',
    icon: bitcoin,
  },
  {
    name: 'ethereum',
    icon: ethereum,
  },
  {
    name: 'postgresql',
    icon: ICP,
  },
  {
    name: 'git',
    icon: git,
  },
  // {
  //   name: 'figma',
  //   icon: figma,
  // },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'MERN Developer',
    company_name: 'skillrisers',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'July 2023 - Aug 2023',
  },
  // {
  //   title: 'Mentor (Volunteer)',
  //   company_name: 'Microverse',
  //   icon: microverse,
  //   iconBg: '#333333',
  //   date: 'Mar 2022 - May 2022',
  // },
  // {
  //   title: 'Junior Software Engineer',
  //   company_name: 'Kelhel',
  //   icon: kelhel,
  //   iconBg: '#333333',
  //   date: 'May 2022 - Oct 2022',
  // },
  {
    title: 'Blockchain Developer',
    company_name: 'VedicBLock Labs',
    icon: dcc,
    iconBg: '#333333',
    date: 'Mar 2024 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'AI Powered AidBot',
    description: 'Introducing our AI-powered Aidbot, your ultimate solution for all healthcare inquiries. Harnessing the powerful LLMs of Huggingface, this bot acts as your personal trained doctor, ready to address your day-to-day health-related questions with precision and expertise.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/YashGaur000/AidBot',
    // demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Gotcha',
    description:
      'Experience groundbreaking computer vision technology, engineered to enhance DVRs/NVRs. 💻 Power your CCTV cameras with AI capabilities for face recognition, head counting, object detection, and much more. 📷👤🔍✨A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/YashGaur000/welcome-fd',
    // demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Block2Block',
    description: 'We are currently in the development phase, envisioning a blogging website using DApp architecture. Enjoy features such as logging in with your wallets, staying updated with tech news, and publishing your own blog. Your content will remain accessible, even if our website goes offline.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    // repo: 'https://github.com/shaqdeff/Math-Magicians',
    // demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  // {
  //   id: 'project-4',
  //   name: 'Movie Metro',
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: movie,
  //   repo: 'https://github.com/shaqdeff/Movie-Metro',
  //   demo: 'https://movie-metro.netlify.app/',
  // },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
