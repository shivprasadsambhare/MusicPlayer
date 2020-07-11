import * as ActionTypes from '../../../constants/actionTypes';
import store from '../../../store/configureStore';

export const audio = new Audio();


export const setAudioSource = src => {
  audio.src = src;
};

export const setCurrentTrack = track => {
  store().dispatch({ type: ActionTypes.SET_CURRENT_TRACK_REQUEST, payload: track });
};


export function play() {
  audio.play();
  store().dispatch({ type: ActionTypes.SET_PLAY_REQUEST });
}

export function changeTrack(track) {
  audio.src = track;
  play();
}

export function pause() {
  audio.pause();
  store().dispatch({ type: ActionTypes.SET_PAUSE_REQUEST });
}


export function getCurrentState() {
  console.log('daa receivedddsf', store().getState());
}
