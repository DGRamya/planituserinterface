import React, { Component } from "react";

import axios from "axios";
import logo from "./eventPlanning.jpg";

const formStyle = {
  paddingLeft: "300px",
  paddingTop: "20px"
};

const welcomeStyle = {
  color: "blue",
  fontSize: "35px"
};

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
  height: "70%",
  width: "75%",
  align: "center"
};

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isSubmitted: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();

    const formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }

    console.log("formData :: ",formData);

    var loginData = {};
    loginData["email"] = formData["useremail"];
    loginData["password"] = formData["userpassword"];

    axios
      .post("http://localhost:8080/login", loginData, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          crossDomain: true
        }
      })
      .then(
        function(res) {
          console.log(res);
          this.setState({ isSubmitted: true });
        }.bind(this)
      )
      .catch(function(err) {
        alert("Invalid credentials");
        console.log(err);
      });
    event.target.reset();
  };

  render() {
    const { isSubmitted } = this.state;
    return (
      <div>
        {!isSubmitted ? (
          <div className="container">
            <h2>User Login</h2>
            <form onSubmit={this.handleSubmit} style={formStyle}>
              <div className="form-group row">
                <label className="col-sm-2">Email</label>
                <div className="col-sm-4 float-sm-left">
                  <input
                    type="text"
                    required
                    className="email"
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
                    className="password"
                    ref="userpassword"
                  />
                </div>
              </div>
              <div className="form-group row form-btn">
                <div className="col-sm-7">
                  <button
                    type="submit"
                    className="btn btn-primary mb-2 btn-color"
                  >
                    Login
                  </button>
                </div>
              </div>
              <div className="col-sm-5" />
            </form>
          </div>
        ) : (
          <div className="welcome" style={{ backgroundColor: "white" }}>
            <img src={logo} style={imgStyle} />
          </div>
        )}
      </div>
    );
  }
}

export default LoginPage;
