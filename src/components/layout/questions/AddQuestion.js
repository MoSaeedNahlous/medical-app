import React, { useContext, useState } from 'react'
import { QuestionGlobalContext } from '../../../context/questionContext/QuestionState'
import { UserGlobalContext } from '../../../context/userContext/UserState'

const AddQuestion = () => {

    const context = useContext(QuestionGlobalContext)
    const context2 = useContext(UserGlobalContext)
    const { AddQuestion } = context
    const { user } = context2
    const [state, setstate] = useState({
        text: '',
        subject: '',
        date: '',
        author: '',
        views: 0,
        image: ''
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
        AddQuestion(state)
        document.getElementById("add-question-form").reset()
        alert("Your Question Posted Successfully!!")
    }
    return (
        <div >
            <h3>Post a Question</h3>
            <form className="add-article" id="add-question-form" onSubmit={onSubmitHandler} >
                
                <br/>
                <div>
                    <input type="text" name="subject" placeholder=" Question's Subject" required
                        onChange={onChangeHandler} />
                </div>
                <div>
                    <textarea required cols="89" rows="15"
                     placeholder=" Question's Body" onChange={onChangeText} ></textarea></div>
                <div>
                    <button>Post</button>
                </div>
                <br/>
            </form>
        </div>
    )
}

export default AddQuestion
