import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Misc from './pages/Misc';

const LightTheme = {
  darkColor: '#FFEBC1',
  mainColor: '#FFF5E1',
  textColor: '#000000',
  titleColor: '#dc658b',
  tagLineColor: '#FFF5E1',
  lightColor: '#FFFDF5',
};

const DarkTheme = {
  darkColor: '#002436',
  mainColor: '#002436',
  textColor: '#F2E9E4',
  titleColor: 'lightpink',
  tagLineColor: '#002436',
  lightColor: 'darkgrey',
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <Router>
      <ThemeProvider theme={themes[theme]}>
        <Switch>
          <Route path="/" exact>
            <Home theme={theme} themeColor={themes[theme]} setTheme={setTheme} />
          </Route>
          <Route path="/misc" exact>
            <Misc theme={theme} setTheme={setTheme} />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>

  );
}

export default App;
