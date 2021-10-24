import './MoviesCard.css';
import movieImage from '../../images/movie.png';

import {useLocation} from 'react-router-dom';
import React from "react";

function MoviesCard(props) {
    const [isDeleteButtonVisible, setIsDeleteButtonVisible] = React.useState(false);
    const [isSaved, setIsSaved] = React.useState(false);

    const movie = {
        country : props.movie.country || 'Не указано',
        director: props.movie.director || 'Не указано',
        duration: props.movie.duration || 0,
        year: props.movie.year || 'Не указано',
        description: props.movie.description || 'Не указано',
        image: `${props.movie.image === null ? `${movieImage}` : `https://api.nomoreparties.co${props.movie.image?.url}`}`,
        trailer: props.movie?.trailerLink,
        nameRU: props.movie.nameRU || 'Не указано',
        nameEN: props.movie.nameEN || 'Не указано',
        thumbnail: `${props.movie.image === null ? `${movieImage}` : `https://api.nomoreparties.co${props.movie.image?.formats?.thumbnail?.url}`}`,
        movieId: props.movie.id,
    }

    const editedDuration = `${Math.trunc(movie.duration/60)}ч ${movie.duration % 60}м`;
    const image = `${props.movie.image === null ? `${movieImage}` : `https://api.nomoreparties.co${props.movie.image?.url}`}`;
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    const currentMovie = savedMovies.find((movie) => movie.nameRU === props.movie.nameRU);

    const location = useLocation();

    function handleCardMouseOver() {
        setIsDeleteButtonVisible(true);
    }

    function handleCardMouseOut() {
        setIsDeleteButtonVisible(false);
    }

    function handleLikeButtonCLick() {
        props.onMovieSave(movie);
        setIsSaved(true);
    }

    function handleDisLike() {
        setIsSaved(false);
        console.log(currentMovie)
        props.onDeleteMovie(currentMovie._id);
    }

    function handleDeleteMovie() {
        props.onDeleteMovie(props.movie._id);
        setIsSaved(false);
    }

    React.useEffect(() => {
        if(currentMovie) {
            setIsSaved(true)
        }

    }, [currentMovie, location])


    return (
        <li className="movies__list-item">
            <a href={props.movie.trailer} className="movies__trailer-link"><img onMouseEnter={handleCardMouseOver} onMouseLeave={handleCardMouseOut} alt={props.movie.nameRU} src={props.saved ? props.movie.image : image} className="movies__list-poster"/></a>
            <div className="movies__list-description">
                <p className="movies__list-title">{props.movie.nameRU}</p>
                <p className="movies__list-duration">{editedDuration}</p>
            </div>
            {props.saved ?
                <button onMouseEnter={handleCardMouseOver} onMouseLeave={handleCardMouseOut} className={`movies__list-delete-button ${isDeleteButtonVisible ? 'movies__list-delete-button_visible' : ''}`} onClick={handleDeleteMovie}></button> :
                <button className={`movies__list-save-button ${isSaved ? 'movies__list-save-button_clicked' : ''}`} onClick={isSaved ? handleDisLike : handleLikeButtonCLick}></button>}
        </li>
        )
}

export default MoviesCard;