import React, { Fragment, useContext, useEffect } from 'react'
import { ArticleGlobalContext } from '../../../context/articleContext/ArticleState'
import { UserGlobalContext } from '../../../context/userContext/UserState'
import Footer from '../../Footer'
import Header from '../../Header'
import AddArticle from './AddArticle'
import Article from './Article'


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
                            return (<Article key={article.id}
                                date={article.date}
                                text={article.text}
                                subject={article.subject}
                                views={article.views}
                                id={article.id}
                            />)
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
