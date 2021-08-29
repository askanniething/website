import styled from 'styled-components';

export const AboutContainer = styled.div`
  color: ${(props) => props.theme.textColor};
  background: ${(props) => props.theme.mainColor};
  padding: 50px 0 100px 0 ;
  transition: 0.3s ease-in-out;
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 400px;
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

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: 2fr 1fr; // minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: \'col1 col2\';

  @media screen and (max-width: 768px) {
      grid-template-areas: \'col2 col2\' \'col1 col1\';
  }
`;

export const Column1 = styled.div`
  padding: 0 30px 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  padding: 0 15px 0 30px;
  grid-area: col2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  max-width: 780px;
  padding-top: 0;
  padding-bottom: 24px;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div` 
  max-width: 250px;
  height: 100%;
  align-items: center;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  background-color: lightblue;
  border: 3px solid ${(props) => props.theme.textColor};
  border-radius: 20px;
  transition: 0.3s ease-in-out;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
`;

export const SocialIconLink = styled.a`
  color: ${(props) => props.theme.textColor};
  font-size: 30px;
  transition: 0.3s ease-in-out;

  &:hover {
    color: red;
  }
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 5px auto 0 auto;
  @media screen and (max-width: 480px) {
    margin: 20px auto 0 auto;
  }
`;

export const Connect = styled.h4`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  padding-bottom: 5px;
`;
