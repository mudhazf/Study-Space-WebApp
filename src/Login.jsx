import React from 'react';
import './Login.css'; // Make sure to create this CSS file or adjust the path accordingly
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="loginform-container">
        <h1 className="login">Login</h1>

        <div className="loginform-row">
          <label>Email</label>
          <input type="email" placeholder="Jane Doe" />
        </div>

        <div className="loginform-row">
          <label>Password</label>
          <input type="password" placeholder="***************" />
        </div>

        <div className="loginform-buttons">
          <button className="btn btn-signup">Log in</button>
          <button className="btn btn-clear">Clear</button>
        </div>

        <hr className="divider" />

        <button className="btn loginbtn loginbtn-social">
            <FaGithub style={{ marginRight: '8px' }} />
             Login with Github</button>
          
        
        <button className="btn loginbtn loginbtn-social">
            <FaGoogle style={{ marginRight: '8px' }} />
          Login with Google
        </button>

        <div className="signup-section">
          
          <Link to="/forgot" className="signup-text">Forgot your password?</Link> <br />
          <br />
          <p className="signup-text">
            <Link to="/signup" className="btn loginbtn">Create account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
