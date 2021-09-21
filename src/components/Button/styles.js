import styled from 'styled-components';

export const BackButton = styled.div`
  width: 100%;
  height: 80%;            
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${(props) => props.cardColor};
  border-radius: 4px;
  transition: 0.3s ease-in-out;
  border: 3px solid ${(props) => props.color};
`;

export const Wrapper = styled.div`
  position: relative;
  max-width: ${(props) => props.width};
  min-width: 75px;
  height: 50px;
  transition: 0.3s ease-in-out;
`;

export const FrontButton = styled.a`
  width: 100%;
  color: ${(props) => props.color};
  text-decoration: none;
  height: 80%;            
  position: absolute;
  border: 3px solid ${(props) => props.color};
  top: 0;
  left: 0;
  z-index: 9;
  overflow: hidden;
  margin: 5px 0 0 5px;
  background-color: ${(props) => props.cardColor};
  border-radius: 4px;
  text-align: center;
  transition: transform cubic-bezier(0.7, 0, 0.2, 1);
  display: -webkit-flexbox;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  justify-content: center;
  ${Wrapper}:hover & {
    transform: translate3d(2px, 2px, 0);
  }
  transition: 0.3s ease-in-out;
`;

export const Text = styled.h3`

`;
