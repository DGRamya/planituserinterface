import React, { Component } from "react";
import logo from "../images/logo.png";
import './Welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div className="bgStyle">
        <div style={{ backgroundColor: "white" }}>
          <img src={logo} className="imgStyle" />
        </div>
        <div className="divStyle">
          <p className="fontStyle">
            {" "}
            Welcome, <br /> Please register or login to start planning your
            event
          </p>{" "}
          <br />
          <a href="/login" className="buttonLogin" className="fontStyle">
            <u>Login</u>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/registration" className="buttonReg" className="fontStyle">
            <u>Registration</u>
          </a>
        </div>
      </div>
    );
  }
}

export default Welcome;
