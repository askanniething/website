import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
  background: ${(props) => props.theme.darkColor};
  border-bottom: 3px solid ${(props) => props.theme.darkColor};
  height: 64px;
  margin-top: -64px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1 rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 1200px) {
    justify-content: flex-start;
  }

  @media screen and (max-width: 1024px) {
    transition: 0.8s all ease;
  }
  transition: 0.3s ease-in-out;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 64px;
  z-index: 1;
  width: 100%;
  
  padding: 0 24px;
  max-width: 1000px;

  @media screen and (max-width: 1200px) {
    max-width: 950px;
    width: 88%;
  }
  transition: 0.3s ease-in-out;
`;

export const NavLogo = styled(LinkRouter)`
  color: ${(props) => props.theme.textColor};
  font-family: 'Playfair Display', serif;
  justify-self: flex-start; 
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: 700;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    margin-left: 10px;
  }
  transition: 0.3s ease-in-out;
 `;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 40%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${(props) => props.theme.textColor};
  }
  transition: 0.3s ease-in-out;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }

  transition: 0.3s ease-in-out;
`;

export const NavItem = styled.li`
  height: 64px;
`;

export const NavLinks = styled(LinkScroll)`
  color: ${(props) => props.theme.textColor};
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  font-weight: 500;
  padding: 0 0.9rem;
  height: 100%;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &.active {
    background-color: ${(props) => props.theme.lightColor};;
    transition: 0.3s all ease-in-out;
  }
  
`;

export const NavBtn = styled.label`
  display: flex;
  z-index: 15;
  position: absolute;
  top: 18px;
  right: 20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
  transition: 0.3s ease-in-out;
`;
