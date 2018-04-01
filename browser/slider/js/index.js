'use strict'

const sliderImages = ['airmax.png', 'airmax-jump.png', 'airmax-on-foot.png', 'airmax-playground.png', 'airmax-top-view.png'];
let count = 0;

setInterval(() => {
  document.getElementById('slider').src = `i/${sliderImages[count]}`;
  if (count === sliderImages.length - 1) {count = 0} else count++;
}, 5000);