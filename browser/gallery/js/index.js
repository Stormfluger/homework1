'use strict';

const currentPhoto = document.getElementById('currentPhoto');
const nextButton = document.getElementById('nextPhoto');
const prevButton = document.getElementById('prevPhoto');

const sliderImages = [
  './i/breuer-building.jpg',
  './i/guggenheim-museum.jpg',
  './i/headquarters.jpg',
  './i/IAC.jpg',
  './i/new-museum.jpg'
];
const currentSrcIndex = sliderImages.length;
let index = 0;
currentPhoto.src = sliderImages[index];


nextButton.onclick = nextPhoto;
prevButton.onclick = prevPhoto;


function nextPhoto() {
  index = (index + 1) % currentSrcIndex;
  currentPhoto.src = sliderImages[index];
}

function prevPhoto() {
  index = (index + currentSrcIndex - 1) % currentSrcIndex;
  currentPhoto.src = sliderImages[index];
}