import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../../res/images/default-user-image.jpg'

const Question = ({text,date,id,views,subject}) => {
    return (
        <div className="question-main-container">
            <h5>{subject}</h5>
            <br />
            <br/>
            <p>{text}</p>
            <div className="question-answer-container">
                <fieldset style={{padding:'1%',borderRadius:'20px'}}>
                    <legend style={{ float: 'left' }}>this question answered by:</legend>
                    <br/>
                    <img src={img} alt="doctor pic" className="answer-image" width="30px" height="30px" />
                    <h4 className='doctor-name'>doctor name</h4>
                    <br/>
                    <h6 className='doctor-domain'>doctor domain</h6>
                </fieldset>
            </div>
            <div className="question-footer">
                <h6>{date}</h6>
                <i className="fa fa-eye" aria-hidden="true">{views}</i>
                <button><Link to={`/question/${id}`}>see all details</Link></button>
                
            </div>
        </div>
    )
}

export default Question
