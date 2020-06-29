import song from '../../../media/songs/Rozana.mp3';

export const audio = new Audio();
audio.src = 'https://p.scdn.co/mp3-preview/df36dd78c0825531ddf6e53db2ac6064aabe51de?cid=774b29d4f13844c495f206cafdad9c86';

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
