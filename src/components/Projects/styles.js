import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  height: 1300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.mainColor};
  
  @media screen and (max-width: 768px) {
    height: 2400px;
  }
  transition: 0.3s ease-in-out;
`;

export const OutsideWrap = styled.div`
  width: 100%;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.right ? 'flex-end' : 'flex-start')};

  margin: auto;

  @media screen and (max-width: 768px) {
    align-items: center;
    align-content: center;
    justify-content: center;
  }
  transition: 0.3s ease-in-out;
`;

export const ProjectsWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  padding: 0px 40px;

  width: 100%;
  justify-content: center;
  
  display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-gap: 45px;
  align-items: center;
  align-content: center;

  @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
  }

`;

export const TopWrapper = styled.div`
  align-text: left;
  width: 100%;
  max-width: 1100px;
  padding-left: 40px;
  margin-bottom: 32px;
`;
