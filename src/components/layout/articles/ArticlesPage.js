import React, { Fragment, useContext, useEffect } from 'react'
import { ArticleGlobalContext } from '../../../context/articleContext/ArticleState'
import Footer from '../../Footer'
import Header from '../../Header'
import AddArticle from './AddArticle'
import Article from './Article'
import ArticlesGrid from './ArticlesGrid'

const ArticlesPage = () => {
    const context = useContext(ArticleGlobalContext)
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
            <AddArticle />
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
