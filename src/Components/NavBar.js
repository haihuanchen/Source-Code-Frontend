import React, {Fragment} from 'react'

export default class NavBar extends React.Component{
    render(){
        return(
            <Fragment>
                <input placeholder="Enter title to search..." onChange={this.props.handleSearchChange} value={this.props.search}/>
                <div >Login/Create Account</div>
            </Fragment>

        )
    }
}