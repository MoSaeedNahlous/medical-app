/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
        <div style={{paddingTop:'8%'}} >
            <h2>Articles</h2>
        <div className="articles-grid-container" data-aos="fade-left" data-aos-duration="3000">
                {
                    articles === [] ? (<h2>No articles to be found..</h2>) : (
                        articles.slice(0,3).map((article) => {
                            return (
                                <> 
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
        </>
                                // <Article key={article.id}
                                // date={article.date}
                                // text={article.text}
                                // subject={article.subject}
                                // views={article.views}
                                // id={article.id}
                                // />
                            )
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
