import React from 'react';
import { withRouter } from "react-router-dom";

class PostForm extends React.Component{
    state = {
       title: '',
       content: ''
    }

    handleChange = (event)=>{
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state)
        let {title, content} = this.state;
        fetch('http://localhost:3000/posts',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                content: content,
                language_id: this.props.langId,
                user_id: this.props.userId
            })
        })
        .then(resp => resp.json())
        .then(newPost => this.props.createPost(newPost))
        this.setState({title: '', content: ''})
        this.props.history.push('/home')
    }
      
    

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Create New Post</h1>
                <label>
                    Title:
                    <input name="title" type="text" value={this.state.title} onChange={this.handleChange}/>
                </label>
                <label>
                    Content:
                    <input name="content" type="text-area" value={this.state.content} onChange={this.handleChange}/>
                </label>
                <input type="submit"/>   
            </form>
        )
    }
}
export default withRouter(PostForm)