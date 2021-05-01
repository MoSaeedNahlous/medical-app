import React, { Fragment, useContext, useEffect, useState } from 'react'
import img from '../../../res/images/article-cover.jpg'
import Footer from '../../Footer'
import Header from '../../Header'
import {QuestionGlobalContext } from '../../../context/questionContext/QuestionState'
import { ReplyGlobalContext } from '../../../context/replyContext/ReplyState'
import Reply from '../replies/Reply'
import { UserGlobalContext } from '../../../context/userContext/UserState'
import { useHistory } from 'react-router'

const QuestionPage = ({ match }) => {
    const context = useContext(QuestionGlobalContext)
    const context2 = useContext(ReplyGlobalContext)
    const context3 = useContext(UserGlobalContext)

    const { GetQuestionById, question,incViews,DeleteQuestionById } = context
    const { AddReply, GetRepliesForQuestion, replies } = context2

    const history = useHistory()

    
    
    useEffect(() => {
        GetQuestionById(match.params.id)
        incViews(match.params.id)
        GetRepliesForQuestion(match.params.id)
        context3.LoadUser()
    }, [])

    useEffect(() => {
        if (context3.user !== null) {
            var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
            today = mm + '/' + dd + '/' + yyyy;
            setReplyState({
            ...ReplyState,
            author: context3.user.id,
            date: today,
            question:match.params.id
         })
            
        }
    }, [context3.user])

    const [ReplyState, setReplyState] = useState({
        text: '',
        date: '',
        question: '',
        author: "",
    })

    const onChangeText = (e) => {
        setReplyState({...ReplyState,text:e.target.value})
    }
    const onDelete = () => {
        DeleteQuestionById(match.params.id)
        alert("Deleted Successfully!")
        history.push('/questions')
    }
    

     const onSubmitHandler = (e) => {
        e.preventDefault(); 
        AddReply(ReplyState)
        console.log(ReplyState);
        document.getElementById('reply-form').reset()
        alert("Your replied Successfully!!")
     }

    while (question === null) {
        return(<h1>Loading</h1>)
    }
   
  
    
    
    return (
        <Fragment>
            <Header />
            <br/>
            <br/>
        <div>
                <h2>{question.subject}</h2>
                <br/>
            <p style={{color:'grey'}}>{question.date} , <i className="fa fa-eye" aria-hidden="true">{question.views}</i> </p>
            {/* <div className="article-img">
                <img src={img} alt="article image" width="100%" height="20%"/>
            </div> */}
            <br />
            <div className="question-text-block">
                {question.text}
            </div>
            <br />
            </div>
            <br/>
            <h2>Replies</h2>
           {context3.user === null || !context3.user.isDoctor?(null):( 
            <div>
                <form id='reply-form' onSubmit={onSubmitHandler}>
                    <br/>
                    <textarea
                        placeholder=" your Reply ...."
                        cols="50"
                        rows="3"
                        required
                        onChange={onChangeText}>
                    </textarea>
                    <br />
                    <div>
                        <button>Reply</button>
                    </div>
                </form>    
            </div>
            )}
            <br/>
            <div className="replies-block" data-aos="fade-up" data-aos-duration="3000">
                
                <br />
                {replies === null ? (
                    <h2> "No replies :-( "</h2>
                ): (
                    <div className="replies-block">
                    {replies.map((reply) => {
                        return(<Reply key={reply.id}
                            text={reply.text}
                            date={reply.date}
                            authorId={reply.author}
                        />)
                        
                    })}
            </div>   
                )}
                
            </div>
            {( context3.isAuth && context3.user.id === question.author) ?
                (<button onClick={onDelete}>Delete</button>) :
                (null)}

                <br/>
            <br/>
            <br/>
            <br/>
            <Footer/>
        </Fragment>
    )
}

export default QuestionPage
