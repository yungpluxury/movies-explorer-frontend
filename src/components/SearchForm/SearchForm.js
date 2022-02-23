import React from 'react';

import './SearchForm.css';

import search__icon from '../../images/search__icon.svg';

function SearchForm({onSearch}) {
  const [ movieSearch, setMovieSearch ] = React.useState('');
  const [ movieErrMessage, setMovieErrMessage ] = React.useState('');

  const [ formValid, setFormValid ] = React.useState(false);

  const handleMovieSearch = (e) => {
    setMovieSearch(e.target.value);
    if (e.target.value.length < 1 ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValid) {
      setMovieErrMessage('Нужно ввести ключевое слово');
    }
    else{
      setMovieErrMessage('');
      onSearch(movieSearch);
    }
  }

  return (
    <section className="search">
      <form onSubmit={handleSubmit} className="search__form" noValidate>
      <div className="search__bar">
      <img src={search__icon} alt="Поиск" className="search__icon"/>
      <fieldset className="search__form-fields">
        <input
          className="search__form-input"
          type="text"
          placeholder="Фильм"
          required
          value={movieSearch}
          onChange={e => {handleMovieSearch(e)}}
        />
        <span className="search__form-error">{movieErrMessage}</span>
        </fieldset>
        <button type="submit" className="search__form-button">Найти</button>
        </div>
      </form>
    </section>
  )
}

export default SearchForm;
