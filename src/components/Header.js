import React, { Fragment } from 'react'
import logo from './../res/images/logo/default.png'


const openNav=()=> {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
const closeNav=()=> {
  document.getElementById("mySidenav").style.width = "0";
}

const Header = () => {
    return (
        <Fragment>
            <nav className="nav-container">
                <span onClick={openNav}>&equiv;</span>
                <img src={logo} alt="here is the logo" height="100" width="100" />
                <input type="text" name="Search" id="" placeholder="Search in Medica.." />
                <ul>
                    <li>Home</li>
                    <li>My Profile</li>
                    <li>Log Out</li>
                    
                </ul>
                
            </nav>
            <div id="mySidenav" className="sidenav">
                <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
        </Fragment>
    )
}

export default Header
