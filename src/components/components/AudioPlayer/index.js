/* eslint-disable react/prop-types */

import React from 'react';
import { connect } from 'react-redux';
import {
  CaretRightOutlined, PauseOutlined, StepForwardOutlined, StepBackwardFilled, RetweetOutlined, SwapOutlined, SoundOutlined,
} from '@ant-design/icons';
import nextTrack from '../../../media/songs/Kun Faya Kun.mp3';
import { play, pause, changeTrack } from './Audio';
import * as ActionTypes from '../../../constants/actionTypes';

function AudioPlayer(props) {
  const { trackControl } = props;

  const playAudio = () => {
    play();
  };
  const pauseAudio = () => {
    pause();
  };


  const audioControls = () => {
    const isTrackOn = trackControl.status === ActionTypes.PLAYING;
    const prevButton = <StepBackwardFilled style={{ color: 'white', fontSize: '30px' }} />;
    const playButton = <CaretRightOutlined style={{ color: 'white', fontSize: '30px' }} />;
    const pauseButton = <PauseOutlined style={{ color: 'white', fontSize: '30px' }} />;
    const nextButton = <StepForwardOutlined style={{ color: 'white', fontSize: '30px' }} />;
    return (
      <div className="audio-home-strip-controls">
        <button type="button" className="audio-home-strip-controls-option">{prevButton}</button>
        {!isTrackOn ? <button type="button" className="audio-home-strip-controls-option" onClick={() => playAudio()}>{playButton}</button>
          : <button type="button" className="audio-home-strip-controls-option" onClick={() => pauseAudio()}>{pauseButton}</button>}
        <button type="button" className="audio-home-strip-controls-option" onClick={() => changeTrack(nextTrack)}>{nextButton}</button>
      </div>
    );
  };
  const audioTrack = () => (
    <div className="audio-home-strip-track">
      {trackControl.currentTrack && trackControl.currentTrack.name}

    </div>
  );
  const audioSettings = () => {
    const repeatButton = <RetweetOutlined style={{ color: 'white', fontSize: '30px' }} />;
    const shuffleButton = <SwapOutlined style={{ color: 'white', fontSize: '30px' }} />;
    const volumeButton = <SoundOutlined style={{ color: 'white', fontSize: '30px' }} />;
    return (
      <div className="audio-home-strip-settings">
        <button type="button" className="audio-home-strip-settings-option">{repeatButton}</button>
        <button type="button" className="audio-home-strip-settings-option">{shuffleButton}</button>
        <button type="button" className="audio-home-strip-settings-option">{volumeButton}</button>
      </div>
    );
  };

  const playerStrip = () => (
    <div className="audio-home">
      <div className="audio-home-progress" />
      <div className="audio-home-strip">
        {audioTrack()}
        {audioControls()}
        {audioSettings()}
        <div className="audio-home-strip-setting" />
      </div>
    </div>

  );


  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}

      {trackControl.currentTrack && playerStrip()}
    </>
  );
}

const mapStateToProps = state => ({
  trackControl: state.trackControl,
});

export default connect(mapStateToProps, null)(AudioPlayer);
