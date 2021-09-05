import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import {
  FooterContainer,
  FooterWrap,
  SocialIcons,
  WebsiteRights,
  SocialIconLink,

} from './styles';

const Footer = () => (
  <>
    <FooterContainer>
      <FooterWrap>
        <WebsiteRights>
          Built and designed by Annie Chen
          {' '}
          <br />
          {' '}
          &copy;
          {' '}
          {new Date().getFullYear()}
          {' '}
          All rights reserved
        </WebsiteRights>
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
      </FooterWrap>
    </FooterContainer>
  </>
);

export default Footer;
