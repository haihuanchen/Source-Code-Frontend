import React from 'react'
import LanguagesContainer from './LanguagesContainer'
import PostContainer from './PostContainer'
import LanguageDetails from './LanguageDetails'
const LANGUAGESAPI  = "http://localhost:3000/languages"
const POSTAPI = "http://localhost:3000/posts"

class MainContainer extends React.Component{
    state = {
        languageIndex: [],
        postIndex: [],
        targetedposts: [], //posts 
        targetedLanguage: null

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
    

    filterPosts = languageId => {
        let newPosts = this.state.postIndex.filter(post => post['language_id'] === languageId)
        this.setState({targetedposts: newPosts})
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            targetedLanguage: event.target.value
        })
    }

    render(){
        let target = this.state.languageIndex.find(language => language.id === parseInt(this.state.targetedLanguage))
        return(
            <div>
                <LanguagesContainer 
                    languages={this.state.languageIndex} 
                    filterPosts={this.filterPosts}
                    handleChange={this.handleChange}
                />
                <LanguageDetails language={target} filterPosts={this.filterPosts}/> 
                <PostContainer posts={this.state.targetedposts ? this.state.targetedposts : null}/>

            </div>
        )
    }
}
export default MainContainer