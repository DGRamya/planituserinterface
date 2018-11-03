import React, { Component } from "react";
import Welcome from "./Welcome";
import Event from "./Event";
import About from "./About";
import Home from "./Header";

import { Link } from "react-router-dom";

class Header extends Component {
  render(){
    return(
      <h1>
        <div>
          <ul>
            <li>
              <Link to="./Home"> Home </Link>
              <Link to="./Event"> Event </Link>
              <Link to="./About"> About </Link>
            </li>
          </ul>
        </div>
      </h1>
    )
  }
}

export default Header;
