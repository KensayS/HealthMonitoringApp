import React from 'react';
import './editprofile.css'; 

export default function EditProfile() {
  return (
    <div className="edit-profile-container">
      <header>
        {/* Logo and navigation can go here */}
      </header>
      <main>
        <form className="edit-profile">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" defaultValue="John"/>

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" defaultValue="Doe"/>

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" defaultValue="johndoe@gmail.com"/>

          <label htmlFor="birthday">Birthday</label>
          <input type="text" id="birthday" name="birthday" defaultValue="XX/XX/XXXX"/>

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" defaultValue="•••••••"/>

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" defaultValue="•••••••"/>

          <div className="edit-profile-actions">
            <button type="button">Cancel</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </main>
    </div>
  );
}
