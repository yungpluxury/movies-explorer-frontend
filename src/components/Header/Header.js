import logo from '../../images/logo.svg';
import Navigation from "../Navigation/Navigation";
import {Link} from "react-router-dom";
import './Header.css'

function Header(props) {
    return (
        <section className="header">
            <Link to="/"><img className="header__logo" alt="Лого" src={logo}/></Link>
            <Navigation loggedIn={props.loggedIn}/>
        </section>
    )
}

export default Header;