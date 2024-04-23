import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './main.css';
import '../components/navbar.css'
import firebaseConfig from "../firebaseBackend/firebaseConfig";
import { initializeApp } from "firebase/app";
import BackendDemo from './BackendDemo';
import Nav from '../components/navbar'


const Home = () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const [accountType, setAccountType] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAccountType(user.displayName); // assuming displayName is used to store account type
            }
        });

        return () => unsubscribe();
    }, [auth]);


    return (
        <div className="fitbit-analyzer-container">
            <Nav />
            {accountType === 'Coach' ? <CoachHome /> : <UserHome />}
            <BackendDemo />
        </div>
    );
};

const UserHome = () => {
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

const CoachHome = () => {
    return (
        <main className="">
            <div className="main-content" >
                <div className="row align-items-center text-center">
                    <div className="col-12">
                        <h1 className="welcome-title">Homepage</h1>
                    </div>
                    <div className="col-12">
                        <p className="welcome-text">Welcome, Coach! This is your coaching homepage. Here you can access your clients' personalized health graphs and charts, taken from their Fitbit Inspire 2!</p>
                    </div>
                </div>
            </div>
            <div className="fitbit-surround"></div>
        </main>

    );
};



export default Home;