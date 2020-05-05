import React from 'react'
import LanguagesContainer from './LanguagesContainer'
import PostContainer from './PostContainer'


class MainContainer extends React.Component{
 
    render(){
        return(
            <div>
                <LanguagesContainer 
                    languages={this.props.languages} 
                    filterPosts={this.props.filterPosts}
                /><br/>
                <PostContainer posts={this.props.posts}/>
            </div>
        )
    }
}
export default MainContainer