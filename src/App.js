import React from 'react';
import './App.css';
import MainContainer from './Containers/MainContainer';
import CreateAccount from './Components/CreateAccount';
import NavBar from './Components/NavBar';
import { Route, Switch } from 'react-router-dom';

const LANGUAGESAPI  = "http://localhost:3000/languages"
const POSTAPI = "http://localhost:3000/posts"
const UserAPI = 'http://localhost:3000/users'

export default class App extends React.Component{
  state = {
    userIndex: [],
    languageIndex: [],
    postIndex: [],
    targetedposts: [],
    targetedLanguage: null
  }

  componentDidMount(){
    fetch(UserAPI)
    .then(res=>res.json())
    .then(data=> this.setState({userIndex: data}))

    fetch(LANGUAGESAPI)
        .then(resp => resp.json())
        .then(data => this.setState({languageIndex: data}))

    fetch(POSTAPI)
    .then(resp => resp.json())
    .then(data => this.setState({postIndex: data}))
  }

  filterPosts = (languageId)=>{
    let newPosts = this.state.postIndex.filter(post => post['language_id'] === languageId)
    this.setState({targetedposts: newPosts})
  }

  createUser = (newUser)=>{
    this.setState({userIndex: [...this.state.userIndex, newUser]})
  }

  handleLangChange = (event) => {
    this.setState({
        targetedLanguage: event.target.value
    })
}

  render(){
    const {languageIndex, targetedposts} = this.state
    return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome to Source Code </h1>
        <NavBar/>
        <Switch>
          <Route exact path="/home" render={()=> 
            <MainContainer 
              filterPosts={this.filterPosts} 
              languages={languageIndex} 
              posts={targetedposts ? targetedposts : null} 
              handleLangChange={this.handleLangChange}
              targetedLanguage={this.state.targetedLanguage}
            />} 
          />
          <Route path='/signup' render={()=> <CreateAccount createUser={this.createUser} />} />
          <Route path='/home/easteregg' render={()=> <div>Easter Egg <span role='img' aria-label='egg'>🥚</span></div>}/>
        </Switch>
        {/* <CreateAccount createUser={this.createUser}/>
        <MainContainer 
          filterPosts={this.filterPosts}
          languages={languageIndex}
          posts={targetedposts ? targetedposts : null}
        /> */}
      </header>
    </div>
  );

    }
}
