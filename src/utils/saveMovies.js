export const saveMovies = (searchedList, searchValue, isShortFilm) => {
  localStorage.setItem('movieList', JSON.stringify(searchedList));
  localStorage.setItem('searchValue', searchValue);
  localStorage.setItem('isShortFilm', isShortFilm);
};
