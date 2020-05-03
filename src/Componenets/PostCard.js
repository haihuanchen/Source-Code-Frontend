import React, { Fragment } from 'react';

const PostCard = (props)=>{
    return(
        <>
            <h3>Title: {props.post.title}</h3>
            <p>{props.post.content}</p>
        </>

    )
}

export default PostCard;
