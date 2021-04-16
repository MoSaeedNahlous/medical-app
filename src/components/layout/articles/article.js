import React, { Fragment, useEffect } from 'react'
import image from '../../../res/images/default-user-image.jpg'
import cover from '../../../res/images/article-cover.jpg'
import { Link, useHistory } from 'react-router-dom'

const Article = ({ subject, text, date, views, id }) => {

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
                <button className="read-more"><Link to={`/article/${id}`}>Read More..</Link></button>
                <i className="fa fa-eye views" aria-hidden="true">{views}</i>
            </div>
        </Fragment>
    )
}

export default Article

