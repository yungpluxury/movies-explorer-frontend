import './Footer.css'

function Footer() {
    return (
        <section className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__nav">
                <p className="footer__copyright">&copy; 2021</p>
                <ul className="footer__links">
                    <li className="footer__links-item">
                        <a href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer" className="footer__link">Яндекс.Практикум</a>
                    </li>
                    <li className="footer__links-item">
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="footer__link">Github</a>
                    </li>
                    <li className="footer__links-item">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="footer__link">Facebook</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Footer;