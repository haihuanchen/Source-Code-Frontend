import React from 'react'
import LanguagesContainer from './LanguagesContainer'
import PostContainer from './PostContainer'
import LanguageDetails from './LanguageDetails'

class MainContainer extends React.Component{
    render(){
        const {languages, filterPosts, posts, handleLangChange, targetedLanguage} = this.props
        let target = languages.find(language => language.id === parseInt(targetedLanguage))
        return(
            <div>
                <LanguagesContainer 
                    languages={languages} 
                    handleLangChange={handleLangChange}
                />
                <LanguageDetails language={target} filterPosts={filterPosts}/> 
                <PostContainer posts={posts}/>
            </div>
        )
    }
}
export default MainContainer