import React, { Component } from "react";
import logo from "../images/logo.png";
import './Welcome.css';
import Jumbotron from "./Jumbotron";
import planit from "../images/planit.png";
class Welcome extends Component {
  render() {
    return (
      <div className="bgStyle">
        <div style={{ backgroundColor: "white" }}>
          <img src={logo} className="imgStyle" />
        </div>
        <div className="divStyle">
        <Jumbotron mainText="Plan your event!"
        displayState="false" buttonLink="./login" image = {require("../images/planit.png")}/>
        <Jumbotron mainText="Invite Guests!"
        displayState="false" buttonLink="./login" image = {require("../images/invite.jpg")}/>
        <Jumbotron mainText="Maintain to-do list!"
        displayState="false" buttonLink="./login" image = {require("../images/to-do.png")}/>

        </div>
      </div>
    );
  }
}

export default Welcome;
