import React from 'react';
// import Typewriter from 'typewriter-effect';
import {
  HeaderWrapper,
  HeaderRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  ImgWrap,
  Img,
  HeaderContainer,
  ButtonWrap,
  TypeWrapper,
} from './styles';
import img1 from '../../images/svg-1.svg';

import Button from '../Button/Button';

const Header = (props) => (
  <>
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderRow imgStart>
          <Column1>
            <TextWrapper>
              <Heading lightText>Hi, </Heading>
              <Heading lightText>I&apos;m Annie</Heading>
              <TypeWrapper>
                {/* <Typewriter
                  options={{
                    delay: 40,
                  }}
                  onInit={(typewriter) => {
                    typewriter.typeString('Nice to meet you! I\'m a developer and student at the University of Waterloo.')
                      .start();
                  }}
                /> */}

                  Nice to meet you! I'm a developer and student at the University of Waterloo.
              </TypeWrapper>
              <ButtonWrap>
                <Button
                  link="https://www.github.com"
                  aria="Annie Chen Resume"
                  newTab
                  width="150px"
                  content="resumé"
                  backColor={props.themeColor.darkColor}
                  frontColor={props.themeColor.textColor}
                  textColor={props.themeColor.textColor}
                />
              </ButtonWrap>

            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img1} />
            </ImgWrap>
          </Column2>
        </HeaderRow>
      </HeaderWrapper>
    </HeaderContainer>
  </>
);

export default Header;