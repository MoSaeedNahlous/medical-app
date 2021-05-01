import React, { createContext, useReducer } from 'react'
import UserReducer from './UserReducer'
import axios from 'axios'



const intialState = { user: null,users:null,usersCounter:null,isAuth:false,currentUser:null }

export const UserGlobalContext = createContext(intialState);

export const UserGlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(UserReducer, intialState)

    const AddUser = (userData) => {
        axios.post('https://medicasvu.herokuapp.com/auth/register', userData).then((res) => {
            dispatch({
                type: 'ADD_USER'
            })
        }).catch((err) => {
            throw err
        })
    }

    const LoadUser = async () => {
        axios.get('https://medicasvu.herokuapp.com/auth/me',
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
        axios.post('https://medicasvu.herokuapp.com/auth/login', userData).then((res) => {
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
        axios.get('https://medicasvu.herokuapp.com/api/user/findAll', {
            headers: {
                'x-access-token': localStorage.getItem('jwtToken')
            }
        }).then((res) => {
            dispatch({
                type: 'GET_ALL_USERS',
                //check if payload is res or res.data
                payload:res.data
                
            })
        }).catch((err) => {
            throw err
        })
    }

    const GetUserById = (userId) => {
        axios.get(`https://medicasvu.herokuapp.com/api/user/findById/${userId}`).then((res) => {
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
        axios.get('https://medicasvu.herokuapp.com/api/user/count').then(res => {
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
        axios.delete(`https://medicasvu.herokuapp.com/api/user/deleteById/${userId}`,{
            headers: {
                'x-access-token': localStorage.getItem('jwtToken')
            }
        }).then((res) => {
            dispatch({
                type: 'DELETE_USER_BY_ID',
                //check if payload is res or res.data
                payload:res.data
            })
        }).catch((err) => {
            throw err
        })
    }


    const DeleteAllUsers = () => {
        axios.delete(`https://medicasvu.herokuapp.com/api/user/deleteAll`).then((res) => {
            dispatch({
                type: 'DELETE_ALL_USERS',
                //check if payload is res or res.data
                payload:res
            })
        }).catch((err) => {
            throw err
        })
    }

    
    const SetCurrentUser =(User)=>{
        dispatch({
            type: 'SET_CURRENT_USER',
            payload:User
        })
    }

    const ClearCurrentUser =()=>{
        dispatch({
            type: 'CLEAR_CURRENT_USER',
            
        })
    }

    const UpdateUserById = (userId,user) => {
        axios.put(`https://medicasvu.herokuapp.com/api/user/update/${userId}`, user).then(res => {
            
        }).catch(err => {
            
        })
    }

    



    return (<UserGlobalContext.Provider
        value={{
            user: state.user,
            users: state.users,
            usersCounter: state.usersCounter,
            isAuth:state.isAuth,
            currentUser:state.currentUser,
            

            AddUser,
            Login,
            Logout,
            LoadUser,
            GetAllUsers,
            GetUserById,
            CountUsers,
            DeleteAllUsers,
            DeleteUserById,
            SetCurrentUser,
            ClearCurrentUser,
            UpdateUserById
        }}
    >
        {children}
            </UserGlobalContext.Provider>)


}


