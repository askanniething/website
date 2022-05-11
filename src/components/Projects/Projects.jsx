import React from 'react';
import {
  ProjectsContainer,
  ProjectsWrapper,
  TopWrapper,
  OutsideWrap,
} from './styles';

import Img1 from '../../images/watc.jpg';
import Img2 from '../../images/tsk.jpg';
import Img3 from '../../images/afr.jpg';
import BA from '../../images/ba.jpg';
import Tuder from '../../images/tud.jpg';
import SewEasy from '../../images/rite.png';

import Card from '../Card/Card';
import { Heading } from '../Common';

const Projects = (props) => (
  <ProjectsContainer id="projects">
    <TopWrapper>
      <Heading color={props.themeColor.textColor.toString()} style={{ marginBottom: '0' }}> projects </Heading>
    </TopWrapper>
    <ProjectsWrapper>
    <OutsideWrap>
        <Card
          title="RiteReview"
          date="April 2022"
          technologies="MERN Stack &amp; Passport.js"
          description="A book tracker web app to record and display book reviews and ratings. Integrated with Google Books API and GoogleOAuth2.0 (Passport.js) for user security."
          website="https://github.com/askanniething/RiteReview"
          Pic={SewEasy}
          backColor={props.themeColor.darkColor}
          textBackground={props.themeColor.mainColor}
          borderColor={props.themeColor.textColor}
          titleColor={props.themeColor.titleColor}
          highlightColor={props.themeColor.accentColor}
          backgroundColor={props.themeColor.backgroundColor}
        />
      </OutsideWrap>
      <OutsideWrap right>
        <Card
          title="Watchr"
          date="August 2021"
          technologies="React &amp; Electron"
          description="An Electron app to record live web events when users are away. Allows users to select a recording time and automatically saves the file to a computer directory. Built with a React frontend. "
          website="https://github.com/askanniething/Watchr"
          Pic={Img1}
          backColor={props.themeColor.darkColor}
          textBackground={props.themeColor.mainColor}
          borderColor={props.themeColor.textColor}
          titleColor={props.themeColor.titleColor}
          highlightColor={props.themeColor.accentColor}
          backgroundColor={props.themeColor.backgroundColor}
        />
      </OutsideWrap>
      <OutsideWrap>
        <Card
          title="Taskeeper"
          date="August 2021"
          technologies="React, Node.js &amp; Express.js"
          description="A project-based calendar app for students to organize tasks based on hierarchy. The React front-end communicates with a Node.js &amp; Express.js REST API to access data in a MongoDB cloud database. Authentication handled through Passport.js. "
          Pic={Img2}
          website="https://github.com/askanniething/taskeeper"
          backColor={props.themeColor.darkColor}
          textBackground={props.themeColor.mainColor}
          borderColor={props.themeColor.textColor}
          titleColor={props.themeColor.titleColor}
          highlightColor={props.themeColor.accentColor}
          backgroundColor={props.themeColor.backgroundColor}
        />
      </OutsideWrap>
      <OutsideWrap right>
        <Card
          title="Africaid"
          date="July 2020"
          technologies="HTML, CSS &amp; JS"
          description="A website and chrome extension combination that generates ad revenue for relevant charities.
          Created with HTML, CSS, JavaScript and JSON. Linked and stored images in Google Firebase."
          website="https://github.com/askanniething/Africaid"
          Pic={Img3}
          backColor={props.themeColor.darkColor}
          textBackground={props.themeColor.mainColor}
          borderColor={props.themeColor.textColor}
          titleColor={props.themeColor.titleColor}
          highlightColor={props.themeColor.accentColor}
          backgroundColor={props.themeColor.backgroundColor}
        />
      </OutsideWrap>
      <OutsideWrap>
        <Card
          title="Bon Appletit"
          date="July 2018"
          technologies="Java"
          description="An interactive game with 3 levels designed to teach children about the importance of healthy eating.
          Coded using Java using the JavaFX libraries."
          website="https://github.com/askanniething/Bon-Appletit"
          Pic={BA}
          backColor={props.themeColor.darkColor}
          textBackground={props.themeColor.mainColor}
          borderColor={props.themeColor.textColor}
          titleColor={props.themeColor.titleColor}
          highlightColor={props.themeColor.accentColor}
          backgroundColor={props.themeColor.backgroundColor}
        />
      </OutsideWrap>
      <OutsideWrap right>
        <Card
          title="Tuder"
          date="June 2020"
          technologies="Java &amp; AndroidStudio"
          description="An android application to bridge students and tutors during COVID-19.
          Designed &amp; prototyped in Figma, coded in Java using AndroidStudio.
          Awarded the 2020 Scripts Female Empowerment Award"
          website="https://github.com/haleysong576/Tuder"
          Pic={Tuder}
          backColor={props.themeColor.darkColor}
          textBackground={props.themeColor.mainColor}
          borderColor={props.themeColor.textColor}
          titleColor={props.themeColor.titleColor}
          highlightColor={props.themeColor.accentColor}
          backgroundColor={props.themeColor.backgroundColor}
        />
      </OutsideWrap>
    </ProjectsWrapper>
  </ProjectsContainer>
);

export default Projects;
