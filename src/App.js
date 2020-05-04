import React from 'react';
import './App.css';
import MainContainer from './Containers/MainContainer';
import CreateAccount from './Components/CreateAccount';
import NavBar from './Components/NavBar';
// import { Route, Switch } from 'react-router-dom';
export default class App extends React.Component{
  state = {
    userIndex: []
  }
  componentDidMount(){
    fetch('http://localhost:3000/users')
    .then(res=>res.json())
    .then(data=> this.setState({userIndex: data}))
  }

  createUser = (newUser)=>{
    this.setState({userIndex: [...this.state.userIndex, newUser]})
  }

  render(){
    console.log(this.state.userIndex)
    return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <CreateAccount createUser={this.createUser}/>
        <MainContainer/>
      </header>
    </div>
  );

    }
}
