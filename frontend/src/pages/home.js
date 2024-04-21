import React from 'react';
import './main.css';
import { Link } from "react-router-dom";
import BackendDemo from './BackendDemo';


const Home = () => {
    return (
        <div className="fitbit-analyzer-container">
            <Header />
            <MainSection />
            <BackendDemo />
        </div>
    );
};

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-custom py-3 fixed-top" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Fitbit</a>
                    <button className=" navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" aria-current="Home" href="#">Home</Link>
                            <Link className="nav-link active" aria-current="Profile" href="#">Profile</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header >
    );
};

const MainSection = () => {
    return (
        <main className="">
            <div className="main-content" >
                <div className="row align-items-center text-center">
                    <div className="col-12">
                        <h1 className="welcome-title">Homepage</h1>
                    </div>
                    <div className="col-12">
                        <p className="welcome-text">Welcome to your personal homepage! Here you can access your personalized health graphs and charts, taken from your Fitbit Inspire 2!</p>
                    </div>
                </div>
            </div>
            <div className="fitbit-surround"></div>
        </main>

    );
};

export default Home;