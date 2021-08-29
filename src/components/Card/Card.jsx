import React from 'react';
import {
  Wrapper,
  BackCard,
  FrontCard,
  ImgWrapper,
  Img,
  CardTitle,
  Date,
  CardDescription,
  BottomAlign,
  HorizontalLine,
  IconWrap,
  Icon,
  InfoWrapper,
  ReadLink,
  TextWrapper,
} from './styles';

const Card = ({
  title, date, technologies, description, website, Pic, backColor,
  textBackground, borderColor, highlightColor,
}) => (
  <Wrapper
    href={website}
    target="_blank"
  >
    <BackCard backColor={backColor} textColor={borderColor} />
    <FrontCard textBackground={textBackground} textColor={borderColor}>
      <ImgWrapper>
        <Img src={Pic} />
      </ImgWrapper>
      <TextWrapper textBackground={textBackground} textColor={borderColor}>
        <CardTitle textColor={borderColor}>
          {title}
        </CardTitle>
        <Date lightColor={highlightColor}>
          {technologies}
          {' '}
          &#8226;
          {' '}
          {date}
        </Date>
        <CardDescription textColor={borderColor}>
          {' '}
          {description}
        </CardDescription>
        <BottomAlign>
          <HorizontalLine lightColor={highlightColor} />
          <InfoWrapper>
            <ReadLink lightColor={highlightColor}>
              {' '}
              read more
              {' '}

            </ReadLink>
            <IconWrap lightColor={highlightColor}>
              <Icon />
            </IconWrap>
          </InfoWrapper>
        </BottomAlign>
      </TextWrapper>

    </FrontCard>
  </Wrapper>

);

export default Card;
