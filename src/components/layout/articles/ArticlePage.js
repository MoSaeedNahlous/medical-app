import React, { Fragment, useContext, useEffect } from 'react'
import img from '../../../res/images/article-cover.jpg'
import Footer from '../../Footer'
import Header from '../../Header'
import {ArticleGlobalContext } from '../../../context/articleContext/ArticleState'
import { UserGlobalContext } from '../../../context/userContext/UserState'
import { useHistory } from 'react-router'

const ArticlePage = ({ match }) => {
    const context = useContext(ArticleGlobalContext)
    const context2 = useContext(UserGlobalContext)
    const history = useHistory()

    const { GetArticleById, article, incViews, DeleteArticleById } = context
    const { user,LoadUser,isAuth } = context2
    
    useEffect(() => {
        LoadUser()
        GetArticleById(match.params.id)
        incViews(match.params.id)
    }, [])

    const onDelete = () => {
        DeleteArticleById(match.params.id)
        alert("Deleted Successfully!")
        history.push('/articles')
    }

    while (article === null) {
        return(<h1>Loading</h1>)
    }
    
    
    return (
        <Fragment>
            <Header />
        <div>
                <h2>{article.subject}</h2>
                <br/>
            <p>{article.date}📅 ,{article.views}👀 </p>
            {/* <div className="article-img">
                <img src={img} alt="article image" width="100%" height="20%"/>
            </div> */}
            <br />
            <div className="question-text-block">
                {article.text}
            </div>
            <br />
            </div>
            {( isAuth && user.id === article.author) ?
                (<button onClick={onDelete}>Delete</button>) :
                (null)}
            
            <Footer/>
        </Fragment>
    )
}

export default ArticlePage
