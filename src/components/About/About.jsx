import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import img1 from '../../images/profile.jpg';
import {
  AboutWrapper,
  AboutRow,
  Column1,
  Column2,
  TextWrapper,
  ImgWrap,
  Img,
  AboutContainer,
  Connect,
  SocialMediaWrap,
  SocialIcons,
  SocialIconLink,
} from './styles';
import {
  Heading,
  Subtitle,
} from '../Common';

const About = (props) => (

  <AboutContainer lightBg id="about">
    <AboutWrapper>
      <AboutRow>
        <Column1>
          <TextWrapper>
            <Heading color={props.themeColor.textColor.toString()}>about me</Heading>
            <Subtitle color={props.themeColor.textColor.toString()} maxWidth="780px">I am a developer interested in thinking outside of the box to create innovative and robust solutions. I have experience with multiple languages, including React, C, Java and JavaScript (ES6+). I am passionate about full-stack development, with a focus in human-computer interaction. Currently, I study Computer Science at the University of Waterloo. </Subtitle>
          </TextWrapper>
          <Connect>connect with me at:</Connect>
          <SocialMediaWrap>
            <SocialIcons>
              <SocialIconLink
                href="mailto:a278chen@uwaterloo.com"
                aria-label="Email Annie Chen"
              >
                <FiMail />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/askanniething/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/askanniething"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/askanniething/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </Column1>
        <Column2>
          <ImgWrap>
            <Img src={img1} alt="Adf" />
          </ImgWrap>
        </Column2>
      </AboutRow>
    </AboutWrapper>
  </AboutContainer>
);
export default About;
