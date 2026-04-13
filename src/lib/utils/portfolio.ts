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
  tagline: "I'm a Software Engineer | Full-Stack Developer",
  description:
    "I'm an enthusiastic Full-Stack Developer with multiple experiences on various web 🖥️ and mobile 📱 projects.",
  specialText: 'I am currently seeking new job opportunities in Germany.',
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
  img: '/me.png',
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
      title: 'Back-End development',
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building RESTful and GraphQL APIs using Node.js, Express.js, and Spring Boot',
        'Developing server-side applications with Symfony, Laravel, and other frameworks',
        'Designing and managing databases using MySQL, PostgreSQL, MongoDB, and Firebase',
        'Implementing authentication, authorization, and security best practices',
        'Optimizing server-side performance and scalability',
        'Integrating third-party APIs and microservices',
      ],
      softwareSkills: [
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'express', icon: 'logos:express' },
        { name: 'springboot', icon: 'logos:spring-icon' },
        { name: 'laravel', icon: 'logos:laravel-icon' },
        { name: 'symfony', icon: 'logos:symfony-icon' },
        { name: 'mongodb', icon: 'logos:mongodb-icon' },
        { name: 'firebase', icon: 'logos:firebase' },
        { name: 'mysql', icon: 'logos:mysql-icon' },
        { name: 'postgresql', icon: 'logos:postgresql-icon' },
        { name: 'graphql', icon: 'logos:graphql-icon' },
        { name: 'docker', icon: 'logos:docker-icon' },
        { name: 'kubernetes', icon: 'logos:kubernetes-icon' },
        { name: 'redis', icon: 'logos:redis-icon' },
        { name: 'jest', icon: 'vscode-icons:file-type-jest' },
      ],
    },
    {
      id: getId(),
      title: 'Mobile Development',
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building cross-platform mobile apps with React Native and Ionic',
        'Developing native-like mobile experiences using JavaScript and TypeScript',
        'Integrating APIs and backend services into mobile applications',
        'Optimizing mobile performance and implementing offline capabilities',
        'Publishing apps to Google Play Store and Apple App Store',
      ],
      softwareSkills: [
        { name: 'react-native', icon: 'logos:react' },
        { name: 'ionic', icon: 'logos:ionic-icon' },
        { name: 'android', icon: 'logos:android-icon' },
        { name: 'ios', icon: 'logos:apple-icon' },
        { name: 'typescript', icon: 'vscode-icons:file-type-typescript-official' },
        { name: 'javascript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'firebase', icon: 'logos:firebase' },
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
      company: 'Various Open-Source and Collaborative Projects',
      companyUrl: '',
      role: 'Volunteer Full-Stack Developer',
      started: 'Jan 2023',
      upto: 'Feb 2026',
      tasks: [
        'Contributed to multiple projects, both open source and team-based, turning ideas into real, working applications',
        'Supported and mentored junior developers and beginners, helping them build applications and grow their technical skills',
        'Delivered full-stack solutions, covering both frontend and backend development using modern technologies',
        'Collaborated in agile environments, including code reviews, version control, and task coordination'
      ],
    },
    {
      company: 'Westsächsische Hochschule Zwickau (WHZ)',
      companyUrl: '',
      role: 'Research Assistant',
      started: 'Oct 2024',
      upto: 'Dec 2024',
      tasks: [
        'Coordination and technical support of the TAZIZ project in collaboration with WHZ and UTM-ENIT Tunis (DAAD funding)',
        'Organization of project meetings, tracking work packages, and preparing status reports',
        'Analysis, preparation, and visualization of project data for decision support and process optimization'
      ],
    },
    {
      company: 'Treibstoff Evolution GmbH',
      companyUrl: '',
      role: 'Frontend Developer',
      started: 'Jan 2024',
      upto: 'May 2024',
      tasks: [
        'Design, development, and implementation of new features for the iQuest mobile application using React Native, TypeScript, and Laravel',
        'Optimization of code quality, performance, and UI responsiveness through refactoring and efficient component architecture',
        'Creation of modern, user-centered UI/UX interfaces to enhance user experience',
        'Collaboration within an agile development team using GitHub, code reviews, and task management in Jira'
      ],
    },
    {
      company: 'Gaea21',
      companyUrl: 'https://www.repertoirevert.org/',
      role: 'Full-Stack Developer & Project Lead (Internship)',
      started: 'Jan 2021',
      upto: 'Jul 2021',
      tasks: [
        'Development of the Green Index web and mobile application using Ionic 4, Symfony 4, and REST APIs',
        'Implementation of interactive maps and data visualizations using Mapbox and custom UI components',
        'Leadership of an interdisciplinary team, sprint planning, and coordination of development tasks',
        'Ensuring code quality, version control, and collaborative development through GitHub'
      ],
    },
    {
      company: 'NetCapital',
      companyUrl: '',
      role: 'Full-Stack Developer (University Project)',
      started: 'Mar 2020',
      upto: 'Jul 2020',
      tasks: [
        'Development of a website generator for customizable products as part of an academic project',
        'Design and implementation of the complete software lifecycle – from architecture to deployment',
        'Implementation of frontend and backend functionalities using the MERN stack (MongoDB, Express.js, React, Node.js)',
        'Creation of a modular, scalable structure with reusable components and RESTful APIs',
        'Integration of dynamic product configuration features and user management to enhance flexibility and user experience'
      ],
    },
    {
      company: 'Technipack',
      companyUrl: 'https://technipack.tn/',
      role: 'Full-Stack Developer',
      started: 'Jan 2018',
      upto: 'Dec 2020',
      tasks: [
        'Development and maintenance of web and mobile applications using ReactJS, React Native, Laravel, and REST APIs',
        'Integration of PostgreSQL and MongoDB databases and implementation of secure user management systems',
        'Modernization of UI/UX designs and performance improvement of legacy applications',
        'Planning, testing, and deployment of digital projects in an industrial environment in close collaboration with project teams'
      ],
    },
  ],
};


// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'My Latest Public Projects',
  projects: [
    {
      id: getId(),
      name: 'Outcation',
      url: 'https://www.outcation.app/',
      repo: '#',
      img: '/screenshots/home-dashboard.png',
      images: [
        '/screenshots/home-dashboard.png',
        '/screenshots/trip_details1.png',
        '/screenshots/trip_details.png',
        '/screenshots/upcoming.png',
        '/screenshots/community.png',
      ],
      year: 2026,
      tags: ['React-Native', 'Expo', 'NodeJs', 'ExpressJs, MongoDB', 'OSM', 'OpenStreetMap', 'Redis', 'Socket.io', 'Push Notifications', 'Stripe', 'ImageKit'],
      description: 'A mobile application for campers and outdoor enthusiasts to discover, book, and review camping sites across different regions.',
      features: [
        '🏕️ Trip Planning – Organize routes, stops, and activities with ease',
        '🗺️ Maps & Routes – Navigate trails and camping spots precisely',
        '🧭 Real-Time Location – Live tracking for better routing and group coordination',
        '📸 Community Feed – Share photos, tips, and updates with fellow adventurers',
        '👨‍🏕️ Verified Guides – Book trusted professional guides safely',
        '🤖 AI-Powered Itineraries – Personalized trip recommendations',
      ],
    },
    {
      id: getId(),
      name: 'Lapachian Jewelry',
      url: 'https://lapachianofamerica.vercel.app/',
      repo: '#',
      img: '/screenshots/lapachian.png',

      year: 2026,
      tags: ['NextJs', 'TailwindCss', 'Framer-Motion'],
      description: 'A jewelry e-commerce website for Lapachian Jewelry.',
      features: [
        'Responsive design optimized for all devices',
        'Modern UI/UX with smooth animations using Framer Motion',
        'Product showcase with detailed views',
        'Shopping cart and checkout functionality',
        'Product filtering and search',
        'Product reviews and ratings',
      ],
    },
    {
      id: getId(),
      name: 'Technipack',
      url: 'https://technipack.tn/',
      repo: '#',
      img: 'https://i.ibb.co/DDf4FbM1/Screenshot-2026-02-07-230513.png',
      year: 2026,
      tags: ['NextJs 16', 'TailwindCss', 'Framer-Motion'],
      description: 'A modern company website for Technipack, a packaging solutions provider. Built with cutting-edge technologies for optimal performance and user experience.',
      features: [
        'Responsive design optimized for all devices',
        'Modern UI/UX with smooth animations using Framer Motion',
        'SEO-optimized structure for better search visibility',
        'Fast page load times with Next.js 16 App Router',
        'Dark mode support for enhanced user experience',
        'Contact form integration for customer inquiries',
      ],
    },
    {
      id: getId(),
      name: 'AIrtisan- Wireframe to Code',
      url: 'https://github.com/fjerbi/Airtisan',
      repo: 'https://github.com/fjerbi/Airtisan',
      img: 'https://github.com/fjerbi/Airtisan/blob/main/public/scr1.png?raw=true',
      year: 2026,
      tags: ['NextJs', 'StackblitzSDK', 'Openrouter.ai', 'Framer-Motion'],
      description: 'An AI-powered tool that converts wireframe sketches and descriptions into production-ready code using advanced AI models.',
      features: [
        'AI-powered wireframe to code conversion',
        'Integration with OpenRouter.ai for multiple AI model support',
        'Live code preview using StackBlitz SDK',
        'Support for multiple frontend frameworks',
        'Export generated code to GitHub',
        'Real-time collaboration features',
      ],
    },

    {
      id: getId(),
      name: 'AI Email Spam Detector',
      url: '#',
      repo: 'https://github.com/fjerbi/AI-Spam-Detector',
      img: 'https://i.ibb.co/jZyYnGBY/Chat-GPT-Image-Jan-28-2026-09-17-16-PM.png',
      year: 2026,
      tags: ['python'],
      description: 'A machine learning-based email spam detection system that classifies emails with high accuracy using NLP techniques.',
      features: [
        'Machine learning-based spam classification',
        'Natural Language Processing for content analysis',
        'High accuracy detection algorithm',
        'Customizable spam threshold settings',
        'Batch processing for multiple emails',
        'Detailed classification reports',
      ],
    },
    {
      id: getId(),
      name: 'Le Répertoire Vert',
      url: 'https://www.repertoirevert.org/',
      repo: '#',
      img: 'https://i.ibb.co/1zFnq56/maxresdefault.jpg',
      year: 2021,
      tags: ['Ionic 5', 'Symfony 5', 'MySql', 'Leaflet'],
      description: 'An eco-friendly business directory application promoting sustainable products and services. Part of the Gaea21 environmental project.',
      features: [
        'Eco-business directory with map integration',
        'Search and filter sustainable products/services',
        'Business profile pages with ratings',
        'Leaflet maps for location-based discovery',
        'User favorites and recommendation system',
        'Cross-platform mobile app with Ionic',
        'Admin dashboard for business management',
      ],
    },


    {
      id: getId(),
      name: 'Who Pay the bills',
      url: '#',
      repo: 'https://github.com/fjerbi/react-native-who-pay-the-bills',
      img: 'https://i.ibb.co/CBqqTgh/screenshot-rocks-2.png',
      year: 2023,
      tags: ['React-Native'],
      description: 'A fun React Native application that helps groups decide who pays for shared expenses using a random selection algorithm.',
      features: [
        'Random winner selection algorithm',
        'Add multiple participants for group decisions',
        'History tracking of past selections',
        'Clean and intuitive mobile interface',
        'Offline functionality',
        'Share results with friends',
      ],
    },
    {
      id: getId(),
      name: 'StadiaMaps Turn-By-Turn App',
      url: '#',
      repo: 'https://github.com/fjerbi/rn-Maplibre-TurnByTurn',
      img: 'https://i.ibb.co/kg2kKbZr/maxresdefault.jpg',
      year: 2023,
      tags: ['React-Native', 'MapLibre', 'StadiaMaps API', 'Géolocation'],
      description: 'A React Native navigation app featuring turn-by-turn directions using StadiaMaps API and MapLibre for custom map rendering.',
      features: [
        'Real-time turn-by-turn navigation',
        'Custom map styling with MapLibre',
        'Voice-guided directions',
        'Offline map caching',
        'Multiple route options',
        'Search for addresses and POIs',
        'Background location tracking',
      ],
    },
    {
      id: getId(),
      name: 'React-Native Google Maps Clone',
      url: 'https://www.youtube.com/playlist?list=PLxytbXx3I1x8bS0scZRTP1fBVaRHUW3la',
      repo: 'https://github.com/fjerbi/React-Native-Mapbox-Tutorial',
      img: 'https://i.ibb.co/PCddYHK/hq720.jpg',
      year: 2023,
      tags: ['React-Native', 'Mapbox', 'Dynamic Routing', 'Géolocation'],
      description: 'A comprehensive tutorial project creating a Google Maps clone with dynamic routing, navigation, and location features.',
      features: [
        'Interactive map with custom markers',
        'Dynamic route calculation and display',
        'Real-time user location tracking',
        'Search and autocomplete for destinations',
        'Turn-by-turn navigation simulation',
        'Custom map styles and themes',
        'Complete YouTube tutorial series',
      ],
    },
    {
      id: getId(),
      name: 'Ready-to-use portfolio template',
      url: 'https://nextjs-portfolio-starter-template.vercel.app/',
      repo: 'https://github.com/fjerbi/nextjs-portfolio-starter-template',
      img: 'https://i.ibb.co/q5SKR8X/template.png',
      year: 2022,
      tags: ['NextJS', 'Framer Motion', 'TailwindCss'],
      description: 'An open-source portfolio template built with Next.js, designed for developers to quickly set up their personal portfolio website.',
      features: [
        'One-click deploy to Vercel',
        'Fully responsive design',
        'Dark mode support',
        'Smooth animations with Framer Motion',
        'SEO optimized structure',
        'Easy customization with TailwindCSS',
        'Sections for projects, skills, and experience',
      ],
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
