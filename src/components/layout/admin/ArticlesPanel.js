import React, { useContext, useEffect, useState } from 'react'
import { ArticleGlobalContext } from '../../../context/articleContext/ArticleState'

const ArticlesPanel = () => {
    const context = useContext(ArticleGlobalContext)
    const {GetAllArticles,DeleteArticleById,SetCurrentArticle,currentArticle,ClearCurrentArticle,UpdateArticleById}=context

    const [state, setstate] = useState({subject:'',date:'',text:''})
    useEffect(() => {
        ClearCurrentArticle()
    }, [])

    useEffect(() => {
        GetAllArticles()
        if(currentArticle!==null){
            setstate({subject:currentArticle.subject,date:currentArticle.date,text:currentArticle.text})
        }else{
            setstate({subject:'',date:'',text:''})
        }
    }, [currentArticle])

    const OnChangeHandler =(e)=>{
        setstate({...state,[e.target.name]:e.target.value})
    }
    
    const OnSubmitHandler=(e)=>{
        e.preventDefault();
        console.log(currentArticle._id,state);
        UpdateArticleById(currentArticle._id,state)
        ClearCurrentArticle()
        GetAllArticles()

    }

    const DeleteHandler=(id)=>{
        DeleteArticleById(id)
        GetAllArticles()
    }

    while(context.articles===null){
        return <h1>Loading...</h1>
    }

    return (
        <div className="panel-sec">
            <div>
            <table>
            <thead>
            <tr>
                <th>Subject</th>
                <th>Date</th>
                <th>Views</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {context.articles===[]?(<p>No articles..</p>):(
                context.articles.map(article=>{
                    return <tr key={article._id}>
                        <td>{article.subject}</td>
                        <td>{article.date}</td>
                        <td>{article.views}</td>
                        <td><button onClick={()=>DeleteHandler(article._id)}>❎</button>
                        <button onClick={()=>{
                            SetCurrentArticle(article)
                        }}>🖋</button></td>
                    </tr> 
                    
                })
            )}
            </tbody>


            </table>
            </div>

            <div>
                <form onSubmit={OnSubmitHandler}>
                    <div> 
                        <label>Subject</label>
                        <input type="text" name="subject" value={state.subject} onChange={OnChangeHandler}/>
                    </div>
                    <br/>
                    <div>
                        <label>Date</label>
                        <input type="text" name="date" value={state.date} onChange={OnChangeHandler}/>
                    </div>
                    <br/>
                    <div>
                        <textarea name="text" id="" cols="30" rows="10" value={state.text} onChange={OnChangeHandler}> </textarea>
                    </div>
                    <div>
                        <button>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ArticlesPanel
