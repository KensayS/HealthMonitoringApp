import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from "./credentials.js";

// Assuming CLIENT_ID, CLIENT_SECRET, and REDIRECT_URI are imported correctly
const clientId = CLIENT_ID;
const clientSecret = CLIENT_SECRET;
const redirectUri = REDIRECT_URI;

const useFitbitAuth = () => {
    const [accessToken, setAccessToken] = useState(localStorage.getItem('fitbitAccessToken'));
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const authorizationCode = urlParams.get('code');
        if(window.location.pathname == '/' && !authorizationCode){
            return
        }

        const authenticateFitbit = async () => {
            // If there's an access token, ensure navigation to '/home' if not already there
            if (accessToken) {
                if (window.location.pathname !== '/login') {
                    
                }
                return;
            }

            // If there's an authorization code, attempt to exchange it for an access token
            if (authorizationCode) {
                try {
                    const token = await handleAuthorizationCode(authorizationCode);
                    localStorage.setItem('fitbitAccessToken', token);
                    setAccessToken(token);
                    navigate('/login', { replace: true });
                } catch (error) {
                    console.error('Error handling authorization code:', error);
                }
            } else if (!accessToken) {
                // If there's no access token and no authorization code, initiate authentication
                initiateAuthentication();
            }
        };

        // Only invoke the authentication function if there's no accessToken or there's an authorization code
        if (!accessToken || authorizationCode) {
            authenticateFitbit();
        }
    }, [accessToken, navigate]);

    return accessToken;
};

const initiateAuthentication = () => {
    // Authorization URL with the necessary scopes
    const scope = 'activity+cardio_fitness+electrocardiogram+heartrate+location+nutrition+oxygen_saturation+profile+respiratory_rate+settings+sleep+social+temperature+weight';
    const authorizationEndpoint = `https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;

    // Redirect the user to Fitbit's authorization page
    window.location.href = authorizationEndpoint;
};

const handleAuthorizationCode = async (code) => {
    const tokenEndpoint = 'https://api.fitbit.com/oauth2/token';
    const body = new URLSearchParams({
        code: code,
        grant_type: 'authorization_code',
        client_id: clientId,
        redirect_uri: redirectUri,
    });

    try {
        const response = await fetch(tokenEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
            },
            body: body.toString(),
        });

        if (response.ok) {
            const data = await response.json();
            return data.access_token;
        } else {
            throw new Error('Failed to exchange authorization code for access token');
        }
    } catch (error) {
        console.error('Error during token exchange:', error);
        throw error; // Propagate the error to be handled in the calling function
    }
};

export { useFitbitAuth, initiateAuthentication, handleAuthorizationCode };
