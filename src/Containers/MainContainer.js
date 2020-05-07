import React from 'react'
import LanguagesContainer from './LanguagesContainer'
import PostContainer from './PostContainer'
import LanguageDetails from '../Components/LanguageDetails'

class MainContainer extends React.Component{
    render(){
        const {languages, filterPosts, posts, handleLangChange, targetedLanguage, searchArticles} = this.props
        let target = languages.find(language => language.id === parseInt(targetedLanguage))
        return(
            <div>
                <LanguagesContainer 
                    languages={languages} 
                    handleLangChange={handleLangChange}
                />
                <LanguageDetails language={target} filterPosts={filterPosts}/> 
                <PostContainer 
                    posts={searchArticles? searchArticles : posts} 
                    deletePost={this.props.deletePost}
                    handleEdit={this.props.handleEdit}
                />
            </div>
        )
    }
}
export default MainContainer