import student__photo from '../../images/student__photo.jpg';
import './AboutMe.css';

function AboutMe() {
    return (
        <section className="about-me" id="about-me">
            <h2 className="about-me__heading section__heading">О себе</h2>
            <div className="about-me__description">
                <div className="about-me__description-text">
                    <h3 className="about-me__description-title">Максим</h3>
                    <p className="about-me__description-subtitle">Фронтенд-разработчик, 22 года</p>
                    <p className="about-me__description-paragraph">Я родился в Южно-Сахалинске, а живу в Санкт-Петербурге, закончил обучение в университете СПБГУТ.
                                                                   Работаю на позиции full stack web developer 1,5 года.
                                                                   </p>
                    <div className="about-me__description-links">
                        <a href="https://t.me/callmeyungpluxury" target="_blank" rel="noreferrer" className="about-me__description-link">Telegram</a>
                        <a href="https://github.com/yungpluxury" target="_blank" rel="noreferrer" className="about-me__description-link">Github</a>
                    </div>
                </div>
                <img src={student__photo} alt="Максим" className="about-me__description-photo"/>
            </div>
        </section>
    )
}

export default AboutMe;
