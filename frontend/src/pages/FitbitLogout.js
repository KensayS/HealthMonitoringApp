import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FitbitLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Delay the opening of the Fitbit logout URL by 2-3 seconds
        const timeoutId = setTimeout(() => {
            // Attempt to open Fitbit's logout URL in a new tab.
            window.open('https://www.fitbit.com/logout', '_blank', 'noopener,noreferrer');

            // After opening the Fitbit logout URL, redirect the user to the login page of your application.
            navigate('/login');
        }, 2000);

        // Cleanup function to clear the timeout if the component unmounts before the timeout is completed
        return () => clearTimeout(timeoutId);
    }, [navigate]);

    return (
        <div>
            <p>Logging you out of Fitbit</p>
        </div>
    );
};

export default FitbitLogout;
