export const filterMovies = (searchedList, isShortFilm) => {
  if (isShortFilm) {
    return searchedList.filter((movie) => {
      const { duration } = movie;
      return duration <= 40;
    });
  } else return searchedList;
};
