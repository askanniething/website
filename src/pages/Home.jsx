import { React, useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';
import Navbar from '../components/Navbar/Navbar';
import Projects from '../components/Projects/Projects';
import Sidebar from '../components/Sidebar/Sidebar';
import Other from '../components/Other/Other';

function Home(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar
        toggle={toggle}
        theme={props.theme}
        setTheme={props.setTheme}
      />
      <Header theme={props.theme} themeColor={props.themeColor} />
      <About theme={props.theme} themeColor={props.themeColor} />
      <Projects theme={props.theme} themeColor={props.themeColor} />
      <Other theme={props.theme} themeColor={props.themeColor} />
      <Sidebar
        isOpen={isOpen}
        toggle={toggle}
        theme={props.theme}
        setTheme={props.setTheme}
      />
      <Footer theme={props.theme} />
    </>
  );
}

export default Home;
