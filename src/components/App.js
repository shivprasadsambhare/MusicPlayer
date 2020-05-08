/* eslint-disable import/no-named-as-default */
import { Route, Switch } from 'react-router-dom';

import PropTypes from 'prop-types';
import React from 'react';
import { hot } from 'react-hot-loader';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/NotFoundPage';
import 'antd/dist/antd.css';
import Header from './components/Header';
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

App.propTypes = {
  // children: PropTypes.element,
};

export default hot(module)(App);
