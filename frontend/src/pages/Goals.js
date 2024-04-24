import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseConfig from "../firebaseBackend/firebaseConfig";
import { initializeApp } from "firebase/app";
import './main.css';
import Nav from '../components/navbar'
import Slider from '../components/slider'

const Goals = () => {
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
            {accountType === 'Coach' ? <CoachMainSection /> : <UserMainSection />}
        </div>
    );
};

const CoachMainSection = () => {

    return (
        <main className="">
            <div className="main-content">
                <div className="align-items-center text-center">
                    <h1 className="welcome-title">Coach Section with Nothing.</h1>
                </div>
            </div>
        </main>
    );
};

const UserMainSection = () => {
    const [sleepValue, setSleepValue] = useState(8)
    const [stepValue, setStepValue] = useState(5000)
    const [calValue, setCalValue] = useState(2000)
    const [sleepDenom, setSleepDenom]= useState(8)
    const [stepDenom, setStepDenom] = useState(5000)
    const [calDenom, setCalDenom] = useState(2000)

    function handleSleepChange (event) {
        setSleepValue(parseInt(event.target.value))
    };

    function handleStepChange (event) {
        setStepValue(parseInt(event.target.value));
    };

    function handleCalChange (event) {
        setCalValue(parseInt(event.target.value));
    };

    function handleSleepDenom () {
        setSleepDenom(sleepValue)
    };

    function handleStepDenom (event) {
        setStepDenom(parseInt(stepValue));
    };

    function handleCalDenom (event) {
        setCalDenom(parseInt(calValue));
    };

    return (
        <main className="">
            <div className="main-content">
                <div className="align-items-center text-center">
                    <h1 className="welcome-title">Goals</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card shadow-lg h-100">
                            <img src="/moon.png" className="card-img-top" alt="Sleep Goals Icon"></img>
                            <div className="card-body d-flex flex-column">
                                <h2 className="card-title goal-title">Sleep Goals</h2>
                                {/* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                <div className="mt-auto d-flex flex-column">
                                    <h3 className="text-center range-visual">0h 0m / {sleepDenom}h</h3>
                                    <Slider
                                        value={sleepValue}
                                        min={1}
                                        max={12}
                                        step={1}
                                        label="Set Sleep Goal:"
                                        changeHandler={handleSleepChange} />
                                    <h3 className="text-center range-visual">{sleepValue} hours</h3>
                                    <button type="button" className="btn btn-primary btn justify-content-center" onClick={handleSleepDenom}>Set Goal</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg h-100">
                            <img src="/Steps.png" className="card-img-top" alt="Steps Goals Icon"></img>
                            <div className="card-body d-flex flex-column">
                                <h2 className="card-title goal-title">Step Goals</h2>
                                {/* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                <div className="mt-auto d-flex flex-column">
                                    <h3 className="text-center range-visual">0 steps / {stepDenom} steps</h3>
                                    <Slider
                                        value={stepValue}
                                        min={500}
                                        max={20000}
                                        step={500}
                                        label="Set Steps Goal:"
                                        changeHandler={handleStepChange} />
                                    <h3 className="text-center range-visual">{stepValue} steps</h3>
                                    <button type="button" className="btn btn-primary btn justify-content-center" onClick={handleStepDenom}>Set Goal</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg h-100">
                            <img src="/fire.png" className="card-img-top" alt="Calorie Goals Icon"></img>
                            <div className="card-body d-flex flex-column">
                                <h2 className="card-title goal-title">Calorie Goals</h2>
                                {/* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. </p> */}
                                <div className="mt-auto d-flex flex-column ">
                                    <h3 className="text-center range-visual">0 cal / {calDenom} cal</h3>
                                    <Slider
                                        value={calValue}
                                        min={1000}
                                        max={6000}
                                        step={100}
                                        label="Set Calorie Goal:"
                                        changeHandler={handleCalChange} />
                                    <h3 className="text-center range-visual">{calValue} calories</h3>
                                    <button type="button" className="btn btn-primary btn justify-content-center" onClick={handleCalDenom}>Set Goal</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
};

export default Goals;