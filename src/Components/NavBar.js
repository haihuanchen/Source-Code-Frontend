import React, {Fragment} from 'react'
import {Link, NavLink} from 'react-router-dom'

export default class NavBar extends React.Component{
    render(){
        const {handleSearchChange, search} = this.props
        return(
            <Fragment>
                <Link to="/home"><button>Home</button> <span role='img' aria-label='book'>📖</span></Link>
                <input placeholder="Enter Article Titles to search." onChange={handleSearchChange} value={search}/>
                <NavLink to="/signup"><button>Sign Up</button></NavLink>
                <Link to="/home/easteregg"><button>Easter Egg</button></Link>
            </Fragment>

        )
    }
}