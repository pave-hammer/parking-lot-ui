import React from 'react';
import { Link } from "react-router-dom";
const userBook = (props) => {
  return (
    <>
      < nav >
        <div className="nav-wrapper grey lighten-3">
          <a href="/" className="brand-logos center">sPark</a>
          <ul className="right">
            <Link to="/sPark-login">
              <li><button className="loginbtn waves-effect white-text lighten-3 btn">login</button></li>
            </Link>
          </ul>
        </div>
      </nav >
      <div class="col s12 font-style">
        {/* <h1 className="userBookHeader center">How to use...</h1> */}
        <div className="user1">
          <i className="material-icons userIcon">drive_eta</i>
          <p className="userText col s6 center">{`Text your license plate number to 770-766-0070. No downloading necessary!`}</p>
        </div>
        <div className=" user2">
          <i className=" material-icons userIcon2">alarm_add</i>
          <p className="userText">Add the amount of time you would like to stay parked.</p>
        </div>
        <div className=" user3">
          <i className=" material-icons userIcon1">done_all</i>
          <p className="userText">Confirm with 'Y' and Viola! You will receive a reminder in 30 minutes to come take your car home.</p>
        </div>
      </div>
    </>
  )
}

export default userBook