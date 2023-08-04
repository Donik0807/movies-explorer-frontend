import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { calcMoviesToRender } from '../../utils/calcMoviesToRender';
import { calcMoreToLoad } from '../../utils/calcMoreToLoad';

export default function MoviesCardList({
  movieList = [],
  isSavedPage = false,
  savedList = [],
  onDeleteMovie,
  onLikeClick,
}) {
  const [viewiedList, setViewedList] = React.useState([]);
  const [moviesToRender, setMoviesToRender] =
    React.useState(calcMoviesToRender);
  const [moreToLoad, setMoreToLoad] = React.useState(calcMoreToLoad);

  React.useEffect(() => {
    if (movieList.length > moviesToRender) {
      setViewedList(movieList.slice(0, moviesToRender));
      setMoreToLoad(calcMoreToLoad())
    } else {
      setViewedList(movieList);
      setMoreToLoad(0);
    }
  }, [movieList, moviesToRender]);

  React.useEffect(() => {
    let onCooldown = false;
    function changeMoviesToRender() {
      if (onCooldown) return;
      setMoviesToRender(calcMoviesToRender());
      setMoreToLoad(calcMoreToLoad());
      onCooldown = true;

      setTimeout(() => {onCooldown = false}, 500)
    }
    window.addEventListener('resize', changeMoviesToRender);

    return () => {
      window.removeEventListener('resize', changeMoviesToRender);
    };
  }, []);

  const handleMoreClick = () => {
    const remainingAmount = movieList.slice(viewiedList.length).length;
    if (remainingAmount <= moreToLoad) {
      setViewedList((prev) => [...prev, ...movieList.slice(prev.length)]);
      setMoreToLoad(0);
    } else {
      setViewedList((prev) => [
        ...prev,
        ...movieList.slice(prev.length, prev.length + moreToLoad),
      ]);
    }
  };

  return (
    <section className={`cardlist ${isSavedPage ? 'cardlist_saved-list' : ''}`}>
      <div className='cardlist__gallery'>
        {viewiedList.map((movie, index) => (
          <MoviesCard
            isSavedPage={isSavedPage}
            key={index}
            movie={movie}
            savedMovie={!isSavedPage && savedList.find(
              (savedMovie) => savedMovie.movieId === movie.id
            )}
            onLikeClick={!isSavedPage && onLikeClick}
            onDeleteClick={isSavedPage && onDeleteMovie}
          ></MoviesCard>
        ))}
      </div>
      {!isSavedPage && moreToLoad > 0 && (
        <button
          onClick={handleMoreClick}
          className='cardlist__more-btn button-animation'
        >
          Ещё
        </button>
      )}
    </section>
  );
}
