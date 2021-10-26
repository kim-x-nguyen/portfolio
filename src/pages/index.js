import Head from 'next/head';
import { Fragment } from 'react';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {


  return (<Fragment>
    <Head>
      <title>Kim Nguyen's portfolio</title>
      <meta
        name='description'
        content='Hi, I am Kim, a web developer based in Finland. I have been working with React.js, Node.js, and MongoDB for more than two years. I am now looking for a career opportunity. Please, feel free contact me if you have any question related to web development.'
      />
    </Head>
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  </Fragment>
  );
};

export default Home;
