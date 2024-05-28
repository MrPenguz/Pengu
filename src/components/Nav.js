import { Fragment } from "react";
import  "./Nav.css";
import lillemon from './download.png';
const Nav = () => {
return (
    <Fragment>
        <nav>
            <input type="checkbox" id="check"/>
                <label for="check" class="checkbtn">
                    <i class="fas fa-bars"></i>
                </label>
                <img src={lillemon} alt="peop"/>
                <ul>
                    <li><a class="active" href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                <li><a href="#Contact">Contact</a></li>
                <li><a href="#Feedback">Feedback</a></li>
                </ul>
        </nav>
        
    </Fragment>
        
        )

}
export default Nav;