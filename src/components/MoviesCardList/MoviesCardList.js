import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList ( {
    isSavedMovie,
    foundMovies,
    onSavedMovie,
    onDeleteMovie,
    checkIfSaved,
    savedMovies
  } ) {
  const isNotFound = foundMovies && foundMovies.length === 0 ? true : false;

  const getMoviesNumber = () => {
    if (window.innerWidth < 720) {
      return 5;
    }
    if (window.innerWidth < 920) {
      return 8;
    }
    if (window.innerWidth < 1279) {
      return 12;
    }
    if (window.innerWidth > 1279) {
      return 12;
    }

  }

  const [ moviesToRender, setMoviesToRender ] = React.useState(getMoviesNumber());
  const getMoviesToShowNumber = () => {
    if (window.innerWidth >= 900) {
      return 3;
    } else {
      return 2;
    }
  }

  React.useEffect(() => {
    setTimeout(() => {
     window.addEventListener('resize', () => getMoviesNumber());
    }, 300);
  }, []);

  const handleShowMoreMovies = () => {
    setMoviesToRender(moviesToRender + getMoviesToShowNumber());
  };

  const moviesToDisplay = !isSavedMovie && foundMovies ? foundMovies.slice(0, moviesToRender) : foundMovies;

  return (
    <section className="movies">
      {isNotFound ? ( `Ничего не найдено`) :

        (<ul className="movies__list">

        {moviesToDisplay.map((movie) => {
          const movieKey = movie.movieId;
            return(
              <MoviesCard
                key={movieKey}
                movie={movie}
                isSavedMovie={isSavedMovie}
                foundMovies={foundMovies}
                onSavedMovie={onSavedMovie}
                onDeleteMovie={onDeleteMovie}
                checkIfSaved={checkIfSaved}
                savedMovies={savedMovies}
              />
            );
        })}

      </ul>)
    }

     { <button
        type="submit"
        className={ !foundMovies || (!isSavedMovie && moviesToRender < foundMovies.length) ? `movies__more-button` : `movies__more-button_invisible`}
        onClick={() => handleShowMoreMovies()}
      >Ещё</button> }

    </section>
  )
}

export default MoviesCardList;
