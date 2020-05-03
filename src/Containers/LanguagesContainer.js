import React from 'react'
import PostContainer from './PostContainer.js'
class LanguagesContainer extends React.Component{
    // filterPosts = (languageId)=>{
    //     this.props.posts.filter(post => {post['language_id'] === languageId})
    // }

    render(){
        // console.log("test2 props were passed properly", this.props.languages)
        return(
            <div>
                {this.props.languages.map(language => {
                    return <div>
                             <h1 onClick={this.props.handleLanguage}> {language.title}</h1>
                            <p> {language.description}</p>
                            <p>More Resourses: {language.resources}</p>
                            {/* key={language.id} */}
                            {/* <PostContainer posts={language.posts} /> */}
                        </div>
                })}
            </div>
        )
    }
}
export default LanguagesContainer