//import API_TOKEN from '../Helpers/token'
const API_TOKEN = '60a9226835b8d4250367700c5abe0f01';

export function getFilmsFromApiWithSearchedText (text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + '&page=' + page
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

  export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
  }

  export function getFilmDetailFromApi (id) {
    return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }