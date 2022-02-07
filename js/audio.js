const audio = new Audio();

export function playAudio(src) {
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
}

export function pauseAudio() {
  audio.pause();
}
