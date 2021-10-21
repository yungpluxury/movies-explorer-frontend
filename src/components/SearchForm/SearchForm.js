import './SearchForm.css';
import search__icon from '../../images/search__icon.svg';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
    return (
        <section className="search">
            <form className="search__form">
                <div className="search__bar">
                    <img src={search__icon} alt="Поиск" className="search__icon"/>
                    <fieldset className="search__form-fields">
                        <input type="text" placeholder="Фильм" className="search__form-input" required/>
                    </fieldset>
                    <button className="search__form-button" type="submit">Найти</button>
                </div>
                <div className="search__toggle-box">
                    <FilterCheckbox />
                    <h3 className="search__toggle-text">Короткометражки</h3>
                </div>

            </form>
        </section>
    )
}

export default SearchForm;