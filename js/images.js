const birdNames = ['lark', 'nightingale', 'robin', 'thrush', 'whitethroat'];

export function preloadImages() {
  birdNames.forEach(birdName => {
    const birdImg = new Image();
    birdImg.src = `../assets/img/${birdName}.jpg`;

    const birdBgImg = new Image();
    birdBgImg.src = `../assets/img/${birdName}-bg.jpg`;
  });
}
