import React from 'react';
import './profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <header className="header">
        <div className="logo">*Logo</div>
        <nav className="navigation">
          <a href="#home">Home</a>
          <a href="#profile" className="active">Profile</a>
        </nav>
      </header>
      <div className="form-container">
        <h1>Profile</h1>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" value="John" readOnly />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" value="Doe" readOnly />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" value="johndoe@gmail.com" readOnly />
        </div>
        <div className="form-group">
          <label>Birthday</label>
          <input type="text" value="XX/XX/XXXX" readOnly />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" value="password" readOnly />
        </div>
        <button className="edit-button">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
