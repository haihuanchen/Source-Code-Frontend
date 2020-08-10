import React from 'react';
import { withRouter } from "react-router-dom";

class PostForm extends React.Component{
    state = {
       title: this.props.currentPost.title? this.props.currentPost.title: '',
       content: this.props.currentPost.content? this.props.currentPost.content: ''
    }

    handleChange = (event)=>{
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let {title, content} = this.state;
        let {langId, userId} = this.props;
        if(this.props.currentPost.title){
            fetch(`http://localhost:3000/posts/${this.props.currentPost.id}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    content
                })
            })
            .then(resp => resp.json())
            .then(editPost => this.props.updatePost(editPost))
            this.setState({title: '', content: ''})
            this.props.history.push('/home')
        }else{
            fetch('http://localhost:3000/posts',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    content,
                    language_id: langId,
                    user_id: userId
                })
            })
            .then(resp => resp.json())
            .then(newPost => this.props.createPost(newPost))
            this.setState({title: '', content: ''})
            this.props.history.push('/home')
        }
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>{this.props.currentPost.title? "Edit this Post" : "Create New Post"}</h1>
                <label>
                    Title:
                    <br/>
                    <input name="title" type="text" value={this.state.title} onChange={this.handleChange}/>
                </label>
                <br/>
                <br/>
                <label>
                    Content:
                    <br/>
                    <textarea id="content-area" name="content" value={this.state.content} onChange={this.handleChange}/>
                </label>
                <br/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>

        )
    }
}
export default withRouter(PostForm)
