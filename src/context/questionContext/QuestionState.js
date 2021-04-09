import React, { createContext, useReducer } from 'react'
import QuestionReducer from './QuestionReducer'
import axios from 'axios'



const intialState = { question: null,questions:null,questionsCounter:null }

export const QuestionGlobalContext = createContext(intialState);

export const QuestionGlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(QuestionReducer, intialState)

    const AddQuestion = (questionData) => {
        axios.post('/api/question/save', questionData).then((res) => {
            console.log(res);
            dispatch({
                type: 'ADD_QUESTION',
                //check if payload is res or res.data
                payload:res
                
            })
        }).catch((err) => {
            throw err
        })
    }

    const GetAllQuestions = () => {
        axios.get('/api/question/findAll').then((res) => {
            console.log(res);
            dispatch({
                type: 'GET_ALL_QUESTIONS',
                //check if payload is res or res.data
                payload:res
                
            })
        }).catch((err) => {
            throw err
        })
    }

    const GetQuestionById = (questionId) => {
        axios.get(`/api/question/findById/${questionId}`).then((res) => {
            dispatch({
                type: 'GET_QUESTION_BY_ID',
                //check if payload is res or res.data
                payload:res
            })
        }).catch((err) => {
            throw err
        })
    }

    const CountQuestions = () => {
        axios.get('/api/question/count').then(res => {
            dispatch({
                type: 'GET_QUESTIONS_COUNT',
                //check if payload is res or res.data
                payload:res
            })
        }).catch((err) => {
            throw err
        })
    }

    const DeleteQuestionById = (questionId) => {
        axios.delete(`/api/question/deleteById/${questionId}`).then((res) => {
            dispatch({
                type: 'DELETE_QUESTION_BY_ID',
                //check if payload is res or res.data
                payload:res
            })
        }).catch((err) => {
            throw err
        })
    }


    const DeleteAllQuestions = () => {
        axios.delete(`/api/question/deleteAll`).then((res) => {
            dispatch({
                type: 'DELETE_ALL_QUESTIONS',
                //check if payload is res or res.data
                payload:res
            })
        }).catch((err) => {
            throw err
        })
    }

    



    return (<QuestionGlobalContext.Provider
        value={{
            question: state.question,
            questions: state.questions,
            questionsCounter: state.questionsCounter,
            

            AddQuestion,
            GetAllQuestions,
            GetQuestionById,
            CountQuestions,
            DeleteAllQuestions,
            DeleteQuestionById
        }}
    >
        {children}
            </QuestionGlobalContext.Provider>)


}


