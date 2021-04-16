import React, { Fragment, useContext, useEffect } from 'react'
import logo from './../res/images/logo/default.png'
import img from './../res/images/default-user-image.jpg'
import { Link, useHistory } from 'react-router-dom';
import { UserGlobalContext } from '../context/userContext/UserState';


const openNav=()=> {
  document.getElementById("mySidenav").style.width = "15%";
}

/* Set the width of the side navigation to 0 */
const closeNav=()=> {
  document.getElementById("mySidenav").style.width = "0";
}

const Header = () => {

    const context = useContext(UserGlobalContext)
    const { user, isAuth, Logout,LoadUser } = context
    const history = useHistory()

    useEffect(() => {
        LoadUser()
    }, [])

    const logout = () => {
        Logout()
        history.push('/signin')
    }
    

    
    return (
        <Fragment>
            <nav className="nav-container">
                <span onClick={openNav}>&equiv;</span>
                <Link to="/"><img src={logo} alt="here is the logo" height="100" width="100" /></Link>
                
                <input type="text" name="Search" id="" placeholder="Search in Medica.." />
                <ul>
                    <li><Link to="/">Home</Link></li>
                     {(!isAuth) ? (null) : (
                        <li>
                        <div style={{display:'flex'}}>
                            <img className="doctor-image" src={img} alt="" width="20px" height="20px" />
                            <Link to="/profile">My Profile</Link>
                        </div>
                    </li>)}
                    

                    {(isAuth) ? (null) : (
                        <li><Link to="/signin">Sign In</Link></li>)}
                    {(isAuth) ? (null) : (
                        <li><Link to="/signup">Sign Up</Link></li>)}
                    {(!isAuth) ? (null) : (
                        <li onClick={logout}><Link to="/signin">Sign Out</Link></li>)}
                    
                    
                </ul>
                
            </nav>
            <div id="mySidenav" className="sidenav">
                <Link  className="closebtn" onClick={closeNav}>&times;</Link>
                <Link to="/">Home</Link>
                {(!isAuth) ? (null) : (
                        <Link to="/profile">My Profile</Link>)}
                {(isAuth) ? (null) : (
                        <Link to="/signin">Sign In</Link>)}
                {(isAuth) ? (null) : (
                    <Link to="/signup">Sign Up</Link>)}
                {(!isAuth) ? (null) : (
                        <Link onClick={logout} to="/signin">Sign Out</Link>)}
                
            </div>
        </Fragment>
    )
}

export default Header
