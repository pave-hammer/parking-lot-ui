import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login"

const NavBar = (props) => {
  return (
    <>
      {props.navSearch
        ?
        <nav>
          <div className="nav-wrapper">
            <form>
              <div className="input-field">
                <input id="search" type="search" required />
                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                <i className="material-icons" onClick={props.closeSearch}>close</i>
              </div>
            </form>
          </div>
        </nav>
        :
        <div>
          <nav>
            <div className="nav-wrapper grey lighten-3">
              <a href="/" className="brand-logo light-blue-text lighten-4 center">sPark</a>
              <ul className="right">
                <Link to="/sPark-login">
                  <li><button className="waves-effect light-blue lighten-4 grey-text lighten-3 btn">Login</button></li>
                </Link>
              </ul>
            </div>
          </nav>
        </div>}
    </>
  )
}

export default NavBar