import { author, socialLinks } from '@/lib/content/portfolio';
import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '@/lib/types/sections';

import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Firas Jerbi.',
  tagline: "I'm a Software Engineer | Front-End Developer",
  description:
    "I'm an enthusiastic Front-End Developer with multiple experiences on various web 🖥️ and mobile 📱 projects.",
  specialText: 'I am currently seeking new job opportunities',
  cta: {
    title: 'check my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from containers/About.tsx
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are some of the technologies I’ve been actively using recently',
    items: [
      'ReactJs',
      'React-Native',
      'Angular',
      'Ionic',
      'Typescript',
      'Symfony',
      'Laravel',
      'NextJs',
      'TailwindCSS',
      'ExpressJs',
    ],
  },
  img: '/firasjerbiv2.png',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'Front-End development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Creating responsive static websites with Next.js',
        'Developing responsive Single Page Apps using React.js',
        'Crafting mobile applications with React-Native',
        'Constructing RESTful APIs using ExpressJs',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'sass', icon: 'vscode-icons:file-type-sass' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'python', icon: 'vscode-icons:file-type-python' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'angularjs', icon: 'logos:angular-icon' },
        { name: 'laravel', icon: 'logos:laravel-icon' },
        { name: 'symfony', icon: 'logos:symfony-icon' },
        { name: 'ionic', icon: 'logos:ionic-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
        { name: 'jest', icon: 'vscode-icons:file-type-jest' },
      ],
    },
    {
      id: getId(),
      title: 'UI/UX designing',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [

        'Proficiency in creating user-friendly interfaces with Figma',
        'Competence in establishing design systems and style guides',
        'Delivering user-friendly design solutions',
      ],
      softwareSkills: [
        { name: 'figma', icon: 'logos:figma' },
        { name: 'adobe illustrator', icon: 'logos:adobe-illustrator' },
        { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
      ],
    },
  ],
};


export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: ' Westsächsische Hochschule Zwickau',
      companyUrl: '',
      role: 'Research Assistant',
      started: 'Oct 2024',
      upto: 'Dec 2024',
      tasks: [
        'Implementation and organisation of workshops and two conferences, one of which in Tunisia',
        'Implementation and coordination of an online seminar to consolidate the results',
        'Project management and administration, achieving project outcomes and outputs',
        'Development of two new multidisciplinary courses with partners',
        'Conducting literature research and analysis to develop workshop materials for the conferences',
        'Preparation and presentation of lectures at the planned scientific conferences',
        'Documentation of the workshops, the technical seminar and the online conference',
        'Publication of a results report'
      ],
    },
    {
      company: 'Treibstoff Evolution GmbH',
      companyUrl: '',
      role: 'Front-End Developer | Mobile Developer',
      started: 'Jan 2024',
      upto: 'May 2024',
      tasks: [
        'Working on the iQuest mobile Application',
        'Technologies used: React-Native, Typescript, TailwindCSS, PHP, Laravel, Github, Jira',
      ],
    },
    {
      company: 'UpWork',
      companyUrl: '',
      role: 'Freelancer | Full-Stack Developer',
      started: 'Feb 2022',
      upto: 'August 2022',
      tasks: [
        'Working on both mobile and web applications',
        'Fixing bugs and developing high-scale modules',
      ],
    },
    {
      company: 'Gaea21',
      companyUrl: 'https://www.repertoirevert.org/',
      role: 'Full-Stack Developer',
      started: 'Jan 2021',
      upto: 'Jul 2021',
      tasks: [
        'Conception and development of the mobile application The Green Index',
        'Migrations of both mobile and web applications from Ionic 3 to 5 and Symfony from 3.4 o 5',
        'Team and project management',
        'Report and documentation of the whole application.',
      ],
    },
    {
      company: 'Technipack',
      companyUrl: 'https://technipack.tn/',
      role: 'Web Developer',
      started: 'Apr 2020',
      upto: 'August 2020',
      tasks: [
        'Conception and Development of an E-commerce website',
        'Production phase process',
      ],
    },
    {
      company: 'DevTweaks',
      companyUrl: 'https://webnetic.vercel.app/',
      role: 'Web Developer',
      started: 'Jan 2018',
      upto: 'June 2018',
      tasks: [

      ],
    },
  ],
};

// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'UIllusion',
      url: '#',
      repo: '#',
      img: 'https://i.ibb.co/N2nXjRC7/UIllusion-02-20-2025-02-31-PM.png',
      year: 2025,
      tags: ['NextJs', 'Openrouter.ai', 'Framer-Motion'],
    },
    {
      id: getId(),
      name: 'Le Répertoire Vert',
      url: 'https://www.repertoirevert.org/',
      repo: '#',
      img: 'https://i.ibb.co/1zFnq56/maxresdefault.jpg',
      year: 2021,
      tags: ['Ionic 5', 'Symfony 5', 'MySql', 'Leaflet'],
    },
    {
      id: getId(),
      name: 'Technipack',
      url: 'https://technipack.tn/',
      repo: '#',
      img: 'https://i.ibb.co/YRWNLSg/technipack.png',
      year: 2020,
      tags: ['Laravel 6', 'TailwindCss'],
    },
    {
      id: getId(),
      name: 'Campi',
      url: 'https://play.google.com/store/apps/details?id=com.fjerbi.campi',
      repo: '#',
      img: 'https://play-lh.googleusercontent.com/YQIaA9cnavU-hc58LVzL_0-R2YVbtadKcrYvBLhPl8KDarvqJ5MBm6SKatHxET1_WVs9=w2560-h1440-rw',
      year: 2025,
      tags: ['React-Native', 'NodeJs', 'ExpressJs, MongoDB', 'Mapbox'],
    },
    {
      id: getId(),
      name: 'Who Pay the bills',
      url: '#',
      repo: 'https://github.com/fjerbi/react-native-who-pay-the-bills',
      img: 'https://i.ibb.co/CBqqTgh/screenshot-rocks-2.png',
      year: 2023,
      tags: ['React-Native'],
    },
    {
      id: getId(),
      name: 'StadiaMaps Turn-By-Turn App',
      url: '#',
      repo: 'https://github.com/fjerbi/rn-Maplibre-TurnByTurn',
      img: 'https://camo.githubusercontent.com/2b40aa479e6507dc43e6f8076e55ebac9142297d6037a127e51a4b8915bdecd8/68747470733a2f2f692e6962622e636f2f4638444679524d2f73746164696176322e706e67',
      year: 2023,
      tags: ['React-Native', 'MapLibre', 'StadiaMaps API', 'Géolocation'],
    },
    {
      id: getId(),
      name: 'React-Native Google Maps Clone',
      url: 'https://www.youtube.com/playlist?list=PLxytbXx3I1x8bS0scZRTP1fBVaRHUW3la',
      repo: 'https://github.com/fjerbi/React-Native-Mapbox-Tutorial',
      img: 'https://i.ibb.co/PCddYHK/hq720.jpg',
      year: 2023,
      tags: ['React-Native', 'Mapbox', 'Dynamic Routing', 'Géolocation'],
    },
    {
      id: getId(),
      name: 'Ready-to-use portfolio template',
      url: 'https://nextjs-portfolio-starter-template.vercel.app/',
      repo: 'https://github.com/fjerbi/nextjs-portfolio-starter-template',
      img: 'https://i.ibb.co/q5SKR8X/template.png',
      year: 2022,
      tags: ['NextJS', 'Framer Motion', 'TailwindCss'],
    },
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    'I’m presently in search of remote employment or exploring new career prospects',
    'Whether you’d like to discuss a project or simply drop a friendly greeting, my inbox welcomes all!',
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'mdi:instagram',
      url: socialLinks.instagram,
    },
    {
      icon: 'lucide:twitter',
      url: socialLinks.twitter,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
    {
      icon: 'lucide:facebook',
      url: socialLinks.facebook,
    },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: 'Design & Built by Firas Jerbi',
  link: 'https://fjerbi.github.io/',
};
