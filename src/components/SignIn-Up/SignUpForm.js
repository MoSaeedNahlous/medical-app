import React, { useContext, useState } from 'react'
import { UserGlobalContext} from '../../context/userContext/UserState'

const SignUpForm = () => {


    const context = useContext(UserGlobalContext)

    const { AddUser } = context
    
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
        mobile: '',
        gender: null,
        birthDate:null
        
    })
    
    const onChangeHandler = (e) => { 
        setState({...state,[e.target.name]:e.target.value})
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
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
                birthDate:state.birthDate,
                isAdmin: false,
                isDoctor: false,
                image:""
            }

            console.log(user);
        }
    }



    return (
        <div>
            <form onSubmit={onSubmitHandler}>
            <h1>Sign Up</h1>
            <label>First Name</label>
            <input type="text" name="firstName" onChange={onChangeHandler} required/>
            <br />
            <label>Last Name</label>
            <input type="text" name="lastName" onChange={onChangeHandler} required/>
            <br />
            <label>Email</label>
            <input type="email" name="email" onChange={onChangeHandler} required/>
            <br />
            <label>Password</label>
            <input type="password" name="password" onChange={onChangeHandler} required/>
            <br />
            <label>Confirm Password</label>
            <input type="password" name="password2" onChange={onChangeHandler} required/>
            <br />
            <label>Mobile Number</label>
            <input type="number" name="mobile" onChange={onChangeHandler} required/>
            <br />
            <label>Gender</label>
                <select required onChange={onChangeHandler}>
                    <option defaultValue="" hidden>Select a gender</option>
                    <option value="1">Male</option>
                    <option value="0">Female</option>
            </select>
            <br />
            <label>BirthDate</label>
            <input type="date" name="birthDate" onChange={onChangeHandler} required/>
            <br />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm
