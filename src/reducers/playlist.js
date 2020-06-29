/* eslint-disable indent */
import * as ActionTypes from '../constants/actionTypes';

const initialState = {
  response: false,
  fetched: false,
  categoryId: false,
};

export const getPlaylist = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PLAYLIST_SUCCESS:
      return {
        ...state, response: action.payload, fetched: true, categoryId: action.categoryId,
      };
    case ActionTypes.GET_PLAYLIST_FAILURE:
      return {
        ...state, response: action.payload, fetched: true, categoryId: action.categoryId,
      };
    default:
      return state;
  }
};

const allTracksState = {
  response: false,
  fetched: false,
};

export const getAllTracks = (state = allTracksState, action) => {
  switch (action.type) {
    case ActionTypes.GET_TRACKS_SUCCESS:
      return {
        ...state, response: action.payload, fetched: true,
      };
    case ActionTypes.GET_TRACKS_FAILURE:
      return {
        ...state, response: action.payload, fetched: true,
      };
    default:
      return state;
  }
};
