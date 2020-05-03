import React from 'react'
import LanguagesContainer from './LanguagesContainer'
const LANGUAGESAPI  = "http://localhost:3000/languages"
const POSTAPI = "http://localhost:6001/students"

class MainContainer extends React.Component{
state = {
    languageIndex: [],
    postIndex: []
}
componentDidMount(){
    fetch(LANGUAGESAPI)
    .then(resp => resp.json())
    .then(data => {
        this.setState({
            languageIndex: data,
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
    render(){
        console.log("test1 check fetch for languages", this.state.languageIndex)
        return(
            <div>
                <h1> Source Code </h1>
                <LanguagesContainer languages={this.state.languageIndex}/>
            </div>
        )
    }
}
export default MainContainer