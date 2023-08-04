export const getMovieList = () => {
  return fetch(`${movieBaseUrl}/beatfilm-movies`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(
        'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
      ));
    }).then((movieList) => movieList);
};

export const movieBaseUrl = 'https://api.nomoreparties.co';
