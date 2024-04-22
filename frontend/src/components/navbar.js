import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
    const location = useLocation();

    const isActiveLink = (pathname) => {
        return location.pathname !== pathname;
    };
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-custom py-3 fixed-top" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Fitbit</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className={`nav-link ${isActiveLink("/home") && "active"}`} to="/home">Home</Link>
                            <Link className={`nav-link ${isActiveLink("/goals") && "active"}`} to="/goals">Goals</Link>
                            <div className="dropdown-center nav-item dropdown">
                                <Link className={`nav-link dropdown-toggle ${isActiveLink("/profile") && "active"}`} id="move" data-bs-toggle="dropdown" to="#" role="button" aria-expanded="false">Profile</Link>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><Link to="/profile" className="dropdown-item">Edit Profile</Link></li>
                                    <li><Link to="/logout" className="dropdown-item">Logout</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;