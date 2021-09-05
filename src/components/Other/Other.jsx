/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import img1 from '../../images/sewing.jpg';
import {
  OtherWrapper,
  OtherRow,
  Column1,
  Column2,
  TextWrapper,
  ImgWrap,
  Img,
  OtherContainer,
  TopWrapper,
} from './styles';
import {
  Heading,
  Subtitle,
} from '../Common';

const Other = (props) => (
  <OtherContainer lightBg id="other">
    <TopWrapper>
      <Heading color={props.themeColor.textColor.toString()} style={{ }}> miscellaneous </Heading>
    </TopWrapper>
    <OtherWrapper>
      <OtherRow>
        <Column1>
          <TextWrapper>
            <Subtitle color={props.themeColor.textColor.toString()} maxWidth="780px">Outside of programming, I enjoy sewing, bookbinding and building miniatures. I’m also extremely passionate about literature, especially regarding classics and dark fantasy stories. I can always appreciate a good book with daring adventure! </Subtitle>
          </TextWrapper>
        </Column1>
        <Column2>
          <ImgWrap>
            <Img src={img1} alt="Adf" />
          </ImgWrap>
        </Column2>
      </OtherRow>
    </OtherWrapper>
  </OtherContainer>
);

export default Other;
