import Head from 'next/head';
import { Fragment } from 'react';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';

import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const UnderContruction = () => {
    return (
        <Fragment>
            <Head>
                <title>This project is under construction</title>
                <link rel='icon' href='/favicon.ico' />
                <meta
                    name='description'
                    content='Hi, I am Kim, a web developer based in Finland. I have been working with React.js, Node.js, and MongoDB for more than two years. I am now looking for a career opportunity. Please, feel free contact me if you have any question related to web development.'
                />
                <meta property="og:title" content="Kim Nguyen's web portfolio" />
                <meta property="og:url" content="https://portfolio-six-nu-64.vercel.app/" />
                <meta property="og:image" content="https://portfolio-six-nu-64.vercel.app/favicon.ico" />
            </Head>
                <Section grid>
                    <h1 style={{textAlign : "center"}}>Sorry! This site is under construction</h1>
                    <BgAnimation />
                </Section>
        </Fragment>
    )
};

export default UnderContruction;
