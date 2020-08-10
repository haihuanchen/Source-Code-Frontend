import React from 'react';
import './App.css';
import MainContainer from './Containers/MainContainer';
import CreateAccount from './Components/CreateAccount';
import NavBar from './Components/NavBar';
import PostForm from './Components/PostForm'
import { Route, Switch, withRouter } from 'react-router-dom';

const LANGUAGESAPI  = "http://localhost:3000/languages"
const POSTAPI = "http://localhost:3000/posts"
const UserAPI = 'http://localhost:3000/users'

class App extends React.Component{
  state = {
    userIndex: [],
    languageIndex: [],
    postIndex: [],
    targetedposts: [],
    targetedLanguage: null, //language id
    search: '',
    currentUser: {},
    currentPost: {}
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
    this.setState({userIndex: [...this.state.userIndex, newUser], currentUser: newUser})
  }

  handleLangChange = (event) => {
    this.setState({targetedLanguage: event.target.value, targetedposts: []})
  }

  handleSearchChange = (e) => {
    this.setState({search: e.target.value})
  }

  createPost = (newPost) => {
    this.setState({postIndex: [...this.state.postIndex, newPost], targetedposts: [...this.state.targetedposts, newPost]})
  }

  deletePost = (postId) => {
    let remainPosts = this.state.postIndex.filter(post => post.id !== postId)
    let remainTarget = this.state.targetedposts.filter(post => post.id !== postId)
    this.setState({postIndex: remainPosts, targetedposts: remainTarget})
  }

  handleEdit = (post) => {
       this.setState({ currentPost: post})
       this.props.history.push('/postform')
  }

  updatePost = (editPost) => {
    let editedPosts = this.state.postIndex.map(post => post.id === editPost.id ? editPost : post)
    let editedPost = this.state.targetedposts.map(post => post.id === editPost.id ? editPost : post)
    this.setState({postIndex: editedPosts, targetedposts: editedPost, currentPost: {}})
  }

  render(){
    const {languageIndex, targetedposts, targetedLanguage, search, currentUser, currentPost} = this.state
    let searchArticles = targetedposts.filter(post=> post.title.toLowerCase().includes(search.toLowerCase()))
    return (
      <div className="App">
        <header className="App-header">

          <NavBar search={search} handleSearchChange={this.handleSearchChange} currentUser={currentUser}/>

          <h1> Welcome to Source Code {this.state.currentUser.name}</h1>

          <Switch>

            <Route exact path="/home" render={()=>
              <MainContainer
                filterPosts={this.filterPosts}
                languages={languageIndex}
                posts={targetedposts ? targetedposts : null}
                searchArticles={searchArticles}
                handleLangChange={this.handleLangChange}
                targetedLanguage={targetedLanguage}
                deletePost={this.deletePost}
                handleEdit={this.handleEdit}
              />}
            />

            <Route path='/signup' render={()=> <CreateAccount createUser={this.createUser} {...this.props} />} />

            <Route path='/postform'  render={currentUser && targetedLanguage ? ()=> <PostForm createPost={this.createPost} userId={currentUser.id} langId={targetedLanguage} currentPost={currentPost} updatePost={this.updatePost}/> : null} />

          </Switch>

        </header>

      </div>
    )

  }
}

export default withRouter(App)
