import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

// const instance = basicLightbox.create(`
//     <h1>Dynamic Content</h1>
//     <p>You can set the content of the lightbox with JS.</p>
// `)
// console.log(instance)
// instance.show()

const galleryList = document.querySelector('.gallery');

const createGalleryItemMarkup = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
};

const galleryItemsMarkup = galleryItems.map(createGalleryItemMarkup).join('');
galleryList.insertAdjacentHTML('beforeend', galleryItemsMarkup);

galleryList.addEventListener('click', (event) => {
  event.preventDefault();

  const { nodeName, dataset, alt } = event.target;

  if (nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${dataset.source}" alt="${alt}">
`);

  instance.show();

  const onEscapePress = (event) => {
    if (event.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', onEscapePress);
    }
  };

  window.addEventListener('keydown', onEscapePress);
});
