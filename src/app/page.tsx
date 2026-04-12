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
      <meta
        name="google-site-verification"
        content="bGvqA56lOU8jIWPDDN6sbtsU-rJ0Kelp-kyTl_YBKk4"
      />
      <meta
        name="description"
        content="Firas Jerbi is a Full Stack Developer based in Germany specializing in React, Next.js, Node.js, and mobile development. Currently seeking full-time employment opportunities."
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
