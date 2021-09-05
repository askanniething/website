import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.mainColor};
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;

  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: black;
`;

export const ToggleWrap = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: ${(props) => props.theme.textColor};
  align-items: center;
  font-family: 'Open Sans', sans-serif;
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.lightColor};
    transition: 0.2s ease-in-out;
  }
`;
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 90px);
  text-align: center;
  @media screen and (max-width: 480px) {
      grid-template-rows: repeat(6, 80px);
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkRouter)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: wite;
    color: #010606;
  }
`;

export const Toggle = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;   
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.pageBackground};
  &:focus {
      outline: none;
  }
  transition: all .5s ease-in-out;
`;
