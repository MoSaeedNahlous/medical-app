import React, { Fragment } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import SignInForm from './SignInForm'

const SignInPage = () => {
    return (
        <Fragment>
            <Header />
            <SignInForm />
            <Footer />
        </Fragment>
    )
}

export default SignInPage
