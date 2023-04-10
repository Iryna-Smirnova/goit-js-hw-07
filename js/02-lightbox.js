import { galleryItems } from './gallery-items.js';
  
  const galleryContainer = document.querySelector('.gallery');
  
  const galleryMarkup = createGalleryMarkup(galleryItems);
  galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
  
  function createGalleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li>
      `;
    }).join('');
  }

  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
  });
  
  