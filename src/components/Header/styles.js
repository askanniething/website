import styled from 'styled-components';

export const TypeWrapper = styled.div`
  color: ${(props) => props.theme.textColor};
  max-width: 540px;
  height: 80px;
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
  line-height: 24px;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
  
  @media screen and (max-width: 768px) {
    max-width: 580px;
    height: 40px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 40px;
  }

  transition: 0.3s ease-in-out;
`;

export const HeaderContainer = styled.div`
  background: ${(props) => props.theme.mainColor};
  padding-top: 64px;

  @media screen and (max-width: 768px) {
      padding: 100px 0;
  }
  transition: 0.3s ease-in-out;
`;

export const HeaderWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 630px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 760px;
  }
`;

export const HeaderRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col2 col1';

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col2' 'col1' 
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px 0 30px;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    padding: 0 0 0 0;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 30px 0 15px;
  grid-area: col2;

  @media screen and (max-width: 768px) {
    padding: 0 15px 0 15px;
    padding: 0 0 0 0;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    max-width: 580px;
  }
`;

export const Heading = styled.h1`
  font-family: 'Playfair Display', serif;
  margin-bottom: 24px;
  font-size: 96px;
  line-height: 0.9;
  font-weight: 700;
  color: ${(props) => props.theme.textColor};

  @media screen and (max-width: 1024px) {
    font-size: 72px;
  }

  @media screen and (max-width: 480px) {
    font-size: 52px;
  }
  transition: 0.3s ease-in-out;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 0px; 
  font-size: 18px;
  line-height: 24px;
  color: ${(props) => props.theme.textColor};
  transition: 0.3s ease-in-out;
`;

export const ImgWrap = styled.div` 
  max-width: 600px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const ButtonWrap = styled.section`
  max-width: 1000px;
  width: 100%
`;
