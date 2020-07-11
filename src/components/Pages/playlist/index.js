/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getFormattedDuration } from '../../../utils';
import {
  GET_TRACKS_REQUEST, GET_PLAYLIST_INFO_REQUEST, SET_PLAY_REQUEST, SET_QUEUE_REQUEST,
} from '../../../constants/actionTypes';
import {
  setAudioSource, play, getCurrentState, setCurrentTrack,
} from '../../components/AudioPlayer/Audio';

function playlist(props) {
  const { playlistId } = useParams();

  const {
    getTracks, getAllPlaylistInfo, tracks, playlistInfo, trackControl, setQueue,
  } = props;

  useEffect(() => {
    const requestBody = {
      limit: 50,
      playlistId,
    };

    getTracks(requestBody);
    getAllPlaylistInfo(requestBody);
  }, []);

  useEffect(() => {
    if (tracks && track.response && track.response.items) {
      setQueue(tracks.response.items);
    }
  }, [tracks]);


  const renderArtist = key => (
    <p>{key.track.artists.map((element, index) => `${element.name} ${index === key.track.artists.length - 1 ? '  ' : ' & '}`)}</p>
  );

  const playTrack = track => {
    setAudioSource(track.preview_url);
    setCurrentTrack(track);
    play();
  };

  const renderTrack = key => (
    <div className="playListPage__tracks__item" onClick={() => playTrack(key.track)}>
      <div className="playListPage__tracks__item__image">
        <img src={key.track.album.images[2].url} alt="track_image" />
      </div>
      <div className="playListPage__tracks__item__name">
        <h3>{key.track.name}</h3>
        {renderArtist(key)}
      </div>
      <div className="playListPage__tracks__item__duration">
        {getFormattedDuration(key.track.duration_ms)}
      </div>
    </div>
  );
  return (
    <div className="playListPage">
      {playlistInfo.response
        && (<div className="playListPage__title">
          <div className="playListPage__title__image">
            <img src={playlistInfo.response.images[0].url} alt="Playlist Icon" />
          </div>
          <div className="playListPage__title__name">
            <h1>{playlistInfo.response.name}</h1>
            <h3>{playlistInfo.response.description}</h3>
          </div>
        </div>)}
      <div className="playListPage__tracks">
        {tracks.response && tracks.response.items.map(key => renderTrack(key))}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({ tracks: state.getAllTracks, playlistInfo: state.getPlaylistInfo, trackControl: state.trackControl });

const mapDispatchToProps = dispatch => ({
  getTracks: requestBody => dispatch({ type: GET_TRACKS_REQUEST, payload: requestBody }),
  getAllPlaylistInfo: requestBody => dispatch({ type: GET_PLAYLIST_INFO_REQUEST, payload: requestBody }),
  setQueue: requestBody => dispatch({ type: SET_QUEUE_REQUEST, payload: requestBody }),
});

export default connect(mapStateToProps, mapDispatchToProps)(playlist);
