import React, { useContext, useEffect, useState } from 'react'
import Recaptcha from 'react-recaptcha'
import { Link, useHistory } from 'react-router-dom'
import { UserGlobalContext } from '../../context/userContext/UserState'

const DocSignUpForm = () => {
var verify = function (response) {
    response ? (setState({...state,authed:true})) : (setState({...state,authed:false}));
  };
    const context = useContext(UserGlobalContext)

    const { AddUser,isAuth } = context
    
    const history = useHistory()
    
    useEffect(() => {
         if (isAuth) {
      history.push('/');
    }
    }, [isAuth])
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
        mobile: '',
        gender: null,
        birthDate:null,
        isAdmin:false,
        isDoctor: true,
        docSpecialization:'',
        authed:false
    })


    
    const onChangeHandler = (e) => { 
        setState({...state,[e.target.name]:e.target.value})
    }


    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (state.authed) {
            alert('you should pass the reCaptcha test first!')
        }else{
        if (state.password !== state.password2) {
            alert("check your passwords!")
        } else {
            var user = {
                firstName: state.firstName,
                lastName: state.lastName,
                email: state.email,
                password: state.password,
                mobile: state.email,
                gender: state.gender,
                birthDate: state.birthDate,
                docSpecialization: state.docSpecialization,
                isAdmin: false,
                isDoctor: true,
                image: "",
                
            }

            AddUser(user);
            alert("Success!! redirecting to Sign In page..")
            history.push('/signin');
            document.getElementById('signup-form').reset()
            }
        }
    }



    return (
        <div>
            <form id="signup-form" onSubmit={onSubmitHandler}>
                <h1>Sign Up for Doctors</h1>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" placeholder="First Name"
                    onChange={onChangeHandler} required />
                </div>

                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" placeholder="Last Name"
                    onChange={onChangeHandler} required />
                </div>
                
                <div>
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email"
                    onChange={onChangeHandler} required />
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password"
                    onChange={onChangeHandler} minLength="8" required />
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input type="password" name="password2" placeholder="Password"
                    onChange={onChangeHandler} minLength="8" required />
                </div>

                <div>   
                    <label>Mobile Number</label>
                    <input type="number" name="mobile" placeholder="Mobile Number"
                    onChange={onChangeHandler} required />
                </div>
                <div>
                    <label>Gender</label>
                    <select required name="gender" onChange={onChangeHandler}>
                        <option defaultValue="" hidden>Select a gender</option>
                        <option value="1">Male</option>
                        <option value="0">Female</option>
                    </select>
                </div>

                <div>
                    <label>BirthDate</label>
                    <input type="date" name="birthDate"
                    onChange={onChangeHandler} required />
                </div>

                <div>
                    <label>Specialized</label>
                    <input type="text" name="docSpecialization"
                    onChange={onChangeHandler} placeholder="Specialization" required />
                </div>
                
                <div>
                    <Recaptcha
                        sitekey='6Ldfe8EaAAAAANlyY6W6_p0wbPf8yxUQXpCJvYwf'
                        render='explicit'
                        verifyCallback={verify}
                        theme="light"
                    />
                </div>
                <div>
                    <button type="submit">Sign Up</button>
                </div>
                <div>
                    <p>already got an account? <Link to="/signin"><span className="here">sign in here</span></Link> </p>
                </div>
            </form>
        </div>
    )
}

export default DocSignUpForm
