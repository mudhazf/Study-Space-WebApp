import React from 'react';
import './Login.css'; // Reusing the same styles
import { Link } from 'react-router-dom';

const Forgot = () => {
  return (
    <div className="login-wrapper forgot-wrapper">
      <div className="loginform-container">
        <h1 className="login">Forgot Password</h1>

        <div className="loginform-row">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="loginform-buttons">
          <button className="btn btn-signup">Recover Password</button>
          <button className="btn btn-clear">Clear</button>
        </div>

        <div className="signup-section">
          <p className="signup-text">
            <Link to="/login" className="btn loginbtn">Back to Login</Link>
          </p>
          <p className="signup-text">
            <Link to="/signup" className="btn loginbtn">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
