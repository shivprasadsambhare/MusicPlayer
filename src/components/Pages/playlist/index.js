/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GET_TRACKS_REQUEST, GET_PLAYLIST_INFO_REQUEST } from '../../../constants/actionTypes';

function playlist(props) {
  const { playlistId } = useParams();

  const {
    getTracks, getAllPlaylistInfo, tracks, playlistInfo,
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
    console.log(tracks);
  }, [tracks]);


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
        {tracks.response && tracks.response.items.map(key => <h4>{key.track.name}</h4>)}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({ tracks: state.getAllTracks, playlistInfo: state.getPlaylistInfo });

const mapDispatchToProps = dispatch => ({
  getTracks: requestBody => dispatch({ type: GET_TRACKS_REQUEST, payload: requestBody }),
  getAllPlaylistInfo: requestBody => dispatch({ type: GET_PLAYLIST_INFO_REQUEST, payload: requestBody }),
});

export default connect(mapStateToProps, mapDispatchToProps)(playlist);
