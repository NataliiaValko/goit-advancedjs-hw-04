import axios from 'axios';

export default class NewApiPixabay {
  #BASE_URL = 'https://pixabay.com/api/';
  #KEY = '31000801-179358ed9db1a9fc0904af43d';
  #valueForSearch;
  #page;

  constructor() {
    this.#valueForSearch = '';
    this.#page = 1;
    this.perPage = 40;
  }

  fetchGallery() {
    return axios.get(`${this.#BASE_URL}`, {
      params: {
        key: this.#KEY,
        q: this.#valueForSearch,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: this.perPage,
        page: this.#page,
      },
    });
  }

  get valueForSearch() {
    return this.#valueForSearch;
  }

  set valueForSearch(value) {
    this.#valueForSearch = value;
  }

  get page() {
    return this.#page;
  }

  set page(p) {
    this.#page += 1;
  }

  resetPage() {
    this.#page = 1;
  }
}
