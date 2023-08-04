import { movieBaseUrl } from './MovieApi';

// const baseUrl = 'https://api.movie-explorer.nomoredomains.work';
const baseUrl = 'http://localhost:3000';

const handleResponse = (res) => {
  let failedResponse;
  if (res.ok) {
    failedResponse = false;
  } else {
    failedResponse = true;
  }
  return res.json().then((data) => {
    if (failedResponse) {
      return Promise.reject(data.message);
    }
    return data;
  });
};

export const register = ({ email, password, name }) => {
  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    body: JSON.stringify({ email, password, name }),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  })
    .then(handleResponse)
    .then((user) => user);
};

export const login = ({ email, password }) => {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  })
    .then(handleResponse)
    .then((jwt) => {
      const { token } = jwt;
      if (token) {
        localStorage.setItem('jwt', token);
        return token;
      }
    });
};

export const getUserData = () => {
  const token = localStorage.getItem('jwt');
  if (token) {
    return fetch(`${baseUrl}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(handleResponse)
      .then((userData) => userData);
  } else return Promise.reject('Необходима авторизация');
};

export const updateProfile = (userData) => {
  const token = localStorage.getItem('jwt');
  if (token) {
    return fetch(`${baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    })
      .then(handleResponse)
      .then((updatedData) => updatedData);
  } else return Promise.reject('Необходима авторизация');
};

export const saveMovie = (movie) => {
  const movieToSave = {
    country: movie.country,
    director: movie.director,
    duration: String(movie.duration),
    year: movie.year,
    description: movie.description,
    image: movieBaseUrl + movie.image.url,
    trailerLink: movie.trailerLink,
    thumbnail: movieBaseUrl + movie.image.formats.thumbnail.url,
    movieId: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
  };
  const token = localStorage.getItem('jwt');
  if (token) {
    return fetch(`${baseUrl}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(movieToSave),
    })
      .then(handleResponse)
      .then((savedMovie) => savedMovie);
  } else return Promise.reject('Необходима авторизация');
};

export const deleteMovie = (movieId) => {
  const token = localStorage.getItem('jwt');
  if (token) {
    return fetch(`${baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(handleResponse)
      .then((message) => message.message);
  } else return Promise.reject('Необходима авторизация');
};

export const getSavedList = () => {
  const token = localStorage.getItem('jwt');
  if (token) {
    return fetch(`${baseUrl}/movies`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(handleResponse)
      .then((savedMovies) => savedMovies);
  } else return Promise.reject('Необходима авторизация');
};
