import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../fitbit/credentials";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
    const location = useLocation();

    const isActiveLink = (pathname) => {
        return location.pathname !== pathname;
    };

    const auth = getAuth();
    const navigate = useNavigate();

    const logout = () => {
        // Revoking Fitbit token first
        const accessToken = localStorage.getItem('fitbitAccessToken');
        console.log(accessToken);
        localStorage.removeItem('fitbitAccessToken');

        fetch('https://api.fitbit.com/oauth2/revoke', {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `token=${accessToken}`
        }).then(response => {
            console.log('Fitbit token revoked');
            // Proceeding with Firebase logout
            signOut(auth).then(() => {
                // Sign-out successful.
                navigate('/fitbitLogout');
            }).catch((error) => {
                // Handle Firebase logout error.
                console.error('Firebase logout error:', error);
            });
        }).catch(error => {
            // Handle Fitbit revocation error
            console.error('Fitbit revocation error:', error);
        });
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
                                    <li><Link className="dropdown-item" onClick={logout}>Logout</Link></li>
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