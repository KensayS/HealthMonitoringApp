import React, { useState } from 'react';
import '../pages/form.css';
import { Link } from "react-router-dom";

const Profile = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    // };

    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);
    // };

    return (
        <div className="fitbit-analyzer-container">
            <Header />
            <MainSection />
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
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            <Link className="nav-link active" aria-current="page" to="/goals">Goals</Link>
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

const MainSection = () => {
    return (
        <div className="sign-in-container container-fluid" id="white-back">
            <div className="content" >
                <form>
                    <div className="form-title">
                        <h1>Edit Profile</h1>
                    </div>
                    <div className="input-cluster">
                        <label for="email" className="form-label">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            class="form-control"
                            placeholder="Enter your email"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        ></input>
                    </div>
                    <div className="input-cluster">
                        <label for="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            class="form-control"
                            placeholder="Enter your password"
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </div>
                    <div className="container">
                        <div className="row button-prop text-center">
                            <div className="col col-md-6 col-12 d-grid mt-3">
                                <button type="submit" className="btn btn-outline-primary shadow">Cancel</button>
                            </div>
                            <div className="col col-md-6 col-12 d-grid mt-3">
                                <button type="submit" className="btn btn-primary shadow" >Save</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;