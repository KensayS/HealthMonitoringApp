import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { CLIENT_ID, CLIENT_SECRET } from "../fitbit/credentials";

const Logout = () => {
    const auth = getAuth();
    const navigate = useNavigate();

    const logout = () => {
        // Revoking Fitbit token first
        const accessToken = localStorage.getItem('fitbitAccessToken');
        console.log(accessToken);
        localStorage.removeItem('fitbitAccessToken');

        fetch('https://api.fitbit.com/oauth2/revoke', {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `token=${accessToken}`
        }).then(response => {
            console.log('Fitbit token revoked');
            // Proceeding with Firebase logout
            signOut(auth).then(() => {
                // Sign-out successful.
                navigate('/fitbitLogout');
            }).catch((error) => {
                // Handle Firebase logout error.
                console.error('Firebase logout error:', error);
            });
        }).catch(error => {
            // Handle Fitbit revocation error
            console.error('Fitbit revocation error:', error);
        });
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div>
                <p>Please click the button below to log out.</p>
                <button onClick={logout} className="btn btn-danger">Log Out</button>
            </div>
        </div>
    );
};

export default Logout;
