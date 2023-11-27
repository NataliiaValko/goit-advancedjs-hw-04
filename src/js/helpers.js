import { refs } from './refs';
export const getValidateArray = array => {
  return array.map(
    ({
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) => {
      return {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      };
    }
  );
};

export const checkVisibleLoadMore = ({ page, totalHits, perPage }) => {
  return page < Math.ceil(totalHits / perPage);
};

export const scrollPage = () => {
  const { height: cardHeight } =
    refs.gallery.firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
};
