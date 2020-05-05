import React, { Fragment } from 'react';

const PostCard = (props)=>{
    return(
        <Fragment>
            <h3>Title: {props.post.title}</h3>
            <p>{props.post.content}</p>
            
        </Fragment>

    )
}

export default PostCard;
