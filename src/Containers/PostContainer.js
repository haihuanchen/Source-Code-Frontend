import React from 'react'
import PostCard from '../Componenets/PostCard'

export default class PostContainer extends React.Component{
    render(){
        return(
            this.props.posts.map(post => <PostCard key={post.id} post={post}/>)
        )
    }
}