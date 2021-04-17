import React, { Fragment } from 'react'
import img from '../../res/images/404.jpg'


const NotFound = () => {
    return (
        <Fragment style={{width:'100%', height:"100%"}}>
            <img src={img} alt="404" width="100%" height="100%"/>
        </Fragment>
    ) 
}

export default NotFound
