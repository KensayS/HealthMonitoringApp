import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/welcome';
import Register from './pages/Register';
import Home from './pages/home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Goals from './pages/Goals';
import Profile from './pages/Profile';
import FitbitLogout from './pages/FitbitLogout';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseBackend/firebaseConfig';
import './App.css';


const app = initializeApp(firebaseConfig);

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/fitbitLogout" element={<FitbitLogout />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;