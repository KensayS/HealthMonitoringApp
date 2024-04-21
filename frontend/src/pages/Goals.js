import React from 'react';
import { Link } from "react-router-dom";
import './main.css';

const Goals = () => {
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
                    <Link className="navbar-brand" href="#">Fitbit</Link>
                    <button className=" navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                            <Link className="nav-link" aria-current="page" href="#">Goals</Link>
                            <div className="dropdown-center nav-item dropdown">
                                <Link className="nav-link dropdown-toggle active" id="move" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Profile</Link>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><Link to="/profile" className="dropdown-item">Edit Profile</Link></li>
                                    <li><Link to="/logout" className="dropdown-item">Logout</Link></li>
                                </ul>
                            </div>
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
            <div className="main-content">
                <div className= "align-items-center text-center">
                    <h1 className="welcome-title">Goals</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="/moon.png" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h2 className="card-title goal-title">Sleep Goals</h2>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="/Steps.png" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h2 className="card-title goal-title">Step Goals</h2>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="/fire.png" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h2 className="card-title goal-title">Calorie Goals</h2>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Goals;