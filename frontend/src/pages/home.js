import React from 'react';
import './main.css';
import '../components/navbar.css'
import BackendDemo from './BackendDemo';
import Nav from '../components/navbar'


const Home = () => {
    return (
        <div className="fitbit-analyzer-container">
            <Nav />
            <MainSection />
            <BackendDemo />
        </div>
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