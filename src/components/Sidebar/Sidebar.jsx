/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';
import Switch from 'react-switch';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  ToggleWrap,
} from './styles';

const Sidebar = ({
  isOpen, toggle, theme, setTheme,
}) => {
  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            about
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>
            projects
          </SidebarLink>
          <SidebarLink to="other" onClick={toggle}>
            miscellaneous
          </SidebarLink>
          <ToggleWrap>
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
          </ToggleWrap>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
