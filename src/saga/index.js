import {
  put, takeLatest, all, call, takeEvery,
} from 'redux-saga/effects';
import * as ActionTypes from '../constants/actionTypes';
import { GET } from '../utils/axios';

function* getPlaylist(action) {
  const url = `https://api.spotify.com/v1/browse/categories/${action.payload.categoryId}/playlists?country=IN&limit=${action.payload.limit}`;
  try {
    const response = yield call(GET, url);
    yield put({ type: ActionTypes.GET_PLAYLIST_SUCCESS, payload: response.data, categoryId: action.payload.categoryId });
    console.log(response);
  } catch (error) {
    yield put({ type: ActionTypes.GET_PLAYLIST_FAILURE, payload: false, categoryId: action.payload.categoryId });
    console.log(error);
  }
}

function* getAllTracks(action) {
  const url = `https://api.spotify.com/v1/playlists/${action.payload.playlistId}/tracks?country=IN&limit=${action.payload.limit}`;
  try {
    const response = yield call(GET, url);
    yield put({ type: ActionTypes.GET_TRACKS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: ActionTypes.GET_TRACKS_FAILURE, payload: false });
  }
}

function* getAllPlaylistInfo(action) {
  const url = `https://api.spotify.com/v1/playlists/${action.payload.playlistId}`;
  try {
    const response = yield call(GET, url);
    yield put({ type: ActionTypes.GET_PLAYLIST_INFO_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: ActionTypes.GET_PLAYLIST_INFO_FAILURE, payload: false });
  }
}

export default function* rootSaga() {
  yield takeEvery(ActionTypes.GET_PLAYLIST_REQUEST, getPlaylist);
  yield takeLatest(ActionTypes.GET_TRACKS_REQUEST, getAllTracks);
  yield takeLatest(ActionTypes.GET_PLAYLIST_INFO_REQUEST, getAllPlaylistInfo);
}
