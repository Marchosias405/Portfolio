// src/constants/index.js

import {
  frontend,
  auditl,
  crowdl,
  // mentorl,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  next as docker,
  c,
  cpp,
  python,
  iso,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  GD,
  enrollmentRush,
  analytics,
  Docker,
  postgres,
} from '../assets';

import rollCall  from '../assets/projects/RollCall.png';
import reporting from '../assets/projects/Reporting.png';
import fugo      from '../assets/projects/Fugo.png';
// import roadsDuel from '../assets/projects/RoadDuel.jpeg';

import LLL       from '../assets/projects/LLL.png';

export const navLinks = [
  { id: 'about',    title: 'About'    },
  { id: 'projects', title: 'Projects' },
  { id: 'contact',  title: 'Contact'  },
];

export const services = [
  { title: 'Frontend Development', icon: frontend },
  { title: 'IT Compliance',        icon: auditl   },
  { title: 'Project Management',   icon: crowdl   },
  { title: 'Data Analytics',            icon: analytics  },
];

export const technologies = [
  { name: 'HTML 5',       icon: html    },
  { name: 'CSS 3',        icon: css     },
  { name: 'JavaScript',   icon: javascript },
  { name: 'React JS',     icon: reactjs },
  { name: 'Tailwind CSS', icon: tailwind },
  { name: 'Node JS',      icon: nodejs },
  { name: 'Docker',       icon: docker },
  { name: 'Git',          icon: git    },
  { name: 'C',            icon: c      },
  { name: 'C++',          icon: cpp    },
  { name: 'Python',       icon: python },
  { name: 'ISO 27001',    icon: iso    },
  { name: 'postgresql',       icon: postgres },
];

// replace the existing `experiences` array with this

export const experiences = [
  {
    title: "Afterschool Program Instructor",
    company_name: "Professor Puffins Challenge Club",
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2024 - Mar 2025',
  },
  {
    title: 'Tutor & Academic Coach',
    company_name: 'VICI Learning',
    icon: microverse,
    iconBg: '#333333',
    date: 'Apr 2025 - Jun 2025',
  },
  {
    title: 'Relief Manager & Sales Associate',
    company_name: 'The UPS Store',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Feb 2024 - Present',
  },
  {
    title: 'Volunteer Data Analyst',
    company_name:
      'The Crisis Intervention and Suicide Prevention Centre of British Columbia',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jul 2025 - Present',
  },
];


export const projects = [
  {
    id: 'project-1',
    name: 'Enrollment Rush',
    description:
      'Multiplayer strategy game with lobby, real-time course grabs, round sync, and dynamic scoring inspired by SFU enrollment.',
    tags: [
      { name: 'nextjs',  color: 'blue-text-gradient' },
      { name: 'supabase', color: 'green-text-gradient' },
      { name: 'css',      color: 'pink-text-gradient' },
    ],
    image: enrollmentRush, // make sure this matches the export from src/assets/index.js
    repo:  'https://github.com/nilocnus/enrolmentrush', // update with your repo
    demo:  'https://www.youtube.com/watch?v=nVZTqTUhgCc', // update with your demo or drive link
  },
  {
    id: 'project-2',
    name: 'RollCall',
    description:
      'Next.js/React app for after-school programs with real-time attendance tracking and a unified coordinator dashboard',
    tags: [
      { name: 'react',   color: 'blue-text-gradient'  },
      { name: 'nextjs',  color: 'green-text-gradient' },
      { name: 'css',     color: 'pink-text-gradient'  },
    ],
    image: rollCall,
    repo:  'https://github.com/shaqdeff/RollCall',
    demo:  'https://drive.google.com/file/d/1Afc_rQp3xi14XXPany3SbFctcGm9uyR4/view',
  },
  {
    id: 'project-3',
    name: 'Call Management System',
    description:
      'Emergency call system with interactive maps, real-time geocoding, and secure CRUD for streamlined incident reporting and monitoring.',
    tags: [
      { name: 'react',   color: 'blue-text-gradient'  },
      { name: 'restapi', color: 'green-text-gradient' },
      { name: 'scss',    color: 'pink-text-gradient'  },
    ],
    image: reporting,
    repo:  'https://github.com/Yunhh-Hahn/272-Map-Assignment',
    demo:  'https://github.com/Yunhh-Hahn/272-Map-Assignment/blob/main/document/C272%20Map%20test.pdf',
  },
  {
    id: 'project-4',
    name: 'Fu-Go Défense',
    description:
      'A game where players control a military cannon to shoot down incoming FuGo balloons.',
    tags: [
      { name: 'react',     color: 'blue-text-gradient'  },
      { name: 'canvas',    color: 'green-text-gradient' },
      { name: 'javascript',color: 'pink-text-gradient'  },
    ],
    image: fugo,
    repo:  'https://github.com/Marchosias405/Fu-Go-D-fense',
    demo:  'https://marchosias405.github.io/Fu-Go-D-fense/',
  },
  // {
  //   id: 'project-4',
  //   name: 'Road Duel',
  //   description:
  //     'An apocalyptic-themed board game where players navigate through 64 intersections and three zones to reach the antidote point first.',
  //   tags: [
  //     { name: 'react',      color: 'blue-text-gradient' },
  //     { name: 'apocalypse', color: 'green-text-gradient' },
  //     { name: 'boardgame',  color: 'pink-text-gradient'  },
  //   ],
  //   image: roadsDuel,
  //   repo:  'https://drive.google.com/file/d/1-KElLoPfPt9Y9sUjU8dCneCRdHSqYOY2/view?usp=sharing',
  //   demo:  'https://drive.google.com/file/d/1EC_dnz6AWKuQlvhrIIMbWlN8229SKgmz/view?usp=sharing',
  //   repoIcon: GD,
  // },
  {
    id: 'project-5',
    name: 'Laughing with Leaves',
    description:
      'Leaf-themed riddle game that grows a virtual tree with each correct answer.',
    tags: [
      { name: 'html',       color: 'blue-text-gradient'  },
      { name: 'css',        color: 'green-text-gradient' },
      { name: 'javascript', color: 'pink-text-gradient'  },
    ],
    image: LLL,
    repo:  'https://github.com/dqhntt/Leaf-Pun-Quiz?tab=readme-ov-file',
    demo:  'https://www.youtube.com/watch?v=vvse9x3ZvrQ',
  },
];
