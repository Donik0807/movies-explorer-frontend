export const getPreviousSearch = () => {
  const previousMovies = localStorage.getItem('movieList')
    ? JSON.parse(localStorage.getItem('movieList'))
    : [];
  const previousSearchValue = localStorage.getItem('searchValue')
    ? localStorage.getItem('searchValue')
    : '';
  let previousFilterValue;
  if (localStorage.getItem('isShortFilm')) {
    previousFilterValue =
      localStorage.getItem('isShortFilm') === 'false' ? false : true;
  } else {
    previousFilterValue = false;
  }

  return { previousMovies, previousSearchValue, previousFilterValue };
};
