import React, { Fragment, useContext, useEffect } from 'react'
import img from '../../../res/images/article-cover.jpg'
import Footer from '../../Footer'
import Header from '../../Header'
import {ArticleGlobalContext } from '../../../context/articleContext/ArticleState'

const ArticlePage = ({ match }) => {
    const context = useContext(ArticleGlobalContext)

    const { GetArticleById, article } = context
    
    
    useEffect(() => {
        GetArticleById(match.params.id)
    }, [])
    while (article === null) {
        return(<h1>Loading</h1>)
    }
    
    
    return (
        <Fragment>
            <Header />
        <div>
            <h2>{article.data.subject}</h2>
            <p>{article.data.date},{article.data.views}</p>
            <div className="article-img">
                <img src={img} alt="article image" width="100%" height="20%"/>
            </div>
            <br />
            <div>
                {article.data.text}
            </div>
            <br />
            </div>
            <Footer/>
        </Fragment>
    )
}

export default ArticlePage
