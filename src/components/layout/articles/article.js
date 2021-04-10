import React, { Fragment } from 'react'
import image from '../../../res/images/default-user-image.jpg'
import cover from '../../../res/images/article-cover.jpg'

const Article = ({subject,text,date,views}) => {
    return (
        <Fragment>
            <div className="article-main-container">
                <img src={image} className="doctor-image" alt="user picture" width="40px" height="40px" />
                <h4 className="publisher-name">publisher name here</h4>
                <br />
                <h6>{date}</h6>
                <br />
                <img src={cover} alt="cover image" className="cover-image" width="100%" height="50%"/>
                <br/>
                <h3>{subject}</h3>
                <p> {text}</p>
                <button className="read-more">Read More..</button>
                <i className="fa fa-eye views" aria-hidden="true">{views}</i>
            </div>
        </Fragment>
    )
}

export default Article

