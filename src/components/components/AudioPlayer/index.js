
import React, { useState } from 'react';
import propTypes from 'prop-types';
import {
  CaretRightOutlined, PauseOutlined, StepForwardOutlined, StepBackwardFilled, RetweetOutlined, SwapOutlined, SoundOutlined,
} from '@ant-design/icons';
import song from '../../../snaps/Rozana.mp3';
import { audio } from './Audio';

function AudioPlayer(props) {
  const { track } = props;
  const [currentTrack, setCurrentTrack] = useState(track[0]);
  const [isTrackOn, setTrackOnOff] = useState(false);

  // const [audio] = useState(new Audio(currentTrack.src));
  audio.src = currentTrack.src;
  const playAudio = () => {
    console.log('Playing');
    audio.play();
  };
  const pauseAudio = () => {
    console.log('Stopping');
    audio.pause();
  };

  const audioControls = () => {
    const prevButton = <StepBackwardFilled style={{ color: 'white', fontSize: '30px' }} />;
    const playButton = <CaretRightOutlined style={{ color: 'white', fontSize: '30px' }} />;
    const pauseButton = <PauseOutlined style={{ color: 'white', fontSize: '30px' }} />;
    const nextButton = <StepForwardOutlined style={{ color: 'white', fontSize: '30px' }} />;
    return (
      <div className="audio-home-strip-controls">
        <button type="button" className="audio-home-strip-controls-option">{prevButton}</button>
        <button type="button" className="audio-home-strip-controls-option" onClick={() => playAudio()}>{playButton}</button>
        <button type="button" className="audio-home-strip-controls-option" onClick={() => pauseAudio()}>{pauseButton}</button>
        <button type="button" className="audio-home-strip-controls-option">{nextButton}</button>
      </div>
    );
  };
  const audioTrack = () => (
    <div className="audio-home-strip-track">
      {track[0].title}
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


AudioPlayer.propTypes = {
  track: propTypes.array,
};


export default AudioPlayer;
