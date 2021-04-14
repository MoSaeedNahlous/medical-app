import React, { useContext, useEffect } from 'react'
import Article from './Article'
import { ArticleGlobalContext} from '../../../context/articleContext/ArticleState'

const ArticlesGrid = () => {

    const context = useContext(ArticleGlobalContext)
    const {GetAllArticles,articles} = context

    useEffect(() => {
        GetAllArticles()
    }, [])

    while (articles === null) {
        return (
            <h1>Loading..</h1>
        )
    }
    return (
        <div style={{paddingTop:'8%'}}>
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

            <button>More</button>
        </div>
    )
}

export default ArticlesGrid
