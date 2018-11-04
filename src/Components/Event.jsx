import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import axios from "axios";
import 'react-day-picker/lib/style.css';
import './Event.css';


class Event extends Component {

  constructor(props) {
    super(props);

    this.state = {
      eventname: "",
      eventvenue: "",
      eventDate: '',
      todoname: '',
      todolist: [{ todoname: '' }],
      guestemail: '',
      guestlist: [{ guestemail: '' }],
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

    axios
      .post("http://localhost:8080/event", eventData, {
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

  handleRemovetodoitem = (idToDo) => () => {
    this.setState({ todolist: this.state.todolist.filter((s, sidToDo) => idToDo !== sidToDo) });
  }

  handleAddtodoitem = () => {
    this.setState({ todolist: this.state.todolist.concat([{ todoname: '' }]) });
  }

  handleToDoChange = (idToDo) => (evt) => {
    const newToDo = this.state.todolist.map((todoitem, sidToDo) => {
      if (idToDo !== sidToDo) return todoitem;
      return { ...todoitem, todoname: evt.target.value };
    });
    
    this.setState({ todolist: newToDo });
  }


 handleRemoveguest = (guestId) => () => {
    this.setState({ guestlist: this.state.guestlist.filter((s, sguestId) => guestId !== sguestId) });
  }

  handleAddguest = () => {
    this.setState({ guestlist: this.state.guestlist.concat([{ guestemail: '' }]) });
  }

  handleGuestChange = (guestId) => (evt) => {
    const newGuest = this.state.guestlist.map((guest, sguestId) => {
      if (guestId !== sguestId) return guest;
      return { ...guest, guestemail: evt.target.value };
    });
    
    this.setState({ guestlist: newGuest });
  }


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
              <input  
                type="text"
                required
                ref="eventname"
              />
              </div>
          </div>

          <div className="container">
            <div className="child">
            <label>Event Venue</label>
            </div>
            <div className="child">
            <input
              type="text"
              required
              ref="eventvenue"
            />
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

          <div className="container">
              <div className="child">
              <label>To Do List</label>
              </div>
          </div>  
          <div className="container">  
              <div className="nestedContainer">
              {this.state.todolist.map((todoitem, idToDo) => (
                    <div className="itemStyle">
                    <div className="item">
                    <input
                      type="text"
                      ref="todoitem"
                      placeholder={`todoitem #${idToDo + 1} todoname`}
                      value={todoitem.todoname}
                      onChange={this.handleToDoChange(idToDo)}
                    />
                    </div>
                    <div>
                    <button type="button" className="small" onClick={this.handleRemovetodoitem(idToDo)}>-</button>
                    </div>
                    </div>   
              ))}
              </div>
            </div>
          <div className="container">    
              <div className="child">
              <button type="button" className="small" onClick={this.handleAddtodoitem}>Add ToDo</button>
              </div>
          </div>


          <div className="container">
              <div className="child">
              <label>Guest List</label>
              </div>
          </div>
          <div className="container">
              <div className="nestedContainer">
              {this.state.guestlist.map((guest, guestId) => (
                  <div className="itemStyle">
                    <input
                      type="text"
                      ref="guest"
                      placeholder={`guest #${guestId + 1} guestemail`}
                      value={guest.guestemail}
                      onChange={this.handleGuestChange(guestId)}
                    />
                    <button type="button" className="small" onClick={this.handleRemoveguest(guestId)}>-</button>
                  </div>
              ))}
              </div>
          </div>  

          <div className="container">    
              <div className="child">
                <button type="button" className="small" onClick={this.handleAddguest}>Add Guest</button>
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