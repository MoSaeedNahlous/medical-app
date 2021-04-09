import React, { useContext, useState } from 'react'
import { UserGlobalContext} from '../../context/userContext/UserState'

const SignInForm = () => {


    const context = useContext(UserGlobalContext)

    const {  } = context
    
    const [state, setState] = useState({
        email: '',
        password: '',
    })
    
    const onChangeHandler = (e) => { 
        setState({...state,[e.target.name]:e.target.value})
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
       
            

            
        }
    



    return (
        <div>
            <form onSubmit={onSubmitHandler}>
            <h1>Sign In</h1>
            <label>Email</label>
            <input type="email" name="email" onChange={onChangeHandler} required/>
            <br />
            <label>Password</label>
            <input type="password" name="password" onChange={onChangeHandler} required/>
            <br />
            <button type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default SignInForm
