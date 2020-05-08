import React from 'react';

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
        <div className="post">
            <h3>Title: {props.post.title}</h3>
            <button onClick={() => props.handleEdit(props.post)}> Edit</button>
            <button onClick={() => handleDel(props.post.id)}> Delete</button>
            <p>{props.post.content}</p>
        </div>

    )
}

export default PostCard;
