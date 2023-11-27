import iziToast from 'izitoast ';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import NewApiPixabay from '@/js/apiPixabay';
import {
  getValidateArray,
  checkVisibleLoadMore,
  scrollPage,
} from '@/js/helpers';
import { refs } from './refs';
import { makeGalleryMarkup } from '@/service/markupService.js';
import 'izitoast/dist/css/iziToast.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

const newApiPixabay = new NewApiPixabay();

const getImages = async () => {
  try {
    const {
      data: { totalHits, hits },
    } = await newApiPixabay.fetchGallery();

    if (totalHits === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again.',
      });
      return;
    }

    if (
      !checkVisibleLoadMore({
        totalHits,
        page: newApiPixabay.page,
        perPage: newApiPixabay.perPage,
      })
    ) {
      refs.btnLoadMore.style.display = 'none';
      iziToast.info({
        title: 'Oops',
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      refs.btnLoadMore.style.display = 'flex';
    }

    makeGalleryMarkup(getValidateArray(hits), refs.gallery);
    lightbox.refresh();
    if (newApiPixabay.page === 1) {
      iziToast.success({
        title: 'Hooray!',
        message: `We found ${totalHits} images.`,
      });
    } else {
      scrollPage();
    }
  } catch (err) {
    console.log(err);
  }
};

const onSearchFormSubmit = async e => {
  e.preventDefault();

  if (refs.input.value.trim() === '') {
    return;
  }

  refs.btnLoadMore.style.display = 'none';
  newApiPixabay.resetPage();
  refs.gallery.innerHTML = '';

  newApiPixabay.valueForSearch = e.target.elements.searchQuery.value.trim();
  getImages();
};

const onLoadMoreClick = () => {
  newApiPixabay.page += 1;
  getImages();
};

refs.form.addEventListener('submit', onSearchFormSubmit);
refs.btnLoadMore.addEventListener('click', onLoadMoreClick);
