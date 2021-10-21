import './Portfolio.css';
function Portfolio() {
    return (
        <section className="portfolio">
            <h4 className="portfolio__heading">Портфолио</h4>
            <ul className="portfolio__links">
                <li className="portfolio__links-item">
                    <a href="https://yungpluxury.github.io/how-to-learn/" target="_blank" rel="noreferrer" className="portfolio__link">Статичный сайт</a>
                </li>
                <li className="portfolio__links-item">
                    <a href="https://yungpluxury.github.io/russian-travel/" target="_blank" rel="noreferrer" className="portfolio__link">Адаптивный сайт</a>
                </li>
                <li className="portfolio__links-item">
                    <a href="https://yungpluxury.students.nomoredomains.club/" target="_blank" rel="noreferrer" className="portfolio__link">Одностраничное приложение</a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;