import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Welcome from './welcome';
import Register from './pages/Register';
import Home from './home'
import Login from './pages/Login';
import BackendDemo from './pages/BackendDemo';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseBackend/firebaseConfig';


const app = initializeApp(firebaseConfig);

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Welcome />} /> 
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/backenddemo" element={<BackendDemo />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;