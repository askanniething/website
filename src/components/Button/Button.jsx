import React from 'react';

import {
  BackButton, FrontButton, Text, Wrapper,
} from './styles';

const Button = (props) => (
  <Wrapper
    width={props.width}
  >
    <BackButton
      cardColor={props.backColor}
    />
    <FrontButton
      cardColor={props.frontColor}
      href={props.link}
      target={props.newTab ? '_blank' : ''}
      aria-label={props.aria}
      color={props.textColor}
    >
      <Text color={props.textColor}>{ props.content }</Text>
    </FrontButton>
  </Wrapper>
);

export default Button;
