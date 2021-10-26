import React from 'react';

import './MoviesCard.css';

function MoviesCard ({
    movie,
    isSavedMovie,
    onSavedMovie,
    onDeleteMovie,
    savedMovies
  }) {
  function countHours(mins) {
    const hours = Math.trunc(mins/60);
    const minutes = mins % 60;
    return hours + 'ч ' + minutes + 'м';
  }

  const isAddedMovie = savedMovies ? savedMovies.find((i) => i.movieId.toString() === movie.movieId.toString()) : ``;
  function toggleMovieSavedState (movie) {
    if(!isAddedMovie){
      onSavedMovie(movie);
    } else if (isAddedMovie){
      onDeleteMovie(movie)
    }
  }

  return(
    <>
    { isSavedMovie ?

      (<li className="movies__list-item">

        <button className="movies__list-delete-button movies__list-delete-button_visible" onClick={() => onDeleteMovie(movie)}/>
        <a className="movie__trailerlink"
          href={movie.trailer}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="movies__list-poster" src={movie.image} alt={movie.nameRU} />
        </a>
        <div className="movies__list-description">
          <h3 className="movies__list-title">{movie.nameRU}</h3>
          <p className="movies__list-duration">{countHours(movie.duration)}</p>
        </div>
      </li>)

      :

      (<li className="movies__list-item">
        <button className={`${ !isAddedMovie ?  `movies__list-save-button` : `movies__list-save-button_clicked`}`}
          type="button"
          onClick={() => toggleMovieSavedState(movie)}>
        </button>
        <a className="movie__trailerlink"
          href={movie.trailer}
          target="_blank"
          rel="noreferrer noopener"
        >
        <img className="movies__list-poster" src={movie.image} alt={movie.nameRU} />
        </a>
        <div className="movies__list-description">
          <h3 className="movies__list-title">{movie.nameRU}</h3>
          <p className="movies__list-duration">{countHours(movie.duration)}</p>
        </div>
      </li>)
    }
    </>
  )

}

export default MoviesCard;
