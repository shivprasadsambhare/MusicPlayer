/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GET_TRACKS_REQUEST } from '../../../constants/actionTypes';

function playlist(props) {
  const { playlistId } = useParams();

  const { getTracks, tracks } = props;

  useEffect(() => {
    const requestBody = {
      limit: 50,
      playlistId,
    };

    getTracks(requestBody);
  }, []);

  useEffect(() => {
    console.log(tracks);
  }, [tracks]);
  return (
    <div>
      {tracks.response && tracks.response.items.map(key => <h4>{key.track.name}</h4>)}
    </div>
  );
}

const mapStateToProps = state => ({ tracks: state.getAllTracks });

const mapDispatchToProps = dispatch => ({ getTracks: requestBody => dispatch({ type: GET_TRACKS_REQUEST, payload: requestBody }) });

export default connect(mapStateToProps, mapDispatchToProps)(playlist);
