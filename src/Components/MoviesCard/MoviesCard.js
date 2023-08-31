import React from 'react';
import './MoviesCard.css';
import { movieBaseUrl } from '../../utils/MovieApi';
import { getTimeFromMins } from '../../utils/getTimeFromMins';

export default function MoviesCard({
  isSavedPage = false,
  movie,
  savedMovie,
  onLikeClick,
  onDeleteClick,
}) {
  const { nameRU, image, duration, trailerLink } = movie;

  return (
    <article className={`movie ${isSavedPage ? 'movie_saved-list' : ''}`}>
      <a href={trailerLink} target='_blank' rel='noreferrer'>
        <img
          src={`${isSavedPage ? image : movieBaseUrl + image.url}`}
          className='movie__image'
          alt={nameRU}
        ></img>
      </a>
      <div className='movie__container'>
        <p className='movie__title'>{nameRU}</p>
        {isSavedPage ? (
          <button
            onClick={() => onDeleteClick(movie._id)}
            className='movie__btn movie__btn_type_delete button-animation'
          ></button>
        ) : (
          <button
            onClick={() => onLikeClick(savedMovie, movie)}
            className={`movie__btn movie__btn_type_save button-animation ${
              savedMovie && 'movie__btn_active'
            }`}
          ></button>
        )}
      </div>
      <span className='movie__duration'>{getTimeFromMins(duration)}</span>
    </article>
  );
}
