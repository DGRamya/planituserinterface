import React, { Component } from "react";
import Welcome from "./Welcome";
import Event from "./Event";
import About from "./About";
import Home from "./Header";

import { Link } from "react-router-dom";

class Footer extends Component {
  render(){
    return(
      <h1>
        <div>
          I am footer
        </div>
      </h1>
    )
  }
}

export default Footer;
