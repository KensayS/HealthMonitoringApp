import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './main.css';
import '../components/navbar.css';
import Graph from '../components/graph';
import firebaseConfig from "../firebaseBackend/firebaseConfig";
import { initializeApp } from "firebase/app";
import BackendDemo from './BackendDemo';
import Nav from '../components/navbar';
import FitbitDataComponent from '../fitbit/FitbitDataComponent';
import { useFitbitAuth } from '../fitbit/fitbitAuth';

const Home = () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const [accountType, setAccountType] = useState(null);
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const [accountType, userName] = user.displayName.split(':'); //splits the display name into two parameters... accountType(so coach or user account type)
                // or userName, so the users' username they created at login
                setAccountType(accountType);
                setUserName(userName);
            }
        });

        return () => unsubscribe();
    }, [auth]);


    return (
        <div className="fitbit-analyzer-container">
            <Nav />
            {accountType === 'Coach' ? <CoachHome userName={userName} /> : <UserHome userName={userName} />}
            <BackendDemo />
        </div>
    );
};

const UserHome = ({ userName }) => {
    const accessToken = useFitbitAuth();
    const [stepsData, setStepsData] = useState([]);
    const [loading, setLoading] = useState(true); // Add this line

    useEffect(() => {
        if (accessToken) {
            const { getWeekStep } = FitbitDataComponent({ accessToken });
            const fetchActivities = async () => {
                try {
                    const weekStep = await getWeekStep();
                    console.log(weekStep)
                    console.log('Activities Steps:', weekStep["activities-steps"]); // Add this line
                    setStepsData(weekStep["activities-steps"]);
                    setLoading(false);
                } catch (error) {
                    console.error('Error fetching activities:', error);
                }
            };

            fetchActivities();
        }
    }, [accessToken]);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <main className="">
            <div className="main-content" >
                <div className="row align-items-center text-center">
                    <div className="col-12">
                        <h1 className="welcome-title">Homepage</h1>
                    </div>
                    <div className="col-12">
                        <p className="welcome-text">Welcome {userName}! This is your personal homepage! Here you can access your personalized health graphs and charts, taken from your Fitbit Inspire 2!</p>
                    </div>
                </div>
            </div>
            <div className="fitbit-surround">
                <div class="container text-center">
                    <div class="row gx-4  align-items-center justify-content-center">
                        <div class="col col-md-6 graph-cover" >
                            <Graph data={stepsData} />
                        </div>
                        <div class="col col-md-6 graph-cover">
                            Column
                        </div>
                    </div>
                </div>

                
            </div>
            <pre>{stepsData ? JSON.stringify(stepsData, null, 2) : 'Loading data...'}</pre>
        </main>

    );
};

const CoachHome = ({ userName }) => {
    return (
        <main className="">
            <div className="main-content" >
                <div className="row align-items-center text-center">
                    <div className="col-12">
                        <h1 className="welcome-title">Homepage</h1>
                    </div>
                    <div className="col-12">
                        <p className="welcome-text">Welcome, {userName}! This is your coaching homepage. Here you can access your clients' personalized health graphs and charts, taken from their Fitbit Inspire 2!</p>
                    </div>
                </div>
            </div>
            <div className="fitbit-surround">

            </div>
        </main>

    );
};

export default Home;