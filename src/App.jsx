import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Misc from './pages/Misc';

const LightTheme = {
  darkColor: '#FFE4C0',
  mainColor: '#FFF5E1',
  titleColor: '#352E1F',
  textColor: '#000000',
  accentColor: '#C05749',
  lightColor: '#FEF9F0',
  backgroundColor: '#FEF9F0'
};

const DarkTheme = {
  darkColor: '#2B3F5B',
  mainColor: '#002436',
  textColor: '#F2E9E4',
  titleColor: '#F1F1E6',
  accentColor: '#A8C5DD',
  lightColor: '#9CADBC',
  backgroundColor: '#FEF9F0'
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
