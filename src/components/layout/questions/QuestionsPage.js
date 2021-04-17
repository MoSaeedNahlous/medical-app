import React, { Fragment, useContext, useEffect } from 'react'
import Header from '../../Header'
import { QuestionGlobalContext } from '../../../context/questionContext/QuestionState'
import Question from '../../layout/questions/Question'
import Footer from '../../Footer'
import AddQuestion from './AddQuestion'
import { UserGlobalContext } from '../../../context/userContext/UserState'
const QuestionsPage = () => {

    const context = useContext(QuestionGlobalContext)
    const context2 = useContext(UserGlobalContext)
    const {isAuth} = context2
    const { questions,GetAllQuestions } = context
    
    useEffect(() => {
        GetAllQuestions()
    }, [])

    while (questions === null) {
        return <h1>Loading..</h1>
    }
    return (
        <Fragment>
            <Header />
            <br />
            {/* <AddArticle /> */}
            <br />
            {(!isAuth)?(null):(<AddQuestion/>)}
            <br/>
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
            <Footer />
        </Fragment>
    )
}

export default QuestionsPage
