import styled from 'styled-components';

export const FooterContainer = styled.footer`
  margin-top: 0px;
  font-family: 'Open Sans', sans-serif;
  background-color: ${(props) => props.theme.darkColor};
  transition: 0.3s ease-in-out;
`;

export const FooterWrap = styled.div`
  display: flex;
  padding: 48px 24px;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto 0 auto;
  flex-direction: column;

  @media screen and (max-width: 820px) {
      flex-direction: column;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
      padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-wdith: 820px) {
      flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: ${(props) => props.theme.textColor};

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%
  }

  transition: 0.3s ease-in-out;
`;

export const FooterLinkTitle = styled.h1`
  font-size: 16px;
  margin-bottom: 16px;
`;

export const WebsiteRights = styled.small`
  color: ${(props) => props.theme.textColor};;
  text-align: center;
  line-height: 1.7;
  margin-bottom: 16px;
  transition: 0.3s ease-in-out;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: ${(props) => props.theme.textColor};
  font-size: 30px;
  transition: 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
  transition: 0.3s ease-in-out;
`;
