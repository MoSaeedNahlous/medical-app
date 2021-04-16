import React, { useContext, useState } from 'react'
import { ArticleGlobalContext } from '../../../context/articleContext/ArticleState'
import { UserGlobalContext } from '../../../context/userContext/UserState'

const AddArticle = () => {

    const context = useContext(ArticleGlobalContext)
    const context2 = useContext(UserGlobalContext)
    const { AddArticle } = context
    const { user } = context2
    const [state, setstate] = useState({
        text: '',
        subject: '',
        date: '',
        author: '',
        views:0
    })

    const onChangeHandler = (e) => {
        setstate({...state,[e.target.name]:e.target.value})
    }

    const onChangeText = (e) => {
        setstate({...state,text:e.target.value})
    }
    
    const onSubmitHandler = (e) => { 
        e.preventDefault()
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        setstate({ ...state, date: today,author:user.id })
        AddArticle(state)
        document.getElementById("add-article-form").reset()
        alert("Your Article Added Successfully!!")

    }

    return (
        <div >
            <h3>Post an Article</h3>
            <form className="add-article" id="add-article-form" onSubmit={onSubmitHandler}>
                
                <br/>
                <div>
                    <input type="text" name="subject" placeholder=" Article's Subject" required
                        onChange={onChangeHandler} />
                </div>
                <div>
                    <textarea required cols="89" rows="15"
                    onChange={onChangeText} placeholder=" Article's Body"  ></textarea></div>
                <div>
                    <button>Post</button>
                </div>
                <br/>
            </form>
        </div>
    )
}

export default AddArticle
