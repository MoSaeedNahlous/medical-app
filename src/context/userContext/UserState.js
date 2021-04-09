import React, { createContext, useReducer } from 'react'
import UserReducer from './UserReducer'
import axios from 'axios'



const intialState = { user: null,users:null,usersCounter:null }

export const UserGlobalContext = createContext(intialState);

export const UserGlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(UserReducer, intialState)

    const AddUser = (userData) => {
        axios.post('/api/user/save', userData).then((res) => {
            console.log(res);
            dispatch({
                type: 'ADD_USER',
                //check if payload is res or res.data
                payload:res
                
            })
        }).catch((err) => {
            throw err
        })
    }

    const GetAllUsers = () => {
        axios.get('/api/user/findAll').then((res) => {
            console.log(res);
            dispatch({
                type: 'GET_ALL_USERS',
                //check if payload is res or res.data
                payload:res
                
            })
        }).catch((err) => {
            throw err
        })
    }

    const GetUserById = (userId) => {
        axios.get(`/api/user/findById/${userId}`).then((res) => {
            dispatch({
                type: 'GET_USER_BY_ID',
                //check if payload is res or res.data
                payload:res
            })
        }).catch((err) => {
            throw err
        })
    }

    const CountUsers = () => {
        axios.get('/api/user/count').then(res => {
            dispatch({
                type: 'GET_USERS_COUNT',
                //check if payload is res or res.data
                payload:res
            })
        }).catch((err) => {
            throw err
        })
    }

    const DeleteUserById = (userId) => {
        axios.delete(`/api/user/deleteById/${userId}`).then((res) => {
            dispatch({
                type: 'DELETE_USER_BY_ID',
                //check if payload is res or res.data
                payload:res
            })
        }).catch((err) => {
            throw err
        })
    }


    const DeleteAllUsers = () => {
        axios.delete(`/api/user/deleteAll`).then((res) => {
            dispatch({
                type: 'DELETE_ALL_USERS',
                //check if payload is res or res.data
                payload:res
            })
        }).catch((err) => {
            throw err
        })
    }

    



    return (<UserGlobalContext.Provider
        value={{
            user: state.user,
            users: state.users,
            usersCounter: state.usersCounter,
            

            AddUser,
            GetAllUsers,
            GetUserById,
            CountUsers,
            DeleteAllUsers,
            DeleteUserById
        }}
    >
        {children}
            </UserGlobalContext.Provider>)


}


