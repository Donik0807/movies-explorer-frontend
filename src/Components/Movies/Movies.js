import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { movieCards } from '../../utils/cards';

export default function Movies() {
  return (
    <main>
      <SearchForm></SearchForm>
      <MoviesCardList isSavedList={false} movieList={movieCards}></MoviesCardList>
    </main>
  );
}
