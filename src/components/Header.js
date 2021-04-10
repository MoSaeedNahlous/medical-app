import React, { Fragment } from 'react'
import logo from './../res/images/logo/default.png'
import img from './../res/images/default-user-image.jpg'


const openNav=()=> {
  document.getElementById("mySidenav").style.width = "15%";
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
                    <li>
                        <div style={{display:'flex'}}>
                            <img className="doctor-image" src={img} alt="" width="20px" height="20px" />
                            My Profile
                        </div>
                        </li>
                    <li>Sign In</li>
                    <li>Sign Out</li>
                    
                </ul>
                
            </nav>
            <div id="mySidenav" className="sidenav">
                <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
                <a href="#">Home</a>
                <a href="#">My Profile</a>
                <a href="#">Sign In</a>
                <a href="#">Sign Out</a>
            </div>
        </Fragment>
    )
}

export default Header
