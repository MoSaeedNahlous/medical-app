import React, { Fragment } from 'react'
import img1 from '../../res/images/1.jpg';
import Footer from '../Footer'
import Header from '../Header'



const HomePage = () => {
   
    return (
        <Fragment>
            <Header />
            <img src={img1} alt="img" className="slider-rep"/>
            <Footer />
        </Fragment>
    )
}

export default HomePage
