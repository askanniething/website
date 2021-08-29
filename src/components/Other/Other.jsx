/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import img1 from '../../images/sewing.jpg';
import {
  AboutWrapper,
  AboutRow,
  Column1,
  Column2,
  TextWrapper,
  ImgWrap,
  Img,
  AboutContainer,
} from './styles';
import {
  Heading,
  Subtitle,
} from '../Common';

const Other = (props) => (
  <AboutContainer lightBg id="other">
    <AboutWrapper>
      <AboutRow>
        <Column1>
          <TextWrapper>
            <Heading color={props.themeColor.textColor.toString()}>miscellaneous</Heading>
            <Subtitle color={props.themeColor.textColor.toString()} maxWidth="780px">Outside of coding, I enjoy sewing, bookbinding and building miniatures. I’m also extremely passionate about literature, especially regarding classics and dark fantasy stories. I can always appreciate a good book with daring adventure and societal implications! </Subtitle>
          </TextWrapper>
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
export default Other;
