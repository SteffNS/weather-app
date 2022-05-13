import { NavLink } from "react-router-dom";
import Logo  from '../images/logo.svg';

const Header = () => {
    return(
        <header>
            <NavLink to ='/' exact ='true'>
                <img src={Logo} alt="Logo for react weather app" />
            </NavLink>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' exact='true'>
                            Home
                        </NavLink>    
                    </li>
                    <li>
                        <NavLink to='/about'>
                            About
                        </NavLink> 
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;