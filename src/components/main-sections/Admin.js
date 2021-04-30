import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import ArticlesPanel from '../layout/admin/ArticlesPanel'
import QuestionsPanel from '../layout/admin/QuestionsPanel'
import UsersPanel from '../layout/admin/UsersPanel'

const Admin = () => {
    return (
        <>
        <Header />
        <div className="panels-container">
            <h1>Admin Panel</h1>
            <br/>
            <br/>
            <div className="users-panel panel">
                <h3>Users Panel</h3>
                <br/>
                <UsersPanel/>
                
            </div>
            <br/>
            <div className="articles-panel panel">
            <h3>Articles Panel</h3>
                <br/>
                <ArticlesPanel/>
            </div>
            <br/>
            <div className="question-panel panel">
            <h3>Questions Panel</h3>
                <br/>
                <QuestionsPanel/>
            </div>
            </div>
            <Footer />
        </>
    )
}

export default Admin
