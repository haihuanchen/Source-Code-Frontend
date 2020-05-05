import React from 'react'

export default class PostForm extends React.Component{
    state = {
       title: '',
       content: ''
    }

    handleChange = (event)=>{
        this.setState({ [event.target.name]: event.target.value})
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        let {title, content} = this.state;
        
    
            fetch('http://localhost:3000/posts',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                   title: title,
                   content: content
                    
                })
            })
            .then(resp => resp.json())
            .then(newPost => this.props.createPost(newPost))
            this.setState({title: '', content: ''})
        }
      
    

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Create New Post</h1>
                <label>
                    Name:
                    <input name="title" type="text" value={this.state.title} onChange={this.handleChange}/>
                </label>
                <label>
                    Username:
                    <input name="content" type="text-area" value={this.state.content} onChange={this.handleChange}/>
                </label>
            
               
            </form>
        )
    }
}