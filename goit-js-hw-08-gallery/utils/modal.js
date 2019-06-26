export const closeModal = e => {
  e.preventDefault();
  console.log(e.target.parentNode.className);
  if (
    e.keyCode === 27 ||
    e.target.className === 'material-icons' ||
    e.target.parentNode.className === 'lightbox is-open'
  )
    document.querySelector('.lightbox').classList.remove('is-open');
};

export const openModal = e => {
  e.preventDefault();
  console.log(e.target.attributes.alt.nodeValue);
  const currentImage = document.querySelector('.lightbox___image');

  currentImage.setAttribute('src', e.target.dataset.source);
  currentImage.setAttribute('alt', e.target.attributes.alt.nodeValue);
  document.querySelector('.lightbox').classList.add('is-open');
};
