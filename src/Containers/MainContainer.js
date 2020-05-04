import React from 'react'
import LanguagesContainer from './LanguagesContainer'
import PostContainer from './PostContainer'
const LANGUAGESAPI  = "http://localhost:3000/languages"
const POSTAPI = "http://localhost:3000/posts"

class MainContainer extends React.Component{
    state = {
        languageIndex: [],
        postIndex: [],
        targetedposts: [] //posts 
    }
    componentDidMount(){
        fetch(LANGUAGESAPI)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                languageIndex: data
            })
        })
        fetch(POSTAPI)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                postIndex: data
            })
        })
    }
    
    filterPosts = (languageId)=>{
        let newPosts = this.state.postIndex.filter(post => post['language_id'] === languageId)
        // console.log(newPosts)
        this.setState({targetedposts: newPosts})
    }


    render(){
        // console.log("test1", this.state.targetedLanguage)
        return(
            <div>
                <h1> Source Code </h1>
                <LanguagesContainer 
                    languages={this.state.languageIndex} 
                    filterPosts={this.filterPosts}
                />
                <PostContainer posts={this.state.targetedposts ? this.state.targetedposts : null}/>
            </div>
        )
    }
}
export default MainContainer