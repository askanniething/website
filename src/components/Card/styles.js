import styled, { keyframes } from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';

export const ImgWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.color};
  z-index: 1;
  overflow:hidden;
  transition: 0.3s ease-in-out;
`;

export const Img = styled.img`
  width: 100%;
  z-index: -1;
  transition: 0.3s ease-in-out;
  min-height: 300px;

  @media screen and (max-width: 1024px) {
    min-height: 100px;
  }
`;

export const TextWrapper = styled.div`
  padding: 10px;
  padding-top: 4px;
  width: 100%;
  height: 220px;
  border-top: 3px solid ${(props) => props.textColor};
  z-index: 90;
  background-color: ${(props) => props.textBackground};
  flex-grow : 1;
  transition: 0.3s ease-in-out;
`;

export const CardTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 24px;
  color: ${(props) => props.textColor};
  transition: 0.3s ease-in-out;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  line-height: 18px;
  max-height: 100px;
  color: ${(props) => props.textColor};
  font-family: 'Open Sans', sans-serif;
  transition: 0.3s ease-in-out;
`;

export const Date = styled.h5`
  color: ${(props) => props.lightColor};
  font-size: 14px;
  line-height: 18px;
  padding: 5px 0;
  font-family: 'Open Sans', sans-serif;
  transition: 0.3s ease-in-out;
`;

export const ReadLink = styled.h5`
  color: ${(props) => props.lightColor};
  font-size: 14px;
  text-decoration: none;
  line-height: 18px;
  padding: 5px 0;
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;
  transition: 0.3s ease-in-out;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction:row;
  cursor: pointer;
  text-decoration: none;
`;

export const IconWrap = styled.div`
  transition: 0.3s ease-in-out;
  padding-top: 1px;
  color: ${(props) => props.lightColor};
  transition: 0.3s ease-in-out;
`;

export const BacknForth = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
`;

export const Wrapper = styled.a`
  position: relative;
  width: 100%; 
  height: 500px;
  max-width: 450px;
`;

export const BackCard = styled.div`
  width: 98%;
  height: 480px;            
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${(props) => props.backColor};
  border-radius: 15px;
  border: 3px solid ${(props) => props.textColor};
  transition: 0.3s ease-in-out;
`;

export const FrontCard = styled.div`
  width: 98%;
  height: 480px;            
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: ${(props) => props.textBackground};
  overflow: hidden;
  margin: 10px 0 0 10px;
  border-radius: 15px;
  border: 3px solid ${(props) => props.textColor};
  display: flex;
  flex-flow: column;
  transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);

  ${Wrapper}:hover & {
    transform: translate3d(8px, 8px, 0);
  }
  transition: 0.3s ease-in-out;
`;

export const Icon = styled(FaArrowRight)`
  margin: 5px;
  padding-top: 2px;
  transition: transform 1s ease-in-out;
  ${Wrapper}:hover & {
    animation: ${BacknForth} 1s ease-in-out infinite;
  }
  transition: 0.3s ease-in-out;
`;

export const HorizontalLine = styled.div`
  width: 150px;
  display: block;
  height: 2px;
  background-color: #4b4b4d;
  transition: 0.3s ease-in-out;
`;

export const BottomAlign = styled.div`
  
  position:absolute;
  bottom:0;
  transition: 0.3s ease-in-out;
  align-items: center;
`;
