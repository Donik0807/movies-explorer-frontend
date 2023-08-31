export const searchMovies = (movieList, searchValue) =>
  movieList.filter((movie) => {
    const { nameRU, nameEN } = movie;

    const includesSearch =
      nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
      nameEN.toLowerCase().includes(searchValue.toLowerCase());

    return includesSearch;
  });
