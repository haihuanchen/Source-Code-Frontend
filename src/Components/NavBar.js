import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default class NavBar extends React.Component{
    render(){
        const {handleSearchChange, search, currentUser} = this.props
        return(
            <div id="navbar">
                <Link to="/home"><button>Home</button> <span role='img' aria-label='book'>📖</span></Link>
                <input placeholder="Enter Article Titles to search." onChange={handleSearchChange} value={search}/>
                <NavLink to="/signup"><button>Sign Up</button></NavLink>
                <Link to="/postform"> {currentUser && <button>Create a Post</button>} </Link>
            </div>

        )
    }
}
