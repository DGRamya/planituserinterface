import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import './Event.css';


class Event extends Component {

  constructor(props) {
    super(props);

    this.state = {
      eventname: "",
      eventvenue: "",
      selectedDay: undefined,
      todoname: '',
      todolist: [{ todoname: '' }],
      guestemail: '',
      guestlist: [{ guestemail: '' }],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDaySelect = this.handleDaySelect.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    const eventDetails = {};
    for (const field in this.refs) {
      eventDetails[field] = this.refs[field].value;
    }
    console.log("-->", eventDetails['todolist']);
  };

  handleDaySelect(day) {
    this.setState({ selectedDay: day });
  }

  handleRemovetodoitem = (idx) => () => {
    this.setState({ todolist: this.state.todolist.filter((s, sidx) => idx !== sidx) });
  }

  handleAddtodoitem = () => {
    this.setState({ todolist: this.state.todolist.concat([{ name: '' }]) });
  }

  handleToDoChange = (idx) => (evt) => {
    const newToDo = this.state.todolist.map((todoitem, sidx) => {
      if (idx !== sidx) return todoitem;
      return { ...todoitem, name: evt.target.value };
    });
    
    this.setState({ todolist: newToDo });
  }


 handleRemoveguest = (idx) => () => {
    this.setState({ guestlist: this.state.guestlist.filter((s, sidx) => idx !== sidx) });
  }

  handleAddguest = () => {
    this.setState({ guestlist: this.state.guestlist.concat([{ guestemail: '' }]) });
  }

  handleGuestChange = (idx) => (evt) => {
    const newGuest = this.state.guestlist.map((guest, sidx) => {
      if (idx !== sidx) return guest;
      return { ...guest, guestemail: evt.target.value };
    });
    
    this.setState({ guestlist: newGuest });
  }


  render() {
    const { selectedDay } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <div className="container">
            <div className="flexItem" >
              <label>Event Name</label>
            </div>
            <div className="flexItem" >
              <input
                type="text"
                required
                ref="eventname"
              />
            </div>
          </div>

          <div className="container">
            <div className="flexItem" >
              <label>Event Venue</label>
            </div>
            <div className="flexItem" >
              <input
                type="text"
                required
                ref="eventvenue"
              />
            </div>
          </div>

          <div className="container">
            <div className="flexItem" >
              <label>Date</label>
            </div>
            <div className="flexItem">
              <DayPickerInput onDayChange={this.handleDayChange} />
            </div>
          </div> 

          <div className="container">
            <div className="flexItem" >
              <label>To Do List</label>
            </div>
            <div className="flexItem" >
              {this.state.todolist.map((todoitem, idx) => (
                  <div className="container" >
                    <input
                      type="text"
                      ref="todoitem"
                      placeholder={`todoitem #${idx + 1} todoname`}
                      value={todoitem.todoname}
                      onChange={this.handleToDoChange(idx)}
                    />
                    <button type="button" className="smallButton" onClick={this.handleRemovetodoitem(idx)}>-</button>
                  </div>
              ))}
            </div>
            <div className="flexItem">
             <button type="button" className="smallButton" onClick={this.handleAddtodoitem}>Add ToDo</button>
            </div> 
          </div>


          <div className="container">
            <div className="flexItem" >
              <label>Guest List</label>
            </div>
            <div className="flexItem" >
              {this.state.guestlist.map((guest, idx) => (
                  <div className="container" >
                    <input
                      type="text"
                      ref="guest"
                      placeholder={`guest #${idx + 1} guestemail`}
                      value={guest.guestemail}
                      onChange={this.handleGuestChange(idx)}
                    />
                    <button type="button" className="smallButton" onClick={this.handleRemoveguest(idx)}>-</button>
                  </div>
              ))}
            </div>
            <div className="flexItem">
              <button type="button" className="smallButton" onClick={this.handleAddguest}>Add Guest</button>
            </div>
          </div>

          <div className="container">
            <div className="flexItem">
              <button>Submit</button>
            </div>
          </div>

        </form>
      </div>
    );
  }
}

export default Event;