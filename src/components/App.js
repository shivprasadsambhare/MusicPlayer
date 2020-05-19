/* eslint-disable react/destructuring-assignment */
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
import AudioPlayer from './components/AudioPlayer';
import song1 from '../snaps/Rozana.mp3';
import song2 from '../snaps/Kun Faya Kun.mp3';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  onChangeCourse(song) {
    this.setState({ songName: song.target.value });
    // eslint-disable-next-line react/prop-types
    console.log(this.state.songName);
  }

  render() {
    const track = [
      {
        title: 'Rozana',
        src: song1,
      },
      {
        title: 'Kun Faya Kun',
        src: song2,
      }];

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
      Course:
        <select
          // eslint-disable-next-line react/destructuring-assignment
          value={this.state.songName}
          onChange={song => this.onChangeCourse(song)}
        >
          <option value={song1}>1</option>
          <option value={song2}>2</option>
        </select>
        <AudioPlayer track={track} />
      </div>
    );
  }
}


App.propTypes = {
  // children: PropTypes.element,
};

export default App;
