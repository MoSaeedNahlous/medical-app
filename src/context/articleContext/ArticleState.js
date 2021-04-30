import React, { createContext, useReducer } from 'react'
import ArticleReducer from './ArticleReducer'
import axios from 'axios'


//متحولات نريد اتاحتها من قبل السياق الخاص بالمقالات
const intialState = { article: null,articles:null,articleCounter:null,currentArticle:null }
// تصريح السياق
export const ArticleGlobalContext = createContext(intialState);
// تصريح مزود السياق و التي وظيفته جعل المتحولات في الأعلى متاحة لكل المشروع
export const ArticleGlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ArticleReducer, intialState)

// الميثودات التي ستتاح أيضا لكل المشروع
    const AddArticle = (articleData) => {
        axios.post('/api/article/save', articleData, {
            headers: {
            "x-access-token":localStorage.getItem('jwtToken')
            }
        }
        ).then((res) => {
            // طريقة التفاعل بين القيمة المرجعة للميثود وبين السياق
            // بمساعدة ملف Reducer
            dispatch({
                type: 'ADD_ARTICLE',
                payload:res.data
            })
        }).catch((err) => {
            throw err
        })
    }

    const incViews = (id) => {
        axios.get(`/api/article/incViews/${id}`)
    }

    const GetAllArticles = () => {
        axios.get('/api/article/findAll').then((res) => {
            dispatch({
                type: 'GET_ALL_ARTICLES',
                //check if payload is res or res.data
                payload:res.data
                
            })
        }).catch((err) => {
            throw err
        })
    }

    const GetArticleById = (articleId) => {
        axios.get(`/api/article/findById/${articleId}`).then((res) => {
            console.log(res.data);
            dispatch({
                type: 'GET_ARTICLE_BY_ID',
                payload:res.data
            })
        }).catch((err) => {
            throw err
        })
    }

    const CountArticles = () => {
        axios.get('/api/article/count').then(res => {
            dispatch({
                type: 'GET_ARTICLES_COUNT',
                payload:res.data
            })
        }).catch((err) => {
            throw err
        })
    }

    const DeleteArticleById = (articleId) => {
        axios.delete(`/api/article/deleteById/${articleId}`, {
            headers: {
            "x-access-token":localStorage.getItem('jwtToken')
            }
        }).then((res) => {
            dispatch({
                type: 'DELETE_ARTICLE_BY_ID',
                payload:res.data
            })
        }).catch((err) => {
            throw err
        })
    }


    const DeleteAllArticles = () => {
        axios.delete(`/api/article/deleteAll`).then((res) => {
            dispatch({
                type: 'DELETE_ALL_ARTICLES',
                payload:res.data
            })
        }).catch((err) => {
            throw err
        })
    }

    const UpdateArticleById =(articleId,article)=>{
        axios.put(`/api/article/update/${articleId}`,article).then(res=>{
            dispatch({
                type: 'UPDATE_ARTICLE_BY_ID',
                
            })
        }).catch((err) => {
            throw err
        })

    }

    const SetCurrentArticle =(article)=>{
        dispatch({
            type: 'SET_CURRENT_ARTICLE',
            payload:article
        })
    }

    const ClearCurrentArticle =()=>{
        dispatch({
            type: 'CLEAR_CURRENT_ARTICLE',
            
        })
    }

    



    return (<ArticleGlobalContext.Provider
        value={{
            article: state.article,
            articles: state.articles,
            articlesCounter: state.articlesCounter,
            currentArticle:state.currentArticle,
            AddArticle,
            GetAllArticles,
            GetArticleById,
            CountArticles,
            DeleteAllArticles,
            DeleteArticleById,
            incViews,
            SetCurrentArticle,
            ClearCurrentArticle,
            UpdateArticleById
        }}
    >
        {children}
            </ArticleGlobalContext.Provider>)


}


