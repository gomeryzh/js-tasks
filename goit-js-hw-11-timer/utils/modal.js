import gallery from '../data/gallery-items.js';

export const closeModal = e => {
  e.preventDefault();

  if (
    e.keyCode === 27 ||
    e.target.className === 'material-icons' ||
    e.target.parentNode.className === 'lightbox is-open'
  )
    document.querySelector('.lightbox').classList.remove('is-open');
};

export const openModal = e => {
  e.preventDefault();
  const currentImage = document.querySelector('.lightbox___image');

  currentImage.setAttribute('src', e.target.dataset.source);
  currentImage.setAttribute('alt', e.target.attributes.alt.nodeValue);
  document.querySelector('.lightbox').classList.add('is-open');
};

const findImageIndex = () => {
  const src = document.querySelector('.lightbox___image').src;
  return gallery.findIndex(image => image.original === src);
};

const changeImg = imageIndex => {
  const elem = gallery.find(function(value, index) {
    if (imageIndex === index) return value;
  });

  document.querySelector('.lightbox___image').src = elem.original;
};

export const showPrevious = () => {
  const maxLength = gallery.length;
  let imageIndex = findImageIndex();

  imageIndex <= 0 ? (imageIndex = maxLength - 1) : imageIndex--;
  changeImg(imageIndex);
};

export const showNext = () => {
  const maxLength = gallery.length;
  let imageIndex = findImageIndex(),
    nextImageIndex = imageIndex + 1;

  nextImageIndex >= maxLength ? (imageIndex = 0) : imageIndex++;
  changeImg(imageIndex);
};
