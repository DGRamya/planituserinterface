import React, { Component } from "react";

import "./App.css";
import LoginPage from "./Components/LoginPage";
import Registration from "./Components/Registration";
import Welcome from "./Components/Welcome";
import Event from "./Components/Event";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact={true}
            path="/"
            render={() => (
              <div className="App">
                <Welcome />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/registration"
            render={() => (
              <div className="App">
                <Registration />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/login"
            render={() => (
              <div className="App">
                <LoginPage />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/event"
            render={() => (
              <div className="App">
                <Event />
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
