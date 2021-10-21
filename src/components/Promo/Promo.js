import './Promo.css';

function Promo() {
    return (
        <section className="promo">
            <h1 className="promo__heading">Учебный проект студента факультета Веб-разработки.</h1>
            <ul className="promo__list">
                <li className="promo__list-item">О проекте</li>
                <li className="promo__list-item">Технологии</li>
                <li className="promo__list-item">Студент</li>
            </ul>
        </section>
    )
}

export default Promo;