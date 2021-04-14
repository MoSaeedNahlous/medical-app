import React, { Fragment, useContext, useEffect, useState } from 'react'
import img from '../../../res/images/article-cover.jpg'
import Footer from '../../Footer'
import Header from '../../Header'
import {QuestionGlobalContext } from '../../../context/questionContext/QuestionState'
import { ReplyGlobalContext } from '../../../context/replyContext/ReplyState'
import Reply from '../replies/Reply'

const QuestionPage = ({ match }) => {
    const context = useContext(QuestionGlobalContext)
    const context2 = useContext(ReplyGlobalContext)

    const { GetQuestionById, question } = context
    const {AddReply,GetRepliesForQuestion,replies} = context2
    
    
    useEffect(() => {
        GetQuestionById(match.params.id)
        GetRepliesForQuestion(match.params.id)    
    }, [])

    const [ReplyState, setReplyState] = useState({text:'',date:null,questionId:'',authorId:''})

    const onChangeHandler = (e) => {
        setReplyState({...ReplyState,[e.target.name]:e.target.value})
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setReplyState({
            ...ReplyState, date: Date.now()
            // ,author:''
        })
        AddReply(ReplyState)
        document.getElementById('reply-form').reset()
    }

    while (question === null) {
        return(<h1>Loading</h1>)
    }
    
    
    return (
        <Fragment>
            <Header />
        <div>
            <h2>{question.data.subject}</h2>
            <p>{question.data.date},{question.data.views}</p>
            <div className="article-img">
                <img src={img} alt="article image" width="100%" height="20%"/>
            </div>
            <br />
            <div>
                {question.data.text}
            </div>
            <br />
            </div>
            <div>
                <form id='reply-form' onSubmit={onSubmitHandler}>
                    <br/>
                    <textarea
                        name="text"
                        cols="30"
                        rows="10"
                        required
                        onChange={onChangeHandler}>
                    </textarea>
                    <button>Reply</button>
                </form>    
            </div>
            {replies.map(reply => {
                return <Reply />
            })}
            <Footer/>
        </Fragment>
    )
}

export default QuestionPage
