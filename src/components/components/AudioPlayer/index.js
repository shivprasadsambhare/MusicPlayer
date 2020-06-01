
import React, { useState } from 'react';
import propTypes from 'prop-types';
import {
  CaretRightOutlined, PauseOutlined, StepForwardOutlined, StepBackwardFilled, RetweetOutlined, SwapOutlined, SoundOutlined,
} from '@ant-design/icons';
import nextTrack from '../../../snaps/Kun Faya Kun.mp3';
import { play, pause, changeTrack } from './Audio';

function AudioPlayer() {
  const [currentTrack, setCurrentTrack] = useState();
  const [isTrackOn, setTrackOnOff] = useState(false);

  // const [audio] = useState(new Audio(currentTrack.src));
  // audio.src = currentTrack.src;
  const playAudio = () => {
    play();
    setTrackOnOff(true);
    // audio.play();
  };
  const pauseAudio = () => {
    pause();
    setTrackOnOff(false);
  };

  const audioControls = () => {
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
    Title
      {' '}

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

      {playerStrip()}
    </>
  );
}


export default AudioPlayer;
