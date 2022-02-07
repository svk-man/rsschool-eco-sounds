import { playAudio, pauseAudio } from "./audio.js";

const main = document.querySelector('.main');

const nav = document.querySelector('.nav');
nav.addEventListener('click', changeBirdInfo);

const birdImg = document.querySelector('.bird__img');
const birdCaption = document.querySelector('.bird__caption');
const birdPlayButton = document.querySelector('.bird__play-button');
const birdPauseButton = document.querySelector('.bird__pause-button');
birdPlayButton.addEventListener('click', playBirdSound);
birdPauseButton.addEventListener('click', pauseBirdSound);

function changeBirdInfo(event) {
  const navLink = event.target;
  const isNavLink = navLink.classList.contains('nav__link');
  if (isNavLink) {
    const birdNameEn = navLink.dataset.birdName;
    const birdNameRu = navLink.textContent;
    birdImg.src = `./assets/img/${birdNameEn}.jpg`;
    birdImg.alt = birdNameRu;
    birdCaption.textContent = birdNameRu;
    birdPlayButton.dataset.birdName = birdNameEn;
    birdPlayButton.classList.remove('hidden');
    birdPauseButton.classList.add('hidden');
    pauseAudio();
    main.style.backgroundImage = `url("./assets/img/${birdNameEn}-bg.jpg")`;
  }
}

function playBirdSound() {
  birdPlayButton.classList.add('hidden');
  birdPauseButton.classList.remove('hidden');
  const birdNameEn = birdPlayButton.dataset.birdName;
  const src = `../assets/audio/${birdNameEn}.mp3`;
  playAudio(src);
}

function pauseBirdSound() {
  birdPauseButton.classList.add('hidden');
  birdPlayButton.classList.remove('hidden');
  pauseAudio();
}
