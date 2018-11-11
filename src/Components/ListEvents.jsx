import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
class ListEvents extends Component {
  render() {
    return (
      <div>
        <Jumbotron mainText="Hello, world!" subText="this is the subtext" displayState="true"/>
        <Jumbotron mainText="Hello, world!" subText="this is the subtext" displayState="true"/>
        <Jumbotron mainText="Hello, world!" subText="this is the subtext" displayState="true"/>
        <Jumbotron mainText="Hello, world!" subText="this is the subtext" displayState="true"/>
        <Jumbotron mainText="Hello, world!" subText="this is the subtext" displayState="true"/>
        <Jumbotron mainText="Hello, world!" subText="this is the subtext" displayState="true"/>
      </div>
    );
  }
}

export default ListEvents;
