/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useContext, useEffect } from 'react'
import { ArticleGlobalContext } from '../../../context/articleContext/ArticleState'
import { UserGlobalContext } from '../../../context/userContext/UserState'
import Footer from '../../Footer'
import Header from '../../Header'
import AddArticle from './AddArticle'
import { Link } from 'react-router-dom'


const ArticlesPage = () => {
    const context = useContext(ArticleGlobalContext)
    const context2 = useContext(UserGlobalContext)
    const { articles,GetAllArticles } = context

    useEffect(() => {
        GetAllArticles()
    }, [])

    while(articles === null) {
        return(<h1>Loading...</h1>)
    } 
        
    
    
    return (
        <Fragment>
            <Header />
            <br />
            {context2.isAuth && context2.user.isDoctor?(<AddArticle />):(null)}
            
            <br/>
            <h2>Articles</h2>
        <div className="articles-grid-container">
                {
                    articles === [] ? (<h2>No articles to be found..</h2>) : (
                        articles.map((article) => {
                            return (
                                <Fragment> 
            <div className="article-main-container">
                <h6>{article.date} 📅 </h6>
                <br />
                {/* <img src={cover} alt="cover image" className="cover-image" width="100%" height="50%"/> */}
                <br/>
                <h3>{article.subject}</h3>
                <br/>
                <p> {article.text} <span style={{ fontWeight: 'bolder' }}> check the full Article Below..</span></p>
                <br/>
                <button className="read-more"><Link to={`/article/${article.id}`}>Read More..</Link></button>
                <p>{article.views}👀 </p> 
            </div>
        </Fragment>
                            //     <Article key={article.id}
                            //     date={article.date}
                            //     text={article.text}
                            //     subject={article.subject}
                            //     views={article.views}
                            //     id={article.id}
                            // />
                            )
                        }   
                        )
                    )
            }
            
            </div>
            <Footer />
        </Fragment>
    )
}

export default ArticlesPage
