import React, { useState } from 'react';
import './main.css';
import Nav from '../components/navbar'
import Slider from '../components/slider'

const Goals = () => {
    return (
        <div className="fitbit-analyzer-container">
            <Nav />
            <MainSection />
        </div>
    );
};

const MainSection = () => {
    const [sleepValue, setSleep] = useState(8)
    const [stepValue, setStep] = useState(5000)
    const [calValue, setCal] = useState(2000)

    const sleepChange = (event) => {
        setSleep(event.target.sleepValue)
    };
    const stepChange = (event) => {
        setStep(event.target.stepValue)
    };
    const calChange = (event) => {
        setCal(event.target.calValue)
    };

    return (
        <main className="">
            <div className="main-content">
                <div className="align-items-center text-center">
                    <h1 className="welcome-title">Goals</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="/moon.png" className="card-img-top" alt="Sleep Goals Icon"></img>
                            <div className="card-body">
                                <h2 className="card-title goal-title">Sleep Goals</h2>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <form>
                                    <Slider
                                        value={sleepValue}
                                        min={1}
                                        max={12}
                                        step={1}
                                        label="Set Sleep Goal:"
                                        handleChange={sleepChange} />
                                    <h3>{sleepValue} hours</h3>
                                    <button type="button" className="btn btn-primary btn">Set Goal</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="/Steps.png" className="card-img-top" alt="Steps Goals Icon"></img>
                            <div className="card-body">
                                <h2 className="card-title goal-title">Step Goals</h2>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <form>
                                    <Slider
                                        value={8}
                                        min={1}
                                        max={12}
                                        step={1}
                                        label="Set Sleep Goal:"
                                        handleChange={stepChange} />
                                    <h3>{stepValue} hours</h3>
                                    <button type="button" className="btn btn-primary btn">Set Goal</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="/fire.png" className="card-img-top" alt="Calorie Goals Icon"></img>
                            <div className="card-body">
                                <h2 className="card-title goal-title">Calorie Goals</h2>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. </p>
                                <form>
                                    <Slider
                                        value={8}
                                        min={1}
                                        max={12}
                                        step={1}
                                        label="Set Sleep Goal:"
                                        handleChange={calChange} />
                                    <h3>{calValue} hours</h3>
                                    <button type="button" className="btn btn-primary btn">Set Goal</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
};

export default Goals;