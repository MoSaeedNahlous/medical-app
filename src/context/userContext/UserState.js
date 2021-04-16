import React, { createContext, useReducer } from 'react'
import UserReducer from './UserReducer'
import axios from 'axios'



const intialState = { user: null,users:null,usersCounter:null,isAuth:false }

export const UserGlobalContext = createContext(intialState);

export const UserGlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(UserReducer, intialState)

    const AddUser = (userData) => {
        axios.post('/auth/save', userData).then((res) => {
            dispatch({
                type: 'ADD_USER'
            })
        }).catch((err) => {
            throw err
        })
    }

    const LoadUser = async () => {
        axios.get('/auth/me',
            {
                headers: {
                    'x-access-token': localStorage.getItem('jwtToken')
                }
            }).then(res => {
                dispatch({
                    type: 'LOAD_USER',
                    payload:res.data
                })
            }).catch(err => {
                dispatch({
                    type: 'AUTH_ERROR'
                })
            })
  };

    const Login = (userData) => {
        axios.post('/auth/login', userData).then((res) => {
            dispatch({
                type: 'LOGIN_USER',               
                payload:res.data.token})
            localStorage.setItem('jwtToken', res.data.token);
            LoadUser()
        }).catch((err) => {
            if (err.response.status === 404) {
                alert("User Not available!,check the entered email..")
                dispatch({type: 'AUTH_ERROR'})
            } else if(err.response.status === 401) {
                alert("check the entered password..")
                dispatch({type: 'AUTH_ERROR'})
            }
            
        })
    }

    const Logout = () => {
        dispatch({type: 'LOGOUT_USER'})
    }

    

    const GetAllUsers = () => {
        axios.get('/api/user/findAll').then((res) => {
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
            isAuth:state.isAuth,
            

            AddUser,
            Login,
            Logout,
            LoadUser,
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


