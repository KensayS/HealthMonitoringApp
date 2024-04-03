import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../firebaseBackend/firebaseConfig";
import { initializeApp } from "firebase/app";
import { useNavigate, Link } from "react-router-dom";
import '../pages/form.css';

const Register = () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Check if the user is already logged in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/home');
      }
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, [auth, navigate]);

  const registerAccount = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential); // demo
        navigate('/home');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container container-fluid">
      <div className="content" >
        <form onSubmit={registerAccount}>
          <div className="form-title">
            <h1>Create Account</h1>
          </div>
          <div className="input-cluster">
            <label for="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              class="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="input-cluster">
            <label for="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              class="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="d-grid gap-2 button-prop shadow-lg">
            <button type="submit" className="btn btn-primary" >Sign Up</button>
          </div>
        </form>
        <p>
          Already have an account? <Link to="/Login" className="link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Log in here</Link>
        </p>
      </div>
    </div >
  );
};

export default Register;