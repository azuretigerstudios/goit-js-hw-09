// import SimpleLightbox from './simple-lightbox.esm.js';

import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = galleryItems
  .map(
    ({ preview, original, description }) => `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`
  )
  .join('');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
