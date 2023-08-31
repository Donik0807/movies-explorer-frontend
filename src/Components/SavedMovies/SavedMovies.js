import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filterMovies } from '../../utils/filterMovies';
import { searchMovies } from '../../utils/searchMovies';
import { deleteMovie, getSavedList } from '../../utils/MainApi';

export default function SavedMovies() {
  const [savedList, setSavedList] = React.useState([]);
  const [searchedList, setSearchedList] = React.useState([]);
  const [filteredList, setFilteredList] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [isShortFilm, setIsShortFilm] = React.useState(false);
  const [searchMessage, setSearchMessage] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  React.useEffect(() => {
    getSavedList()
      .then((savedList) => {
        setSavedList(savedList);
        setFilteredList(savedList);
        setSearchedList(savedList);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  React.useEffect(() => {
    if (!filteredList.length && savedList.length) {
      setSearchMessage('Ничего не найдено');
    } else setSearchMessage('');
  }, [filteredList]);

  React.useEffect(() => {
    setFilteredList(filterMovies(searchedList, isShortFilm));
  }, [isShortFilm, searchedList]);

  const handleFilmSearch = (toggledFilter = false) => {
    if (!searchValue) {
      setErrorMessage('Нужно ввести ключевое слово');
      return;
    }
    setErrorMessage('');
    setSearchedList(searchMovies(savedList, searchValue));
    toggledFilter && setIsShortFilm((prev) => !prev);
  };

  const handleDeleteMovie = (movieId) => {
    deleteMovie(movieId).then(() => {
      const newSavedList = savedList.filter((savedMovie) => savedMovie._id !== movieId);
      setSavedList(newSavedList)
      setSearchedList(searchMovies(newSavedList, searchValue));
    }
    ).catch((err) => {
      console.log(err);
    })
  };

  return (
    <section>
      <SearchForm
        onSubmit={handleFilmSearch}
        searchValue={searchValue}
        onSearch={(e) => setSearchValue(e.target.value)}
        filterValue={isShortFilm}
        onFilter={() => {
          handleFilmSearch(true);
        }}
        errorMessage={errorMessage}
      ></SearchForm>
      {searchMessage && (
        <p className='movies__search-message'>{searchMessage}</p>
      )}
      <MoviesCardList
        movieList={filteredList}
        savedList={savedList}
        isSavedPage={true}
        onDeleteMovie={handleDeleteMovie}
      ></MoviesCardList>
    </section>
  );
}
