/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';
import Switch from 'react-switch';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
} from './styles';

const Navbar = ({
  toggle, theme, setTheme,
}) => {
  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to="/" onClick={toggleHome}>
          askanniething
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks
              to="about"
              smooth
              duration={500}
              spy
              exact="true"
              offset={-64}
            >
              about
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="projects"
              smooth
              duration={500}
              spy
              exact="true"
              offset={-64}
            >
              projects
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="other"
              smooth
              duration={500}
              spy
              exact="true"
              offset={-64}
            >
              miscellaneous
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
      <NavBtn>
        <Switch
          uncheckedIcon={null}
          checkedIcon={null}
          onChange={changeTheme}
          offColor="#F2E9E4"
          onColor="#FEF9F0"
          activeBoxShadow="0px"
          onHandleColor="#C05749"
          offHandleColor="#9CADBC"
          checked={theme === 'light'}
          checkedHandleIcon={(
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                color: '#FEF9F0',
                fontSize: 18,
              }}
            >
              <CgSun />
            </div>
            )}
          uncheckedHandleIcon={(
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 20,
                color: '#F2E9E4',
              }}
            >
              <HiMoon />
            </div>
            )}
          className="react-switch"
        />
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
