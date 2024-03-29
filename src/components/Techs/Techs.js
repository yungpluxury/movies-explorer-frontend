import './Techs.css';

function Techs() {
    return(
        <section className="techs" id="tech">
            <h2 className="techs__heading section__heading">Технологии</h2>
            <h3 className="techs__title">7 технологий</h3>
            <p className="techs__subtitle">В данном проекте в полной мере были применены следующие технологии.</p>
            <ul className="techs__list">
                <li className="techs__list-item">HTML</li>
                <li className="techs__list-item">CSS</li>
                <li className="techs__list-item">JS</li>
                <li className="techs__list-item">React</li>
                <li className="techs__list-item">Git</li>
                <li className="techs__list-item">Express.js</li>
                <li className="techs__list-item">mongoDB</li>
            </ul>
        </section>
    )
}

export default Techs;