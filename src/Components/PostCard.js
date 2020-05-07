import React, { Fragment } from 'react';

const POSTAPI = "http://localhost:3000/posts"



const PostCard = (props)=>{

    const handleDel = (postId) => {
        fetch(`${POSTAPI}/${postId}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(delPost=> props.deletePost(delPost.id))
    }

    return(
        <Fragment>
            <h3>Title: {props.post.title}</h3>
            <button onClick={() => props.handleEdit(props.post)}> Edit</button>
            <button onClick={() => handleDel(props.post.id)}> Delete</button>
            <p>{props.post.content}</p>
        </Fragment>

    )
}

export default PostCard;
