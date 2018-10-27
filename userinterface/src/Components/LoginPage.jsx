import React, { Component } from "react";

import axios from "axios";

const formStyle = {
  paddingLeft: "300px",
  paddingTop: "20px"
};
class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();

    const formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }
    console.log("-->", formData);

    // axios
    //   .post("http://localhost:8080/userLogin", user, {
    //     headers: { crossDomain: true }
    //   })
    //   .then(function(res) {
    //     console.log(res);
    //     //Route to welcome page
    //   })
    //   .catch(function(err) {
    //     alert("Inavlid credentials");
    //     console.log(err);
    //   });
    event.target.reset();
  };

  render() {
    return (
      <div className="container">
        <h2>User Login</h2>
        <form onSubmit={this.handleSubmit} style={formStyle}>
          <div className="form-group row">
            <label className="col-sm-2">Email</label>
            <div className="col-sm-4 float-sm-left">
              <input
                type="text"
                required
                className="form-control"
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
                className="form-control"
                ref="userpassword"
              />
            </div>
          </div>
          <div className="form-group row form-btn">
            <div className="col-sm-7">
              <button type="submit" className="btn btn-primary mb-2 btn-color">
                Login
              </button>
            </div>
          </div>
          <div className="col-sm-5" />
        </form>
      </div>
    );
  }
}

export default LoginPage;
