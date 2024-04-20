import React from 'react';
import '../pages/Goals.css';
import { Link } from "react-router-dom";
import sleep from '../moon.png';
import steps from '../steps.png';
import fire from '../fire.png';

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
                    <a className="navbar-brand" href="#">Fitbit</a>
                    <button className=" navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <div className="dropdown-center nav-item dropdown">
                                <a class="nav-link dropdown-toggle active" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Profile</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Edit Profile</a></li>
                                    <li><a class="dropdown-item" href="#">Logout</a></li>
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
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card">
                            <img src={sleep} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h2 class="card-title">Sleep Goals</h2>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={steps} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h2 class="card-title">Step Goals</h2>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={fire} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h2 class="card-title">Calorie Goals</h2>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Goals;