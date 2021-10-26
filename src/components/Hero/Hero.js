import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi! My name is Kim Nguyen <br />
          and I am a web developer
        </SectionTitle>
        <SectionText>
          You can read more about my biography, experience, skills, education and much more in the PDF attached bellow.
        </SectionText>
        <a href="https://portfolio-six-nu-64.vercel.app/public/Resume_Kim_Nguyen.pdf" download>
        <Button onClick={props.handleClick}>My resume</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
