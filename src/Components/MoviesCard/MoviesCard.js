import React from 'react';
import './MoviesCard.css';

export default function MoviesCard({
  isSavedList = false,
  title,
  img,
  duration,
}) {
  const [isSaved, setIsSaved] = React.useState(false);
  return (
    <article className={`movie ${isSavedList ? 'movie_saved-list' : ''}`}>
      <img src={img} className='movie__image' alt={title}></img>
      <div className='movie__container'>
        <p className='movie__title'>{title}</p>
        {isSavedList ? (
          <button className='movie__btn movie__btn_type_delete button-animation'></button>
        ) : (
          <button
            onClick={() => setIsSaved((prev) => !prev)}
            className={`movie__btn movie__btn_type_save button-animation ${
              isSaved && 'movie__btn_active'
            }`}
          ></button>
        )}
      </div>
      <span className='movie__duration'>{duration}</span>
    </article>
  );
}
