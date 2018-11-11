import React, { Component } from "react";

import "./App.css";
import Header from "./Components/Header";
import LoginPage from "./Components/LoginPage";
import Registration from "./Components/Registration";
import Welcome from "./Components/Welcome";
import Event from "./Components/Event";
import About from "./Components/About";
import Home from "./Components/Home";
import ListEvents from "./Components/ListEvents";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Header/>
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
            path="/home"
            render={() => (
              <div className="App">
                <Home />
              </div>
            )}
          />
          <Route
            path="/event"
            render={() => (
              <div className="App">
                <Event />
              </div>
            )}
          />
          <Route
            path="/about"
            render={() => (
              <div className="App">
                <About />
              </div>
            )}
          />
          <Route
            path="/registration"
            render={() => (
              <div className="App">
                <Registration />
              </div>
            )}
          />
          <Route
            path="/login"
            render={() => (
              <div className="App">
                <LoginPage />
              </div>
            )}
          />
          <Route
            path="/listevents"
            render={() => (
              <div className="App">
                <ListEvents />
              </div>
            )}
          />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
