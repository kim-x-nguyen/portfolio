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
          You can read more about my biography, experience, skills, education and much more in the PDF attached below.
        </SectionText>
        <a href="Resume_Kim_Nguyen.pdf" target={'_blank'}>
        <Button onClick={props.handleClick}>My resume</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
