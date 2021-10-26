import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation () {

  const [ isOpen, setIsOpen ] = React.useState(false);

  function openMenu() {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  return (
    <>
<Link to="/" className={!isOpen ? `header__logo-link header__logo-link_size` : `header__logo-link_disable`}/>
    <nav className={ !isOpen ? `header__navigation header__navigation_burger_closed` : `header__navigation_burger_opened` }>


      <button className={ isOpen ? `header__nav-btn_close` : `header__nav-btn ` } onClick={()=>openMenu()}/>

      <Link to="/" className={ isOpen ?
        `header__nav-link` : `header__logo-link_inactive` }>Главная</Link>

      <div className={ !isOpen ? `header__nav_flex` : `header__nav_column` }>
        <Link to="/movies" className={ !isOpen ?
          `header__nav-link header__nav-link_inactive` : `header__nav-link_movies` }
        >Фильмы</Link>
        <Link to="/saved-movies" className= { !isOpen ?
          `header__nav-link header__nav-link_ml header__nav-link_inactive` : `header__nav-link_saved-movies`}
        >Сохранённые фильмы</Link>
      </div>

      <Link to="/profile" className= { !isOpen ?
         `header__nav-link header__nav-link_inactive` : `header__nav-link_profile` }>
          <p className="header__profile-account">Аккаунт</p>
      </Link>

    </nav>
</>
  )
}

export default Navigation;
