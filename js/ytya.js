import { pauseAudio } from "./audio.js";

const ytyaLink = document.querySelector('.ytya--link');
ytyaLink.addEventListener('click', danceYtya);

const YTYA_SRC = {
  'HELLO': './assets/video/sticker-hello.webm',
  'BYE': './assets/video/sticker-bye.webm',
};

const main = document.querySelector('.main');
const bird = document.querySelector('.bird');
const birdNames = ['lark', 'nightingale', 'robin', 'thrush', 'whitethroat'];

const ytya = document.querySelector('.ytya');

export function startYtya() {
  ytyaLink.play();
  ytya.play();
}

const ytyaAudio = new Audio();
ytyaAudio.loop = true;
let timerId = null;
let bgCount = 0;
let soundCount = 0;

function danceYtya() {
  bird.classList.toggle('hidden');

  ytyaLink.src = (ytyaLink.src.includes('bye') ? YTYA_SRC.HELLO : YTYA_SRC.BYE);
  ytya.classList.toggle('hidden');

  const birdPlayButton = document.querySelector('.bird__play-button');
  const birdPauseButton = document.querySelector('.bird__pause-button');
  birdPauseButton.classList.add('hidden');
  birdPlayButton.classList.remove('hidden');
  pauseAudio();

  ytyaAudio.src = `./assets/music/track${soundCount % 5}.mp3`;

  ytyaLink.src.includes('bye') ? ytyaAudio.play() : ytyaAudio.pause();

  if (ytyaLink.src.includes('bye')) {
    timerId = setInterval(() => {
      bgCount++;
      main.style.backgroundImage = `url("./assets/img/${birdNames[bgCount % birdNames.length]}-bg.jpg")`;
    }, 2000 );
  } else {
    clearInterval(timerId);
    bgCount = 0;
    soundCount++;
    main.style.backgroundImage = `url("./assets/img/${birdPlayButton.dataset.birdName}-bg.jpg")`;
  }
}