import React from 'react'
import { Link } from 'react-router-dom'

const Question = ({ text, date, id, views, subject }) => {
    text = text.slice(0,150)
    return (
        <div className="question-main-container">
            <h5>{subject}</h5>
            <br />
            <br/>
            <p>{text}   <span style={{fontWeight:'bolder'}}> check the full Question Below..</span></p>
            <div className="question-footer">
                <h6>{date} 📅 </h6>
                <p >{views} 👀 </p>
                <button className="read-more"><Link to={`/question/${id}`}>see all details</Link></button>
                
            </div>
        </div>
    )
}

export default Question
