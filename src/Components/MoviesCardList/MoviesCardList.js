import React from 'react';
import img from '../../images/33.png';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList({
  movieList = [],
  isSavedList = false,
}) {
  return (
    <section className={`cardlist ${isSavedList ? 'cardlist_saved-list' : ''}`}>
      <div className='cardlist__gallery'>
        {movieList.map((movie, index) => (
          <MoviesCard
            isSavedList={isSavedList}
            img={img}
            key={index}
            {...movie}
          ></MoviesCard>
        ))}
      </div>
      {!isSavedList && (
        <button className='cardlist__more-btn button-animation'>Ещё</button>
      )}
    </section>
  );
}
