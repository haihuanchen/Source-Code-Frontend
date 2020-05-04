import React, { Fragment } from 'react'
import PostContainer from './PostContainer.js'
class LanguagesContainer extends React.Component{
    
    render(){
        // console.log("test2", this.props.languages)
        return(
            <Fragment>
                <label>
                Pick your language:
                <select onChange={this.props.handleLanguage}>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Ruby">Ruby</option>
                </select>
                </label>
                {this.props.languages.map(language => {
                    return <div>
                             <h1 value={language.id} > {language.title}</h1>
                            <p> {language.description}</p>
                            <p>More Resourses: {language.resources}</p>
                            {/* key={language.id} */}
                            {/* <PostContainer posts={language.posts} /> */}
                        </div>
                })}
            </Fragment>
        )
    }
}
export default LanguagesContainer