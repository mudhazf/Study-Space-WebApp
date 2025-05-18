import React from 'react';
import './Signup.css'; 
import { FaGithub, FaGoogle } from 'react-icons/fa';// Make sure to import the adjusted CSS
import { Link } from 'react-router-dom';


function Signup() {
  return (
    <div className="signup-wrapper">
      <div className="form-container">
        <h1 className="register">Create account</h1>

        <label className="form-row">
          <span>Email:</span>
          <input type="email" placeholder="Jane Doe" />
        </label>

        <label className="form-row">
          <span>Password:</span>
          <input type="password" placeholder="***************" />
        </label>

        <label className="form-row">
          <span>Confirm Password:</span>
          <input type="password" placeholder="***************" />
        </label>

        <label className="form-row">
          <input type="checkbox" />
          <span style={{ marginLeft: '10px' }}>
            I agree to the <span className="underline">privacy policy</span>
          </span>
        </label>

        <div className="form-buttons">
          <button className="btn btn-signup">Create account</button>
          <button className="btn btn-clear">Clear</button>
        </div>

        <hr className="my-8" />

        <button className="btn btn-login btn-social">
           <FaGithub style={{ marginRight: '8px' }} />
          Signup with Github</button>
        <button className="btn btn-login btn-social" style={{ marginTop: '10px' }}>
           <FaGoogle style={{ marginRight: '8px' }} />
           Signup with Google
        </button>

        <div className="login-section">
          <p className="login-text">Already have an account?</p>
          <Link to="/login" className="btn btn-login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
