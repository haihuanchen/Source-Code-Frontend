import React from 'react'
import PostContainer from '../Container/PostContainer.js'
class LanguagesContainer extends React.Component{
    render(){
        console.log("test2 props were passed properly", this.props.languages)
        return(
            <div>
                {this.props.languages.map(language => {
                    console.log(language.posts)
                    return <div>
                             <h1> {language.title}</h1>
                            <p> {language.description}</p>
                            <p>More Resourses: {language.resourses}</p>
                            key={language.id}
                            <PostContainer posts={language.posts} />
                        </div>
                })}
            </div>
        )
    }
}
export default LanguagesContainer