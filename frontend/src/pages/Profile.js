import React, { useState } from 'react';
import '../pages/form.css';
import Nav from '../components/navbar'

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
            <Nav />
            <MainSection />
        </div>
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
                        <label for="password" className="form-label">Old Password</label>
                        <input
                            type="password"
                            id="password"
                            class="form-control"
                            placeholder="Enter old password"
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </div>
                    <div className="input-cluster">
                        <label for="password" className="form-label">New Password</label>
                        <input
                            type="password"
                            id="password"
                            class="form-control"
                            placeholder="Enter new password"
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