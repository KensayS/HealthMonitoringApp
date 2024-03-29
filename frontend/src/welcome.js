import React from 'react';
import './welcome.css';

const FitbitAnalyzer = () => {
  return (
    <div className="fitbit-analyzer-container">
      <Header />
      <MainSection />
    </div>
  );
};

const Header = () => {
  return (
    <header className="navigation">
      <div className="logo">Logo</div>
      <nav className="nav">
        <ul>
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#profile" className="nav-link">Profile</a></li>
        </ul>
      </nav>
    </header>
  );
};

const MainSection = () => {
  return (
    <main className="main-content">
      <span><h1 className="title">Fitbit Analyzer</h1></span>
      <span><p className="welcome-text">Welcome to the Fitbit Analyzer web app, where you are able take your Fitbit statistics to another level!</p>
        <button className="get-started-btn">Get started</button></span>
      {/* Background image would be set in CSS */}
    </main>
  );
};

export default FitbitAnalyzer;
