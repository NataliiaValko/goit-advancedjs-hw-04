export const makeGalleryMarkup = (array, target) => {
  const markup = array
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery__item gallery">
      <a class="gallery__link" href="${largeImageURL}">
      <img class="gallery__img" src="${webformatURL}" alt="${tags}" loading="lazy" width=400/>
      </a>
      <div class="gallery__info">
      <ul class="gallery__details-list"><li class="gallery__details-item"><p class="gallery__details">
          <b>Likes</b>
          ${likes}
        </p></li>
        <li class="gallery__details-item"><p class="gallery__details">
          <b>Views</b>
          ${views}
        </p></li>
        <li class="gallery__details-item"><p class="gallery__details">
          <b>Comments</b>
          ${comments}
        </p></li>
        <li class="gallery__details-item"><p class="gallery__details">
          <b>Downloads</b>
          ${downloads}
        </p></li></ul>

      </div>
    </li>`
    )
    .join('');
  return target.insertAdjacentHTML('beforeend', markup);
};
