import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {
  getPlaylist, getAllTracks, getPlaylistInfo, trackControl,
} from './playlist';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  getPlaylist,
  getAllTracks,
  getPlaylistInfo,
  trackControl,
});

export default rootReducer;
