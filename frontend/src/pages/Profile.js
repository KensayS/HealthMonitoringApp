import React, { useState, useEffect } from 'react';
import '../pages/form.css';
import Nav from '../components/navbar';
import { useNavigate } from 'react-router-dom';
import { getAuth, updatePassword } from "firebase/auth";

const Profile = () => {
    const [currentEmail, setCurrentEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [error, setError] = useState("");  // To display error messages
    const [success, setSuccess] = useState("");  // To display success message

    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            setCurrentEmail(user.email); // Set the user's email as the initial value
        }
    }, []);

    const handleNewPasswordChange = (e) => setNewPassword(e.target.value);

    const updatePasswordInFirebase = async () => {
        const auth = getAuth();
        const user = auth.currentUser;
        try {
            await updatePassword(user, newPassword);
            setSuccess("Password updated successfully!");
            setTimeout(() => setSuccess(""), 5000);  // Reset success message after 5 seconds
        } catch (error) {
            setError("Failed to update password: " + error.message);
            setTimeout(() => setError(""), 5000);  // Reset error message after 5 seconds
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (newPassword) {
            await updatePasswordInFirebase();
        }
    };

    return (
        <div className="fitbit-analyzer-container">
            <Nav />
            <div className="sign-in-container container-fluid" id="white-back">
                <div className="content">
                    <form onSubmit={handleSubmit}>
                        <div className="form-title">
                            <h1>Edit Profile</h1>
                        </div>
                        <div className="input-cluster">
                            <label htmlFor="current-email" className="form-label">Current Email</label>
                            <input
                                type="email"
                                id="current-email"
                                className="form-control"
                                value={currentEmail}
                                readOnly  // Make the field read-only
                            />
                        </div>
                        <div className="input-cluster">
                            <label htmlFor="new-password" className="form-label">New Password</label>
                            <input
                                type="password"
                                id="new-password"
                                className="form-control"
                                placeholder="Enter new password"
                                value={newPassword}
                                onChange={handleNewPasswordChange}
                            />
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>}
                        {success && <div className="alert alert-success">{success}</div>}
                        <div className="container">
                            <div className="row button-prop text-center">
                                <div className="col col-md-6 col-12 d-grid mt-3">
                                    <button type="button" className="btn btn-outline-primary shadow" onClick={() => {
                                        navigate(-1);
                                    }}>Cancel</button>
                                </div>
                                <div className="col col-md-6 col-12 d-grid mt-3">
                                    <button type="submit" className="btn btn-primary shadow">Save</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
