import React from 'react'

export default class CreateAccount extends React.Component{
    state = {
        name: '',
        username: '',
        password: '',
        confirmation: '',
        email: '',
    }

    handleChange = (e)=>{
        console.log([e.target.name], e.target.value)
        this.setState({ [e.target.name]: e.target.value})
        
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state)
        let {password, confirmation} = this.state;
        
        if(password === confirmation){
            fetch('http://localhost:3000/users',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Accept":  'application/json'
                },
                body: JSON.stringify({
                    name: this.state.name, 
                    username: this.state.username, 
                    password: this.state.password, 
                    email: this.state.email
                })
            })
            this.setState({name: '', username: '', password: '', confirmation: '', email: ''})
        }
        else{
            alert('Password and Confirmation do not Match!')
        }
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Create Account</h1>
                <label>
                    Name:
                    <input name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                </label>
                <label>
                    Username:
                    <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
                </label>
                <label>
                    Password:
                    <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                </label>
                <label>
                    Confirm Password:
                    <input name="confirmation" type="password" value={this.state.confirmation} onChange={this.handleChange}/>
                </label>
                <label>
                    Email:
                    <input name="email" type="text" value={this.state.email} onChange={this.handleChange}/>
                </label>
                <input type="submit" />
            </form>
        )
    }
}