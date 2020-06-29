/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-named-as-default */
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/Home';
import NotFoundPage from './Pages/NotFoundPage';
import 'antd/dist/antd.css';
import Header from './components/Header';
import AudioPlayer from './components/AudioPlayer';
import playlist from './Pages/playlist/index';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

function App() {
  const [currentTheme, setCurrentTheme] = useState({

    brandColor: 'blue',
    main: 'red',
    mainBorder: 'black',

  });


  return (
    <ThemeProvider theme={currentTheme}>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/playlist/:playlistId" component={playlist} />
        <Route component={NotFoundPage} />
      </Switch>
      <AudioPlayer />
    </ThemeProvider>
  );
}


App.propTypes = {
  // children: PropTypes.element,
};

export default App;
