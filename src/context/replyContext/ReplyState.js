import React, { createContext, useReducer } from 'react'
import ReplyReducer from './ReplyReducer'
import axios from 'axios'



const intialState = { replt: null,replies:null,replyCounter:null }

export const ReplyGlobalContext = createContext(intialState);

export const ReplyGlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ReplyReducer, intialState)

    const AddReply = (replyData) => {
        axios.post('https://medicasvu.herokuapp.com/api/reply/save', replyData, {
            headers: {
                "x-access-token":localStorage.getItem('jwtToken')
            }
        }).then((res) => {
            dispatch({
                type: 'ADD_REPLY',
                //check if payload is res or res.data
                payload:res.data
                
            })
        }).catch((err) => {
            throw err
        })
    }

    const GetAllReplies = () => {
        axios.get('https://medicasvu.herokuapp.com/api/reply/findAll').then((res) => {
            dispatch({
                type: 'GET_ALL_REPLIES',
                payload:res.data
                
            })
        }).catch((err) => {
            throw err
        })
    }

    const GetReplyById = (replyId) => {
        axios.get(`https://medicasvu.herokuapp.com/api/reply/findById/${replyId}`).then((res) => {
            dispatch({
                type: 'GET_REPLY_BY_ID',
                //check if payload is res or res.data
                payload:res
            })
        }).catch((err) => {
            throw err
        })
    }

    const GetRepliesForQuestion = (questionId) => {
        axios.get('https://medicasvu.herokuapp.com/api/reply/findAll').then((res) => {
            dispatch({
                type: "GET_REPLIES_FOR_QUESTION",
                payload: { data:res.data,id:questionId }
            })
        }).catch((err) => {
            throw err
        })
    }
        

    const CountReplies = () => {
        axios.get('https://medicasvu.herokuapp.com/api/reply/count').then(res => {
            dispatch({
                type: 'GET_REPLIES_COUNT',
                //check if payload is res or res.data
                payload:res
            })
        }).catch((err) => {
            throw err
        })
    }

    const DeleteReplyById = (replyId) => {
        axios.delete(`https://medicasvu.herokuapp.com/api/reply/deleteById/${replyId}`).then((res) => {
            dispatch({
                type: 'DELETE_REPLY_BY_ID',
                //check if payload is res or res.data
                payload:res
            })
        }).catch((err) => {
            throw err
        })
    }


    const DeleteAllReplies = () => {
        axios.delete(`https://medicasvu.herokuapp.com/api/reply/deleteAll`).then((res) => {
            dispatch({
                type: 'DELETE_ALL_REPLIES',
                //check if payload is res or res.data
                payload:res
            })
        }).catch((err) => {
            throw err
        })
    }

    



    return (<ReplyGlobalContext.Provider
        value={{
            reply: state.reply,
            replies: state.replies,
            repliesCounter: state.repliesCounter,
            

            AddReply,
            GetAllReplies,
            GetReplyById,
            CountReplies,
            DeleteAllReplies,
            DeleteReplyById,
            GetRepliesForQuestion
        }}
    >
        {children}
            </ReplyGlobalContext.Provider>)


}


