import React from 'react';
import {
  ProjectsContainer,
  ProjectsWrapper,
  TopWrapper,
  OutsideWrap,
} from './styles';
import Img1 from '../../images/watchr.png';
import Img2 from '../../images/taskeeper.png';
import Img3 from '../../images/africaid.png';
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
          title="Watchr"
          date="August 2021"
          technologies="React &amp; Electron"
          description="An Electron app to record live web events when users are away. Allows users to select a recording time and automatically saves the file to a computer directory. Built with a React frontend. "
          website="https://github.com/Lanxyuu/Watchr"
          Pic={Img1}
          backColor={props.themeColor.darkColor}
          textBackground={props.themeColor.mainColor}
          borderColor={props.themeColor.textColor}
          highlightColor={props.themeColor.lightColor}
        />
      </OutsideWrap>
      <OutsideWrap right>
        <Card
          title="Taskeeper"
          date="August 2021"
          technologies="React, Node.js &amp; Express.js"
          description="A project-based calendar app for students to organize tasks based on hierarchy. The React front-end communicates with a Node.js &amp; Express.js REST API to access data in a MongoDB cloud database. Authentication handled through Passport.js. "
          Pic={Img2}
          website="https://github.com/haritkapadia/taskeeper"
          backColor={props.themeColor.darkColor}
          textBackground={props.themeColor.mainColor}
          borderColor={props.themeColor.textColor}
          highlightColor={props.themeColor.lightColor}
        />
      </OutsideWrap>
      <OutsideWrap>
        <Card
          title="Website"
          date="July 2020"
          technologies="HTML, CSS &amp; JS"
          description="A website and chrome extension combination that generates ad revenue for relevant charities.
          Created with HTML, CSS, JavaScript and JSON. Linked and stored images in Google Firebase."
          website="https://github.com/askanniething/Africaid"
          Pic={Img3}
          backColor={props.themeColor.darkColor}
          textBackground={props.themeColor.mainColor}
          borderColor={props.themeColor.textColor}
          highlightColor={props.themeColor.lightColor}
        />
      </OutsideWrap>
      <OutsideWrap right>
        <Card
          title="Bon Appletit"
          date="July 2018"
          technologies="Java"
          description="An interactive game with 3 levels designed to teach children about the importance of healthy eating.
          Coded using Java using the JavaFX libraries."
          website="https://github.com/askanniething/Bon-Appletit"
          backColor={props.themeColor.darkColor}
          textBackground={props.themeColor.mainColor}
          borderColor={props.themeColor.textColor}
          highlightColor={props.themeColor.lightColor}
        />
      </OutsideWrap>
    </ProjectsWrapper>
  </ProjectsContainer>
);

export default Projects;
