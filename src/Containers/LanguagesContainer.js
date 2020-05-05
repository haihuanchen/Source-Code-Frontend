import React, { Fragment } from 'react'

class LanguagesContainer extends React.Component{
    // state = {
    //     toggled: false,
    //     targetedLang: ''
    // }

    // handleChange = (e)=>{
    //     this.setState({toggled: !this.state.toggled, targetedLang: e.target.value})
    // }
    render(){
        // console.log("test2", this.state.targetedLang)
        return(
            <Fragment>
                <label>
                Pick your language:
                <select>
                    <option value="JavaScript" >JavaScript</option>
                    <option value="Ruby">Ruby</option>
                </select>
                </label>
                {this.props.languages.map(language => {
                    return <Fragment key={language.id}>
                            <h1 value={language.id} onClick={()=>this.props.filterPosts(language.id)}> {language.title}</h1><br/>
                            <p> {language.description}</p>
                            <a href={language.resources}>More Resourses</a>
                        </Fragment>
                })}
            </Fragment>
        )
    }
}
export default LanguagesContainer