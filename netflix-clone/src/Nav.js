import React from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow]

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });

        return () => {
            window.removeEventListener("scroll");
        }
        
    }, []);
    return (
        <div className="nav">
            <img
            className="nav__logo"
            src="https://pmcvariety.files.wordpress.com/2020/05/netflix-logo.png?w=600"
            alt="Netflix Logo"
            />


            <img
            className="nav__avatar"
            src="httpsmcvariety.files.wordpress.com/2020/05/netflix-logo.png?w=600"
            alt=""
            />

            
        </div>
    )
}

export default Nav;
