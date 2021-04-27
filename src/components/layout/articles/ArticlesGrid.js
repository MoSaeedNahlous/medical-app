import React, { useContext, useEffect } from 'react'
import Article from './Article'
import { ArticleGlobalContext} from '../../../context/articleContext/ArticleState'
import { useHistory } from 'react-router'

const ArticlesGrid = () => {
    const history =useHistory()
    const context = useContext(ArticleGlobalContext)
    const { GetAllArticles, articles } = context
    const goToArticles = () => {
        history.push('/articles')
    }

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
                        articles.slice(0,3).map((article) => {
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

            <div style={{width:'100%'}}>
                <button onClick={goToArticles}  style={{padding:'2%',fontSize:'20px',borderRadius:'15px',cursor:'pointer'}} >More</button>
            </div>
            <br/>
        </div>
    )
}

export default ArticlesGrid
