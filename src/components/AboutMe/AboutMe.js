import student__photo from '../../images/student__photo.jpg';
import './AboutMe.css';

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="about-me__heading section__heading">Студент</h2>
            <div className="about-me__description">
                <div className="about-me__description-text">
                    <h3 className="about-me__description-title">Максим</h3>
                    <p className="about-me__description-subtitle">Фронтенд-разработчик, 21 год</p>
                    <p className="about-me__description-paragraph">Я родился в Южно-Сахалинске, а живу в Санкт-Петербурге, заканчиваю обучение в университете СПБГУТ.
                                                                   Начинаю свой путь в веб-разработке.
                                                                   </p>
                    <div className="about-me__description-links">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="about-me__description-link">Facebook</a>
                        <a href="https://github.com/yungpluxury" target="_blank" rel="noreferrer" className="about-me__description-link">Github</a>
                    </div>
                </div>
                <img src={student__photo} alt="Максим" className="about-me__description-photo"/>
            </div>
        </section>
    )
}

export default AboutMe;
