import React from 'react'
import PostCard from '../Components/PostCard'

export default class PostContainer extends React.Component{
    render(){
        return(
            
            this.props.posts.map(post => <PostCard key={post.id} post={post} deletePost={this.props.deletePost}/>)
        )
    }
}