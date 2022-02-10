import { pauseAudio } from "./audio.js";
import { NAV_LINK_ACTIVE_CLASS, NAV_LINK_HIDDEN_ACTIVE_CLASS } from "./navigation.js";

const YTYA_UI_ELEMENTS = {
  'YTYA': document.querySelector('.ytya'),
  'LINK': document.querySelector('.ytya--link'),
};

YTYA_UI_ELEMENTS.LINK.addEventListener('click', danceYtya);

const YTYA_SRC = {
  'HELLO': './assets/video/sticker-hello.webm',
  'BYE': './assets/video/sticker-bye.webm',
}

const ytyaAudio = new Audio();
ytyaAudio.loop = true;

const BIRD_UI_ELEMENTS = {
  'BIRD': document.querySelector('.bird'),
  'PLAY_BUTTON': document.querySelector('.bird__play-button'),
  'PAUSE_BUTTON': document.querySelector('.bird__pause-button'),
}

const BIRD_NAMES = ['lark', 'nightingale', 'robin', 'thrush', 'whitethroat'];

const main = document.querySelector('.main');

export function startYtya() {
  YTYA_UI_ELEMENTS.LINK.play();
  YTYA_UI_ELEMENTS.YTYA.play();
}

let timerId;
let bgCount = 0;
let audioCount = 0;
let activeNavLink;

function danceYtya() {
  pauseAudio();
  toggleHidingUIElements();
  ytyaAudio.src = getAudioSrc();
  activeNavLink = document.querySelector(`.${NAV_LINK_ACTIVE_CLASS}`);
  activeNavLink.classList.toggle(NAV_LINK_HIDDEN_ACTIVE_CLASS);

  const isYtyaNotDance = !YTYA_UI_ELEMENTS.LINK.src.includes('bye');
  if (isYtyaNotDance) {
    YTYA_UI_ELEMENTS.LINK.src = YTYA_SRC.BYE;
    ytyaAudio.play();
    timerId = setInterval(() => {
      bgCount++;
      const birdName = BIRD_NAMES[bgCount % BIRD_NAMES.length];
      main.style.backgroundImage = `url("./assets/img/${birdName}-bg.jpg")`;
    }, 2000 );
  } else {
    YTYA_UI_ELEMENTS.LINK.src = YTYA_SRC.HELLO;
    ytyaAudio.pause();
    clearInterval(timerId);
    bgCount = 0;
    audioCount++;
    const birdName = BIRD_UI_ELEMENTS.PLAY_BUTTON.dataset.birdName;
    main.style.backgroundImage = `url("./assets/img/${birdName}-bg.jpg")`;
  }
}

function toggleHidingUIElements() {
  BIRD_UI_ELEMENTS.BIRD.classList.toggle('hidden');
  YTYA_UI_ELEMENTS.YTYA.classList.toggle('hidden');
  BIRD_UI_ELEMENTS.PLAY_BUTTON.classList.remove('hidden');
  BIRD_UI_ELEMENTS.PAUSE_BUTTON.classList.add('hidden');
}

function getAudioSrc() {
  return `./assets/music/track${audioCount % 5}.mp3`;
}
