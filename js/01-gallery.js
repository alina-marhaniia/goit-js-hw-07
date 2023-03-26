import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
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
  })
  .join('');

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

galleryEl.addEventListener('click', onOpenModal);

function onOpenModal(event) {
  event.preventDefault();

  const currentItem = event.target;

  if (currentItem.nodeName !== 'IMG') {
    return;
  }
  const originalImageSource = event.target.dataset.source;

  const instance = basicLightbox.create(`
  <img src="${originalImageSource}">
`);

  instance.show();
}

console.log(galleryItems);




// const galleryList = document.querySelector('.gallery');

// const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

// galleryList.insertAdjacentHTML('beforeend', galleryItemsMarkup);

// function createGalleryItemsMarkup(items) {
//   return items
//     .map(({ preview, original, description }) => {
//       return `
//         <li class="gallery__item">
//           <a class="gallery__link" href="${original}">
//             <img
//               class="gallery__image"
//               src="${preview}"
//               data-source="${original}"
//               alt="${description}"
//             />
//           </a>
//         </li>
//       `;
//     })
//     .join('');
// }

// galleryList.addEventListener('click', onGalleryItemClick);

// function onGalleryItemClick(event) {
//   event.preventDefault();

//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }

//   const originalImageSource = event.target.dataset.source;

//   const instance = basicLightbox.create(`
//   <img src="${originalImageSource}">
// `);

// instance.show();

//   console.log(originalImageSource);
// }
