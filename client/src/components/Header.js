import React from 'react';
import { Link } from 'react-router-dom';
 
const Header = () => {
    const showNavigation = () => (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">airbnb</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/signup">SignUp </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/signin">SignIn</Link>
                </li>
                </ul>
            </div>
        </nav>
    );

    return <header id='header'>{showNavigation()}</header>
};

export default Header;