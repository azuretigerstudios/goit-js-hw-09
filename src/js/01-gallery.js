window.global = window;
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items";

const galleryContainer = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img 
          class="gallery-image" 
          src="${preview}" 
          alt="${description}" />
      </a>
    </li>`
  )
  .join("");

galleryContainer.innerHTML = markup;

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
