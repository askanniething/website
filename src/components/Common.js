import styled from 'styled-components';

export const Subtitle = styled.p`
  max-width: ${(props) => props.maxWidth || '780 px'};
  font-size: 18px;
  line-height: 24px;
  font-family: 'Open Sans', sans-serif;
  color: ${(props) => props.color || 'black'};
  transition: 0.3s ease-in-out;
`;

export const Heading = styled.h1`
  font-family: 'Playfair Display', serif;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 700;
  
  color: ${(props) => props.color};

  @media screen and (max-width: 768px) {
      font-size: 46px;
  }

  @media screen and (max-width: 480px) {
    font-size: 40px;
  }
  transition: 0.3s ease-in-out;
`;
