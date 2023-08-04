import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { getMovieList } from '../../utils/MovieApi';
import { Preloader } from '../Preloader/Preloader';
import { searchMovies } from '../../utils/searchMovies';
import { filterMovies } from '../../utils/filterMovies';
import { getPreviousSearch } from '../../utils/getPreviousSearch';
import { saveMovies } from '../../utils/saveMovies';
import { deleteMovie, getSavedList, saveMovie } from '../../utils/MainApi';

export default function Movies() {
  const [movieList, setMovieList] = React.useState([]);
  const [searchedList, setSearchedList] = React.useState([]);
  const [filteredList, setFilteredList] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [isShortFilm, setIsShortFilm] = React.useState(false);
  const [searchMessage, setSearchMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [savedList, setSavedList] = React.useState([]);

  React.useEffect(() => {
    getSavedList().then((savedList) => {
      setSavedList(savedList);
    }).catch(err => {
      console.log(err.message)
    })
  }, [])

  React.useEffect(() => {
    if (!filteredList.length && movieList.length) {
      setSearchMessage('Ничего не найдено');
    } else setSearchMessage('');
  }, [filteredList]);

  React.useEffect(() => {
    setFilteredList(filterMovies(searchedList, isShortFilm));
    if (movieList.length) {
      saveMovies(searchedList, searchValue, isShortFilm);
    }
  }, [isShortFilm, searchedList]);

  React.useEffect(() => {
    const { previousMovies, previousSearchValue, previousFilterValue } =
      getPreviousSearch();
    setSearchedList(previousMovies);
    setSearchValue(previousSearchValue);
    setIsShortFilm(previousFilterValue);
  }, []);

  const handleFilmSearch = () => {
    if (!searchValue) {
      setErrorMessage('Нужно ввести ключевое слово');
      return;
    }
    setErrorMessage('');

    if (!movieList.length) {
      setIsLoading(true);
      getMovieList()
        .then((movieList) => {
          setMovieList(movieList);
          setSearchedList(searchMovies(movieList, searchValue));
          setSearchMessage('');
        })
        .catch((err) => setSearchMessage(err.message))
        .finally(() => setIsLoading(false));
    } else {
      setSearchedList(searchMovies(movieList, searchValue));
    }
  };

  const handleLikeClick = (savedMovie, movie) => {
    if (savedMovie) {
      deleteMovie(savedMovie._id)
        .then(() => setSavedList((prev) => prev.filter((element) => element._id !== savedMovie._id)))
        .catch((err) => console.log(err.message))
    } else {
      saveMovie(movie)
        .then((savedMovie) => setSavedList((prev) => [...prev, savedMovie]))
        .catch((err) => console.log(err.message))
    }
  };

  return (
    <main className='movies'>
      <SearchForm
        onSubmit={handleFilmSearch}
        searchValue={searchValue}
        onSearch={(e) => setSearchValue(e.target.value)}
        filterValue={isShortFilm}
        onFilter={() => {
          setIsShortFilm((prev) => !prev);
        }}
        errorMessage={errorMessage}
      ></SearchForm>
      {Boolean(filteredList.length) && (
        <MoviesCardList
          isSavedPage={false}
          movieList={filteredList}
          savedList={savedList}
          onLikeClick={handleLikeClick}
        ></MoviesCardList>
      )}
      {searchMessage && (
        <p className='movies__search-message'>{searchMessage}</p>
      )}
      {isLoading && <Preloader></Preloader>}
    </main>
  );
}
