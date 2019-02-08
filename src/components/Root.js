import React from 'react';
import { Link } from "react-router-dom";

const Root = () => {
  return (
    <div className="col s12">
      <div class="row">
        <img className="login-background" src={process.env.PUBLIC_URL + 'Splash.png'} />

        <Link to="/sPark-userBook">
          <button className="root-button waves-effect white-text btn">Learn More</button>
        </Link>
      </div>
    </div>
  )
}

export default Root