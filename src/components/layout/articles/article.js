import React, { Fragment, useEffect } from 'react'
import image from '../../../res/images/default-user-image.jpg'
import cover from '../../../res/images/article-cover.jpg'
import { Link, useHistory } from 'react-router-dom'

const Article = ({ subject, text, date, views, id }) => {
        text = text.slice(0,150)
    return (
        <Fragment> 
            <div className="article-main-container">
                <h6>{date} 📅 </h6>
                <br />
                {/* <img src={cover} alt="cover image" className="cover-image" width="100%" height="50%"/> */}
                <br/>
                <h3>{subject}</h3>
                <br/>
                <p> {text} <span style={{ fontWeight: 'bolder' }}> check the full Article Below..</span></p>
                <br/>
                <button className="read-more"><Link to={`/article/${id}`}>Read More..</Link></button>
                <p>{views}👀 </p> 
            </div>
        </Fragment>
    )
}

export default Article

