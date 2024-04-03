import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Welcome from './welcome';
import Register from './pages/Register';
import Home from './home'
import Login from './pages/Login';
import Logout from './pages/Logout'
import FitbitLogout from './pages/FitbitLogout';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseBackend/firebaseConfig';


const app = initializeApp(firebaseConfig);

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/fitbitLogout" element={<FitbitLogout />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;