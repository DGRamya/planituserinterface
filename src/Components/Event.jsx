import React, { Component } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import axios from "axios";
import "react-day-picker/lib/style.css";
import "./Event.css";

class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventname: "",
      eventvenue: "",
      eventDate: "",
      todolist: [""],
      guestlist: [""]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    const eventDetails = {};
    for (const field in this.refs) {
      console.log(field);
      eventDetails[field] = this.refs[field].value;
    }

    var eventData = {};

    eventData["eventname"] = eventDetails["eventname"];
    eventData["eventvenue"] = eventDetails["eventvenue"];
    eventData["todolist"] = this.state.todolist;
    eventData["guestlist"] = this.state.guestlist;

    console.log("printing the event data" + JSON.stringify(eventData));

    axios
      .post("http://localhost:8080/events/myevents/create", eventData, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          crossDomain: true
        }
      })
      .then(function(res) {
        console.log(res);
        alert("Event Added successful!");
      })
      .catch(function(err) {
        alert("Error in Event creation!");
        console.log(err);
      });
    event.target.reset();
  };

  handleDateChange(date) {
    this.setState({
      eventDate: date
    });
  }

  handleToDoListChange = idx => evt => {
    const newList = this.state.todolist;
    newList[idx] = evt.target.value;
    this.setState({ todolist: newList });
  };

  handleAddToDoList = () => {
    this.setState({
      todolist: this.state.todolist.concat([""])
    });
  };

  handleRemoveToDoList = idx => () => {
    this.setState({
      todolist: this.state.todolist.filter((s, sidx) => idx !== sidx)
    });
  };

  handleGuestChange = idx => evt => {
    const newList = this.state.guestlist;
    newList[idx] = evt.target.value;
    this.setState({ guestlist: newList });
  };

  handleAddGuest = () => {
    this.setState({
      guestlist: this.state.guestlist.concat([""])
    });
  };

  handleRemoveGuest = idx => () => {
    this.setState({
      guestlist: this.state.guestlist.filter((s, sidx) => idx !== sidx)
    });
  };

  render() {
    const { selectedDay } = this.state;
    return (
      <div style={{ backgroundColor: "white" }}>
        <div className="headerContainer">
          <div className="header">
            <label> Create Events </label>
          </div>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="child">
              <label>Event Name</label>
            </div>
            <div className="child">
              <input type="text" required ref="eventname" />
            </div>
          </div>

          <div className="container">
            <div className="child">
              <label>Event Venue</label>
            </div>
            <div className="child">
              <input type="text" required ref="eventvenue" />
            </div>
          </div>

          <div className="container">
            <div className="child">
              <label>Date</label>
            </div>
            <div className="child">
              <DayPickerInput onDayChange={this.handleDateChange} />
            </div>
          </div>
          <br /><br />

           <div className="container">
             <div className="child">
             <label >To Do List</label>
             </div>
          </div>   
          <div className="container">  
              <div className="nestedContainer">
            {this.state.todolist.map((todo, idx) => (
              <div className="itemStyle">
                <div className="item">
                <input
                  type="text"
                  placeholder={`TodoList #${idx + 1} name`}
                  value={todo}
                  onChange={this.handleToDoListChange(idx)}
                />
                </div>
                <div>
                <button
                  type="button"
                  onClick={this.handleRemoveToDoList(idx)}
                  className="small"
                >
                  -
                </button>
              </div>
              </div>  
            ))}
             </div>
            </div>
            <div className="container">    
              <div className="child">
              <button
              type="button"
              onClick={this.handleAddToDoList}
              className="small"
              >
              Add Item
              </button>
              </div>
             </div> 


            <div className="container">
             <div className="child">
              <label >Guest List</label>
             </div>
            </div> 
            <div className="container">  
            <div className="nestedContainer">
            {this.state.guestlist.map((guest, idx) => (
              <div className="itemStyle">
                <div className="item">
                <input
                  type="text"
                  placeholder={`GuestList #${idx + 1} name`}
                  value={guest}
                  onChange={this.handleGuestChange(idx)}
                />
                </div>
                <div>
                <button
                  type="button"
                  onClick={this.handleRemoveGuest(idx)}
                  className="small"
                >
                  -
                </button>
              </div>
              </div>
            ))}
            </div>
            </div>
            <div className="container">    
              <div className="child">
            <button
              type="button"
              onClick={this.handleAddGuest}
              className="small"
            >
              Add Guest
            </button>
          </div>
          </div>

          <div className="container">
            <div className="submitButton">
              <button>Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Event;
