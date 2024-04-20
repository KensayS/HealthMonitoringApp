import React, { useState } from 'react';
import '../pages/Profile.css';
import { Link } from "react-router-dom";

const Profile = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className="fitbit-analyzer-container">
            <Header />
            <div className="edit-profile-container">
                <div className="content">
                    <form>
                        <div className="form-title">
                            <h1>Edit Profile</h1>
                        </div>
                        <div className="input-cluster">
                            <label htmlFor="email" className="form-label">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleEmailChange}
                            ></input>
                        </div>
                        <div className="input-cluster">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder="Enter your password"
                                value={password}
                                onChange={handlePasswordChange}
                            ></input>
                        </div>
                        <div className="d-grid gap-2 button-prop shadow-lg">
                            <button type="submit" className="btn btn-primary">
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};


const Header = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-custom py-3 fixed-top" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Fitbit</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                            <Link className="nav-link" aria-current="page" to="#">Goals</Link>
                            <div className="dropdown-center nav-item dropdown">
                                <Link className="nav-link dropdown-toggle active" id="move" data-bs-toggle="dropdown" to="#" role="button" aria-expanded="false">Profile</Link>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><Link className="dropdown-item" to="#">Edit Profile</Link></li>
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

export default Profile;