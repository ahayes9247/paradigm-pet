import { NavLink } from 'react-router-dom';
import './Navbar.css';
const logo = require('./components/img/logo.png')

function Navbar() {
    return(
        <nav id="navbar">
            <ul>
                <li id="link-col-1" class="inactive">
                    {/* <a href="/">Home</a> */}
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                </li>
                
                <li id="link-col-2" class="inactive">
                    {/* <a href="/Cats">Cats</a> */}
                    <NavLink exact to="/Cats">
                        Cats
                    </NavLink>
                </li>
                <li id="link-col-3" class="inactive">
                    {/* <a href="/Dogs">Dogs</a> */}
                    <NavLink exact to="/Dogs" >
                        Dogs
                    </NavLink>
                </li>
                <li id="link-col-4" class="inactive">
                    {/* <a href="/Birds">Birds</a> */}
                    <NavLink exact to="/Birds">
                        Birds
                    </NavLink>
                </li>
                <li id="link-col-5" class="inactive">
                    {/* <a href="/Contact">Contact Us</a> */}
                    <NavLink exact to="/Contact">
                        Contact Us
                    </NavLink>
                </li>
                <li id="link-col-6" class="inactive">
                    <img id="nav-logo" src={logo}></img>
                </li>
            </ul>
            <hr id="nav-separator"></hr>
        </nav>
    );
}

export default Navbar;