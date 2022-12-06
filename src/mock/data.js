import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: 'en',
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Steve Boyer',
  subtitle: 'I am a full stack developer',
  cta: 'Find out more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// TECH DATA
export const techData = [
  {
    id: nanoid(),
    img: 'javascript.png',
    title: 'JavaScript',
    info: 'test',
    info2: 'test',
    url: 'https://www.github.com',
  },
  {
    id: nanoid(),
    img: 'react.png',
    title: 'React',
    info: 'test',
    info2: 'test',
    url: 'https://www.github.com',
  },
  {
    id: nanoid(),
    img: 'css.png',
    title: 'CSS',
    info: 'test',
    info2: 'test',
    url: 'https://www.github.com',
  },
  {
    id: nanoid(),
    img: 'styled-components.png',
    title: 'test',
    info: 'test',
    info2: 'test',
    url: 'https://www.github.com',
  },
  {
    id: nanoid(),
    img: 'graphql',
    title: 'test',
    info: 'test',
    info2: 'test',
    url: 'https://www.github.com',
  },
  {
    id: nanoid(),
    img: 'react.svg',
    title: 'test',
    info: 'test',
    info2: 'test',
    url: 'https://www.github.com',
  },



];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};



// Github start/fork buttons
export const githubButtons = {
  isEnabled: false,
};
