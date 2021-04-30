import React, { useContext, useEffect, useState } from 'react'
import { QuestionGlobalContext } from '../../../context/questionContext/QuestionState'

const QuestionsPanel = () => {
    const context = useContext(QuestionGlobalContext)
    const {GetAllQuestions,currentQuestion,SetCurrentQuestion,ClearCurrentQuestion,DeleteQuestionById,UpdateQuestionById}=context

    const [state, setstate] = useState({subject:'',date:'',text:'',image:''})
    useEffect(() => {
        ClearCurrentQuestion()
        GetAllQuestions()
    }, [])

    useEffect(() => {
        if(currentQuestion !== null){
            setstate({date:currentQuestion.date,subject:currentQuestion.subject,text:currentQuestion.text})
            }
            else{
                setstate({subject:'',date:'',text:''})
            }
            }, [currentQuestion])

    const OnChangeHandler =(e)=>{
        setstate({...state,[e.target.name]:e.target.value})
    }

    const OnSubmitHandler=(e)=>{
        e.preventDefault();
        UpdateQuestionById(currentQuestion._id,state)
        GetAllQuestions()
        ClearCurrentQuestion()

    }
    const DeleteHandler=(id)=>{
        DeleteQuestionById(id)
        GetAllQuestions()
    }


    while(context.questions===null){
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
            {context.questions===[]?(<p>No questions..</p>):(
                context.questions.map(question=>{
                    return <tr key={question._id}>
                        <td>{question.subject}</td>
                        <td>{question.date}</td>
                        <td>{question.views}</td>
                        <td><button onClick={()=>{
                            DeleteHandler(question._id)
                        }}>❎</button><button onClick={()=>{
                            SetCurrentQuestion(question)
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

export default QuestionsPanel
