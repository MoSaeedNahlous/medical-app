import React, { Fragment, useContext, useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { UserGlobalContext } from '../../context/userContext/UserState'
const Profile = () => {

    const context = useContext(UserGlobalContext)

    const { user,LoadUser} = context

    useEffect(() => {
       LoadUser()
    }, [])
    
    return (
        <Fragment>
            <Header />
            <div style={{padding:'4%'}}>
                <h1>My Profile</h1>
                <br />
                <br />
                <h3>My info</h3>
                <br/>

                <div>
                    <div>
                    <h4>First Name : {user.firstName}</h4>  
                    
                </div><br/>

                <div>
                    <h4>Last Name : {user.lastName}</h4>
                    
                </div><br/>

                <div>
                    <h4>Email : {user.email}</h4>
                    
                </div><br/>
                     
                <div>
                    <h4>Mobile Number : {user.mobileNumber}</h4>
                    
                </div><br/>
                
                <div>
                    <h4>Gender : {(user.gender)?("male"):("female")}</h4>
                        
                </div><br/>
                
                <div>
                    <h4>BirthDate : {user.birthDay}</h4>
                    
                </div><br/>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Profile
