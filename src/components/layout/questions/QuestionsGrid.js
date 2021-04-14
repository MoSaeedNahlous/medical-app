import React, { useContext, useEffect } from 'react'
import Question from './Question'
import { QuestionGlobalContext} from '../../../context/questionContext/QuestionState'


const QuestionsGrid = () => {

    const context = useContext(QuestionGlobalContext)
    const {GetAllQuestions,questions } = context

    useEffect(() => {
        GetAllQuestions()
    }, [])

    while (questions === null) {
        return (
            <h1>Loading..</h1>
        )
    }
    return (
        <div style={{paddingTop:'8%'}}>
            <h2>Questions</h2>
        <div className="questions-grid-container">
                {
                    questions === [] ? (<h2>No questions to be found..</h2>) : (
                        questions.map((question) => {
                            return (<Question key={question.id}
                                date={question.date}
                                text={question.text}
                                subject={question.subject}
                                views={question.views}
                                id={question.id}
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

export default QuestionsGrid
