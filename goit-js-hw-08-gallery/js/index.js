'use strict';

import gallery from '../data/gallery-items.js';
import { closeModal, openModal } from '../utils/modal.js';

function appendGalleryMarkup() {
  //   const fullview = createFullview();
  const preview = createPreview(gallery);
  //   const markup = preview;

  // fullview +

  const galleryRoot = document.querySelector('.gallery');
  galleryRoot.innerHTML = preview;

  //   const previewList = document.querySelector('.preview');
  //   previewList.addEventListener('click', changeMainImg);
}

// function createFullview() {
//   return `<div class="fullview">
//             <!-- Если выбран первый элемент из preview -->
//             <img src="img/fullview-1.jpeg" alt="alt text 1">
//         </div>`;
// }

function createPreview(gallery) {
  return gallery.reduce(
    (acc, galleryItem) =>
      acc +
      `<li class="gallery__item">
      <a
      class="gallery__link"
      href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg">
      <img src=${galleryItem.preview} data-source=${galleryItem.original} alt=${
        galleryItem.description
      } class="gallery__image"><span class="gallery__icon">
      <i class="material-icons">zoom_out_map</i>
      </span></a></li>`,
    ''
  );

  //   `<ul class="preview">${listItems}</ul>`;
}

appendGalleryMarkup();

document.querySelector('.gallery').addEventListener('click', openModal);
document.querySelector('.lightbox').addEventListener('click', closeModal);
document.addEventListener('keydown', closeModal);

window.onbeforeunload = e => {
  document.querySelector('.gallery').removeEventListener('click', openModal);
  document.querySelector('.lightbox').removeEventListener('click', closeModal);
  document.removeEventListener('keydown', closeModal);
};

// document
//   .querySelector('[data-action="close-lightbox"]')
//   .addEventListener('click', closeModal);

// function changeMainImg({ target }) {
//   const mainImg = document.querySelector('.fullview > img');
//   const nodeName = target.nodeName;
//   if (nodeName !== 'IMG') return;
//   const targetImgSrc = target.dataset.fullview;
//   mainImg.setAttribute('src', targetImgSrc);
//   const previewImages = document.querySelectorAll('.preview img');
//   previewImages.forEach(previewImg => {
//     if (previewImg !== target) {
//       previewImg.classList.remove('active__img');
//     } else {
//       previewImg.classList.add('active__img');
//     }
//   });
// }
