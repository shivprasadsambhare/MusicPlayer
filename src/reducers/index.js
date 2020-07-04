import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { getPlaylist, getAllTracks, getPlaylistInfo } from './playlist';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  getPlaylist,
  getAllTracks,
  getPlaylistInfo,
});

export default rootReducer;
