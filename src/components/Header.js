import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <header>
            <NavLink to ='/' exact ='true'>Logo Home Img</NavLink>
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