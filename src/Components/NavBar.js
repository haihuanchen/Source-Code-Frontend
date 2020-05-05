import React, {Fragment} from 'react'
import {Link, NavLink} from 'react-router-dom'

export default class NavBar extends React.Component{
    render(){
        const {handleSearchChange, search} = this.props
        return(
            <Fragment>
                <Link to="/home">Home <span role='img' aria-label='book'>📖</span></Link>
                <input placeholder="Enter Article Titles to search." onChange={handleSearchChange} value={search}/>
                <NavLink to="/signup">Sign Up</NavLink>
                <Link to="/home/easteregg">Easter Egg</Link>
            </Fragment>

        )
    }
}