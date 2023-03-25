import './Promo.css';

function Promo() {
    return (
        <section className="promo">
            <h1 className="promo__heading">Для использования сервиса войдите или зарегистрируйтесь.</h1>
            <ul className="promo__list">
                <li className="promo__list-item"><a href="#about-project">О проекте</a></li>
                <li className="promo__list-item"><a href="#tech">Технологии</a></li>
                <li className="promo__list-item"><a href="#about-me">О себе</a></li>
            </ul>
        </section>
    )
}

export default Promo;