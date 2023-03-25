import './Footer.css'

function Footer() {
    return (
        <section className="footer">
            <p className="footer__text">Developed by Karpychev Max</p>
            <div className="footer__nav">
                <p className="footer__copyright">&copy; 2023</p>
                <ul className="footer__links">
                    <li className="footer__links-item">
                        <a href="https://github.com/yungpluxury" target="_blank" rel="noreferrer" className="footer__link">Github</a>
                    </li>
                    <li className="footer__links-item">
                        <a href="https://t.me/callmeyungpluxury" target="_blank" rel="noreferrer" className="footer__link">Telegram</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Footer;