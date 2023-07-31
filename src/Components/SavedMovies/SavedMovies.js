import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { savedMovies } from '../../utils/cards';

export default function SavedMovies() {
  return <section>
    <SearchForm></SearchForm>
    <MoviesCardList movieList={savedMovies} isSavedList={true}></MoviesCardList>
  </section>;
}
