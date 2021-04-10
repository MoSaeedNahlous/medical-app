import React, { Fragment } from 'react'
import img1 from '../../res/images/1.jpg';
import Footer from '../Footer'
import Header from '../Header'
import ArticlesGrid from '../layout/articles/ArticlesGrid';
import QuestionsGrid from '../layout/questions/QuestionsGrid';



const HomePage = () => {
   
    return (
        <Fragment>
            <Header />
            <img src={img1} alt="img" className="slider-rep" />
            <br />
            <ArticlesGrid />
            <br />
            <QuestionsGrid/>
            <Footer />
        </Fragment>
    )
}

export default HomePage
