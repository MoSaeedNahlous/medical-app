import React from 'react'

const Reply = ({text,date,author}) => {
    return (
        <div className="reply-body">
            <div>
                <p>{text}</p>
            </div>
            <div>
                <h6>{date}</h6>
            </div>
            
            
        </div>
    )
}

export default Reply
