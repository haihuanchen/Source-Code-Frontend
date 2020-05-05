import React, {Fragment} from 'react'
import {Link, NavLink} from 'react-router-dom'

export default class NavBar extends React.Component{
    render(){
        return(
            <Fragment>
                <Link to="/home">Home <span role='img' aria-label='book'>📖</span></Link>
                <input placeholder="Enter title to search..." onChange={this.props.handleSearchChange} value={this.props.search}/>
                <NavLink to="/signup">Sign Up</NavLink>
                <Link to="/home/easteregg">Easter Egg</Link>
            </Fragment>

        )
    }
}