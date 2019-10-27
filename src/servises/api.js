import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
});

const fetchPhotos = (findWord = '', pageNumber = 1) => {
  const otherURL = `?image_type=photo&orientation=horizontal&q=${findWord}&page=${pageNumber}&per_page=12&key=12935223-ebb6e80bcfb15004a250fd4eb`;

  return instance
    .get(otherURL)
    .then(response => response.data.hits)
    .catch(err => Error(err));
};

export default fetchPhotos;
