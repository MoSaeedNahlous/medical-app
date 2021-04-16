import React, { Fragment } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import DocSignUpForm from './DocSignUpForm'

const DocSignUpPage = () => {
    return (
        <Fragment>
            <Header />
            <DocSignUpForm />
            <Footer />
        </Fragment>
    )
}

export default DocSignUpPage
