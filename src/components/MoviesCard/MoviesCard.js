import './MoviesCard.css';
import poster from '../../images/movie.png';
import React from "react";

function MoviesCard(props) {
    const [isDeleteButtonVisible, setIsDeleteButtonVisible] = React.useState(false);
    const [isLiked, setIsLiked] = React.useState(false);

    function handleCardMouseOver() {
        setIsDeleteButtonVisible(true);
    }

    function handleCardMouseOut() {
        setIsDeleteButtonVisible(false);
    }

    function handleLikeButtonCLick() {
        setIsLiked(!isLiked);
    }
    return (
        <li className="movies__list-item">
            <img src={poster} alt="Превью" className="movies__list-poster"/>
            <div onMouseEnter={handleCardMouseOver} onMouseLeave={handleCardMouseOut} className="movies__list-description">
                <p className="movies__list-title">33 слова о дизайне</p>
                <p className="movies__list-duration">1ч 17м</p>
            </div>
            {props.saved ?
                    <button className={`movies__list-delete-button ${isDeleteButtonVisible ? 'movies__list-delete-button_visible' : ''}`}></button> :
                    <button className={`movies__list-save-button ${isLiked ? 'movies__list-save-button_clicked' : ''}`} onClick={handleLikeButtonCLick}></button>}
            
        </li>
        )

}

export default MoviesCard;