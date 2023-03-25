import React from 'react';

import { Link, Switch, Route, useLocation } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import NavigationMainPage from '../NavigationMainPage/NavigationMainPage';

import './Header.css';


function Header ({isLoggedIn}) {
  const location = useLocation();
  return (
    <header className="header">
      <Switch>
          <Route exact path="/movies-explorer-frontend">
              {
                isLoggedIn ? <Navigation/> : <NavigationMainPage/>
              }
          </Route>
          <Route path="/movies">
            <Navigation/>
          </Route>
          <Route path="/saved-movies">
            <Navigation/>
          </Route>
          <Route path="/profile">
            <Navigation/>
          </Route>
          <Route path="/signin">
            <Link to="/" className="header__logo-link header__logo-link_size"/>
          </Route>
          <Route path="/signup">
            <Link to="/" className="header__logo-link header__logo-link_size"/>
          </Route>
      </Switch>
    </header>
  )
}

export default Header;
