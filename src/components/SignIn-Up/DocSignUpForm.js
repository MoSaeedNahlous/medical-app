import React, { useContext, useEffect, useRef, useState } from 'react'
import Recaptcha from 'react-recaptcha'
import { Link, useHistory } from 'react-router-dom'
import { UserGlobalContext } from '../../context/userContext/UserState'

const DocSignUpForm = () => {
const isVerified = useRef(false)
    const context = useContext(UserGlobalContext)

    const { AddUser } = context
    
    const history= useHistory()
    
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

    useEffect(() => {
        isVerified.current=false
    }, [])
    
    const onChangeHandler = (e) => { 
        setState({...state,[e.target.name]:e.target.value})
    }
    const verify = (response) => {
    response ? (isVerified.current = true) : (isVerified.current = false);
  };

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (!isVerified.current) {
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
                birthDate:state.birthDate,
                isAdmin: false,
                isDoctor: false,
                image:"data:image/jpg;base64,/9j/4QCORXhpZgAATU0AKgAAAAgABQEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAITAAMAAAABAAEAAIKYAAIAAAArAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABKGMpIE1vaGFtbWFkIFN1bGhhbiBCYWRyaSB8IERyZWFtc3RpbWUuY29tAAD/7QBSUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAADYcAnQAKihjKSBNb2hhbW1hZCBTdWxoYW4gQmFkcmkgfCBEcmVhbXN0aW1lLmNvbRwCAAACAAT/4Qx1aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49J++7vycgaWQ9J1c1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCc/Pgo8eDp4bXBtZXRhIHhtbG5zOng9J2Fkb2JlOm5zOm1ldGEvJyB4OnhtcHRrPSdJbWFnZTo6RXhpZlRvb2wgMTAuODAnPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGx1cz0naHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyc+CiAgPHBsdXM6TGljZW5zb3I+CiAgIDxyZGY6U2VxPgogICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSdSZXNvdXJjZSc+CiAgICAgPHBsdXM6TGljZW5zb3JVUkw+aHR0cHM6Ly93d3cuZHJlYW1zdGltZS5jb208L3BsdXM6TGljZW5zb3JVUkw+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvcGx1czpMaWNlbnNvcj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wUmlnaHRzPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyc+CiAgPHhtcFJpZ2h0czpXZWJTdGF0ZW1lbnQ+aHR0cHM6Ly93d3cuZHJlYW1zdGltZS5jb20vYWJvdXQtc3RvY2staW1hZ2UtbGljZW5zZXM8L3htcFJpZ2h0czpXZWJTdGF0ZW1lbnQ+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0ndyc/Pv/bAEMACAYGBwYFCAcHBwkJCAoMFA0MCwsMGRITDxQdGh8eHRocHCAkLicgIiwjHBwoNyksMDE0NDQfJzk9ODI8LjM0Mv/CAAsIAyADIAEBIgD/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQQFBgMC/9oACAEBAAAAAbgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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"
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
            <label>First Name</label>
            <input type="text" name="firstName" placeholder="First Name" onChange={onChangeHandler} required/>
            <br />
            <label>Last Name</label>
            <input type="text" name="lastName" placeholder="Last Name" onChange={onChangeHandler} required/>
            <br />
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" onChange={onChangeHandler} required/>
            <br />
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" onChange={onChangeHandler} minLength="8" required/>
            <br />
            <label>Confirm Password</label>
            <input type="password" name="password2" placeholder="Password" onChange={onChangeHandler} minLength="8" required/>
            <br />
            <label>Mobile Number</label>
            <input type="number" name="mobile"placeholder="Mobile Number" onChange={onChangeHandler} required/>
            <br />
            <label>Gender</label>
                <select required onChange={onChangeHandler}>
                    <option defaultValue="" hidden>Select a gender</option>
                    <option value="1">Male</option>
                    <option value="0">Female</option>
            </select>
            <br />
            <label>BirthDate</label>
            <input type="date" name="birthDate" onChange={onChangeHandler}  required/>
                <br />
                <label>Specialized</label>
                <input type="text" name="birthDate" onChange={onChangeHandler} placeholder="specialized" required />
                <br/>
                <div>
                    <Recaptcha
                        sitekey='6Ler_qMaAAAAAF-fudkxWddQyF_Jr5KHgu3nnLeJ'
                        render='explicit'
                        verifyCallback={verify}
                        theme="light"
                    />
                </div>
                <button type="submit">Sign Up</button>
                <div>
                    <p>already got an account? <Link to="/signin">sign in here</Link> </p>
                </div>
            </form>
        </div>
    )
}

export default DocSignUpForm