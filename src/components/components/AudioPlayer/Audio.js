import song from '../../../snaps/Rozana.mp3';

export const audio = new Audio();
audio.src = song;

export function play() {
  audio.play();
}

export function changeTrack(track) {
  audio.src = track;
  play();
}

export function pause() {
  audio.pause();
}
