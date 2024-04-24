import React, { useState, useEffect } from 'react';
import '../pages/form.css';
import Nav from '../components/navbar';
import { useNavigate } from 'react-router-dom';
import { getAuth, updateProfile, updatePassword, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";

const Profile = () => {
    const [currentEmail, setCurrentEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [error, setError] = useState("");  // To display error messages
    const [success, setSuccess] = useState("");  // To display success message
    const [currentPassword, setCurrentPassword] = useState("");
    const [newUserName, setNewUserName] = useState("");

    const navigate = useNavigate();
    const auth = getAuth(); 

    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            setCurrentEmail(user.email); // Set the user's email as the initial value
        }
    }, []);

    const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
    const handleCurrentPasswordChange = (e) => setCurrentPassword(e.target.value);
    const handleNewUserNameChange = (e) => setNewUserName(e.target.value);

    const updateUserNameInFirebase = async () => {
        const user = auth.currentUser;
        const credential = EmailAuthProvider.credential(user.email, currentPassword);

        try {
            await reauthenticateWithCredential(user, credential);
            await updateProfile(user, { displayName: "User:" + newUserName });
            setSuccess("Username updated successfully!");
            setTimeout(() => setSuccess(""), 2000); 
        } catch (error) {
            setError("Failed to update username: " + error.message);
            setTimeout(() => setError(""), 2000);  // Reset error message after green fn
        }
    };

    const updatePasswordInFirebase = async () => {
        const user = auth.currentUser;
        const credential = EmailAuthProvider.credential(user.email, currentPassword);
        try {
            await reauthenticateWithCredential(user, credential);
            await updatePassword(user, newPassword);  // Update the password here
            setSuccess("Password updated successfully!");
            setTimeout(() => setSuccess(""), 3000);  // Reset success message after 3 seconds
        } catch (error) {
            setError("Failed to update password: " + error.message);
            setTimeout(() => setError(""), 3000);  // Reset error message after 3 seconds
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        let isUsernameUpdated = false;
        let isPasswordUpdated = false;

        if (newUserName) {
            await updateUserNameInFirebase();
            isUsernameUpdated = true;
        }
    
        if (newPassword) {
            await updatePasswordInFirebase();
            isPasswordUpdated = true;
        }
    
        if (isUsernameUpdated && isPasswordUpdated) {
            setSuccess("Username and password updated successfully!");
        } else if (isUsernameUpdated) {
            setSuccess("Username updated successfully!");
        } else if (isPasswordUpdated) {
            setSuccess("Password updated successfully!");
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
                            <label htmlFor="current-password" className="form-label">Current Password</label>
                            <input
                                type="password"
                                id="current-password"
                                className="form-control"
                                placeholder="Must enter to change anything"
                                value={currentPassword}
                                onChange={handleCurrentPasswordChange}
                            />
                        </div>
                        <div className="input-cluster">
                            <label htmlFor="new-username" className="form-label">New Username</label>
                            <input
                                type="text"
                                id="new-username"
                                className="form-control"
                                placeholder="Enter new username"
                                value={newUserName}
                                onChange={handleNewUserNameChange}
                            />
                        </div>
                        <div className="input-cluster">
                            <label htmlFor="new-password" className="form-label">New Password</label>
                            <input
                                type="password"
                                id="new-password"
                                className="form-control"
                                placeholder="Leave blank if keeping the same password"
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
