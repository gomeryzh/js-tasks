'use strict';

import gallery from '../data/gallery-items.js';
import {
  openModal,
  closeModal,
  showPrevious,
  showNext
} from '../utils/modal.js';

const createPreview = gallery => {
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
};

const appendGalleryMarkup = () => {
  const preview = createPreview(gallery);

  const galleryRoot = document.querySelector('.gallery');
  galleryRoot.innerHTML = preview;
};

const attachListeners = () => {
  document.querySelector('.gallery').addEventListener('click', openModal);

  document.addEventListener('keydown', closeModal);
  document.querySelector('.lightbox').addEventListener('click', closeModal);

  document
    .querySelector('[data-action="close-lightbox"]')
    .addEventListener('click', closeModal);

  document.querySelector('.btnLeft').addEventListener('click', showPrevious);
  document.querySelector('.btnRight').addEventListener('click', showNext);
};

const deleteListeners = () => {
  window.onbeforeunload = e => {
    document.querySelector('.gallery').removeEventListener('click', openModal);

    document.removeEventListener('keydown', closeModal);
    document
      .querySelector('.lightbox')
      .removeEventListener('click', closeModal);

    document
      .querySelector('[data-action="close-lightbox"]')
      .removeEventListener('click', closeModal);

    document
      .querySelector('.btnLeft')
      .removeEventListener('click', showPrevious);
    document.querySelector('.btnRight').removeEventListener('click', showNext);
  };
};

const initialize = (function() {
  appendGalleryMarkup();
  attachListeners();
  deleteListeners();
})();
