import {
  About,
  Contact,
  Experience,
  Hero,
  Layout,
  Projects,
  Skills,
} from '@/containers';

import type { NextPage } from 'next';

/**
 * TODO: Create separate page for all the projects with filters (vercel | netlify | github api for automation)
 * TODO: Switch to next13 app dir feature, when lottie files start working in app dir
 * TODO: Try test cases
 */

const Home: NextPage = () => {
  return (
    <>
      <meta name="google-site-verification" content="NEDmAy1kKSil4bqazgW-WssV1GsyP6T_-TtbFejvHQs" />
      <meta
        name="description"
        content="Firas Jerbi is a full-stack developer who specializes in building Web and Mobile projects and works on both frontend and backend."
      />
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
