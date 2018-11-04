import React, { Component } from "react";
import logo from "../images/logo.png";
import './MyEvents.css';

class MyEvents extends Component {


  handleCreateEvent = () => {
     window.open('/event', 'sharer', 'toolbar=0,status=0,width=500,height=300');
  }

  render() {
    return (
    	<div style={{ backgroundColor: "white" }}>
    		<div>
            	<img src={logo} className="imgStyle" />
            </div>
            <div className="headerContainer">
            	<div className="header">
            		<label> My Events </label>
            	</div>
            	<div className="link">
            		<a href="/login"> <u> Logout </u> </a>
            	</div>
            </div>
            <div className="buttonContainer">
            	<div className="smallButton">
            		<button onClick={this.handleCreateEvent}>
            		Create Event</button>
            	</div>
            </div>
    	</div>
    );
  }
}


export default MyEvents;
