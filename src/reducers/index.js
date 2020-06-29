import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { getPlaylist, getAllTracks } from './playlist';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  getPlaylist,
  getAllTracks,
});

export default rootReducer;
