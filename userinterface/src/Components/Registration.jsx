import React, { Component } from "react";

import axios from "axios";

const formStyle = {
  paddingLeft: "300px",
  paddingTop: "20px"
};
class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      email: "",
      password: "",
      confirmpassword: "",
      contact: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();

    const registerDetails = {};
    for (const field in this.refs) {
      registerDetails[field] = this.refs[field].value;
    }
    console.log("-->", registerDetails);

    var bodyFormData = {};

    bodyFormData["name"] = registerDetails["fullname"];
    bodyFormData["emailId"] = registerDetails["useremail"];
    bodyFormData["password"] = registerDetails["userpassword"];
    bodyFormData["contact"] = registerDetails["mobilenumber"];

    axios
      .post("http://localhost:8080/register", bodyFormData, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          crossDomain: true
        }
      })
      .then(function(res) {
        console.log(res);
        alert("Registration successful!");
      })
      .catch(function(err) {
        alert("Invalid credentials");
        console.log(err);
      });
    event.target.reset();
  };

  render() {
    return (
      <div className="container">
        <h2>User Registration</h2>
        <form onSubmit={this.handleSubmit} style={formStyle}>
          <div className="form-group row">
            <label className="col-sm-2">Full Name</label>
            <div className="col-sm-4 float-sm-left">
              <input
                type="text"
                required
                className="form-control"
                ref="fullname"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2">Email</label>
            <div className="col-sm-4 float-sm-left">
              <input
                type="email"
                required
                className="user-email"
                ref="useremail"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2">Password</label>
            <div className="col-sm-4 float-sm-left">
              <input
                type="password"
                required
                className="current-passwrod"
                ref="userpassword"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2">Confirm Password</label>
            <div className="col-sm-4 float-sm-left">
              <input
                type="password"
                required
                className="confirm-password"
                ref="confirmpassword"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2">Mobile Number </label>
            <div className="col-sm-4 float-sm-left">
              <input
                type="tel"
                required
                className="mobile-number"
                ref="mobilenumber"
              />
            </div>
          </div>
          <div className="form-group row form-btn">
            <div className="col-sm-7">
              <button type="submit" className="btn btn-primary mb-2 btn-color">
                Register
              </button>
            </div>
          </div>
          <div className="col-sm-5" />
        </form>
      </div>
    );
  }
}

export default Registration;
