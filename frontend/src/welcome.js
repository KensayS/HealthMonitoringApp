import React from 'react';
import './welcome.css';
import logo from './welcomepicture.PNG';

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
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-custom py-3 fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Fitbit</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">Profile</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const MainSection = () => {
  return (
    <main className="main-content">
      <div className="" >
        <div className="row mx-0 align-items-center">
          <div className="col-xl-6 col-md-12 ">
            <h1 className="welcome-title">Fitbit Analyzer</h1>
          </div>
          <div className="col-xl-6 col-sm-12">
            <p className="welcome-text">Welcome to the Fitbit Analyzer web app, where you are able take your Fitbit statistics to another level!</p>
            <button type="button" className="btn btn-primary btn-lg">Get Started</button>
          </div>
        </div>
        <div className="container welcome-image text-center">
          <img src={logo} alt="" className="image-adjust rounded"></img>
        </div>
      </div>


      {/* Background image would be set in CSS */}
    </main>
  );
};

export default FitbitAnalyzer;