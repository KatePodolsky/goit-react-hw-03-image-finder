import axios from 'axios';

const fetchImages = ({ searchQuery = '', currentPage = 1, perPage = 12 }) => {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '21314636-5423c4bd79d6decc1761e090e';
    return axios
        .get(`${BASE_URL}?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}
  `)
        .then(response => response.data.hits);
}

export default {fetchImages}