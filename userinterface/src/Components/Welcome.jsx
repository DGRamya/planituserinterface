import React, { Component } from "react";
import logo from "../images/logo.png";

const bgStyle = {
  height: "100%",
  width: "100%",
  position: "absolute"
};
const divStyle = {
  paddingTop: "40px",
  height: "100%",
  width: "100%",
  backgroundColor: "#F17070",
  display: "inline-block"
};
const imgStyle = {
  height: "40%",
  align: "left"
};
const fontStyle = {
  fontFamily: "Comic Sans MS",
  color: "white",
  fontWeight: "bold",
  fontStyle: "oblique",
  fontSize: "30px"
};

class Welcome extends Component {
  render() {
    return (
      <div className="WelcomePage " style={bgStyle}>
        <div style={{ backgroundColor: "white" }}>
          <img src={logo} style={imgStyle} />
        </div>
        <div style={divStyle}>
          <p style={fontStyle}>
            {" "}
            Welcome, <br /> Please register or login to start planning your
            event
          </p>{" "}
          <br />
          <a href="/login" className="buttonLogin" style={fontStyle}>
            <u>Login</u>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/registration" className="buttonReg" style={fontStyle}>
            <u>Registration</u>
          </a>
        </div>
      </div>
    );
  }
}

export default Welcome;
