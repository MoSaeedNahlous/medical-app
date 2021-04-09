import React, { Fragment } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import SignUpForm from './SignUpForm'

const SignUpPage = () => {
    return (
        <Fragment>
            <Header />
            <SignUpForm />
            <Footer/>
        </Fragment>
    )
}

export default SignUpPage
