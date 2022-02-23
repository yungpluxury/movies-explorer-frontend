import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies ({
  onSearch,
  foundMovies,
  isSaved,
  onSavedMovie,
  onDeleteMovie,
  isLoading,
  onFilter,
  onErr,
  initialMovies,
  checkIfSaved,
  savedMovies
  }) {

  const [ isFilterChecked, setFilterChecked ] = React.useState(false);
  const localTotalMovies = localStorage.getItem('moviesCurrent');

  const handleSearchMovies = (movieToFind) => {
    if (!localTotalMovies || localTotalMovies.length <= 0) {
      initialMovies(movieToFind);
    } else {
      onSearch(movieToFind);
    }
  }

  const getMoviesNumber = () => { //отображение карточек в зависимости от размера окна
    if (window.innerWidth >= 900) {
      return 12;
    }
    if (window.innerWidth >= 768) {
      return 8;
    }
    if (window.innerWidth >= 300) {
      return 5;
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
     window.addEventListener('resize', () => getMoviesNumber);
    }, 300);
  }, []);

  const handleShowMoreMovies = () => {
    setMoviesToRender(moviesToRender + getMoviesToShowNumber());
  };

  function handleFilterState() {
    setFilterChecked(!isFilterChecked);
    if (isFilterChecked) return;
    if(!isFilterChecked) {
      onFilter();
    }
  }

  return(
    <>

      <SearchForm
        onSearch={handleSearchMovies}
      />
      <FilterCheckbox
        onFilter={handleFilterState}
        isFilterChecked={isFilterChecked}
      />
      { isLoading ?
        <Preloader
          isLoading={isLoading}
          onErr={onErr}/> :

        <MoviesCardList
          foundMovies={foundMovies}
          isSavedMovie={isSaved}
          onSavedMovie={onSavedMovie}
          onDeleteMovie={onDeleteMovie}
          onButtonClick={handleShowMoreMovies}
          moviesToShow={getMoviesToShowNumber}
          initialMovies={getMoviesNumber}
          checkIfSaved={checkIfSaved}
          savedMovies={savedMovies}
        />
      }

    </>
  )
}

export default Movies;
