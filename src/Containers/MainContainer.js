import React from 'react'
import LanguagesContainer from './LanguagesContainer'
import PostContainer from './PostContainer'
const LANGUAGESAPI  = "http://localhost:3000/languages"
const POSTAPI = "http://localhost:3000/posts"

class MainContainer extends React.Component{
    state = {
        languageIndex: [],
        postIndex: [],
        targetedLanguage: '' //language 
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

    handleLanguage = (e)=>{
        // let lan = this.state.languageIndex.find(language => language.title === e.target.textContent)
        // console.log(lan)
        this.setState({ targetedLanguage: e.target.textContent})
    }
    
    render(){
        let selectedlanguage = this.state.languageIndex.find(language => language.title == this.state.targetedLanguage)
        console.log("test1", selectedlanguage)
        // console.log("test2", typeof(this.state.targetedLanguage))
        return(
            <div>
                <h1> Source Code </h1>
                <LanguagesContainer languages={this.state.languageIndex} handleLanguage={this.handleLanguage}/>
                <PostContainer posts={this.state.postIndex}/>
            </div>
        )
    }
}
export default MainContainer