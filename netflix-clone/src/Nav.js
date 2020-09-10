import React from 'react'
import './Nav.css'

function Nav() {
    return (
        <div className="nav__logo">

            <img
            className="nav__logo"
            src="https://pmcvariety.files.wordpress.com/2020/05/netflix-logo.png?w=600"
            alt="Netflix Logo"
            />

            <img
               className="nav-avatar" 
               src = "https://pbs.twimg.com/profile_images/124011999841155"
            alt="Netflix-user"
            />
        </div>
    )
}

export default Nav;
