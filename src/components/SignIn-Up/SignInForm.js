import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserGlobalContext} from '../../context/userContext/UserState'

const SignInForm = () => {


    const context = useContext(UserGlobalContext)
    const history = useHistory()

    const { Login,isAuth,LoadUser } = context
    
    const [state, setState] = useState({
        email: '',
        password: '',
    })
    
    const onChangeHandler = (e) => { 
        setState({...state,[e.target.name]:e.target.value})
    }

    useEffect(() => {
        if (isAuth) {
      history.push('/');
    }
    }, [isAuth])

    const onSubmitHandler = (e) => {
        e.preventDefault()
        Login(state)
        document.getElementById('signin-form').reset()
        }
    



    return (
        <div>
            <form id="signin-form" onSubmit={onSubmitHandler}>
                <h1>Sign In</h1>

                <div>
                    <label>Email</label>
                    <input type="email" name="email"
                    onChange={onChangeHandler} required />
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password"
                    onChange={onChangeHandler} required />
                </div>

                <div>
                    <button type="submit">Sign In</button>
                </div>
                <div>
                    <p>Don't have an account? <Link to="/signup"> <span class="here">sign up here</span> </Link> </p>
                </div>
            </form>
        </div>
    )
}

export default SignInForm
