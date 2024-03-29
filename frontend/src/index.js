import React from 'react';
import LoginPage from './login';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './welcome';
import reportWebVitals from './reportWebVitals';
import SignUpPage from './signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignUpPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();