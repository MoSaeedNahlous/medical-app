import React, { Fragment } from 'react'
import logo from './../res/images/logo/default.png'
import img from './../res/images/default-user-image.jpg'
import { Link } from 'react-router-dom';


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
                <Link to="/"><img src={logo} alt="here is the logo" height="100" width="100" /></Link>
                
                <input type="text" name="Search" id="" placeholder="Search in Medica.." />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>
                        <div style={{display:'flex'}}>
                            <img className="doctor-image" src={img} alt="" width="20px" height="20px" />
                            <Link to="/profile">My Profile</Link>
                        </div>
                        </li>
                    <li><Link to="/signin">Sign In</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/signin">Sign Out</Link></li>
                    
                </ul>
                
            </nav>
            <div id="mySidenav" className="sidenav">
                <Link  className="closebtn" onClick={closeNav}>&times;</Link>
                <Link to="/">Home</Link>
                <Link to="/profile">My Profile</Link>
                <Link to="/signin">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/signin">Sign Out</Link>
            </div>
        </Fragment>
    )
}

export default Header
