import React from 'react';
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <div className="row">
      <div className="col s12 offset-m2 l6 offset-l3">
        <div class="row ">
          <div className="login-background"></div>

        </div>
      </div>
      <div className="login-wrapper login-box">
        <h3 className="login-header">Welcome to sPark!</h3>
        <div className="login-user-input">
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="password"></input>
        </div>

        <Link to="/sPark-space-manager-page" >
          <button className="homelogin font-style waves-effect btn" onClick={props.isLoggedIn}>Login</button>
        </Link>
        <button className="signupbtn font-style waves-effect btn">Sign Up</button>
      </div>
    </div>
  )
}

export default Login