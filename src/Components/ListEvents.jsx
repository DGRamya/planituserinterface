import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
class ListEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventList : ''
    };
    this.handleClick = this.handleClick.bind(this);
  }
    // handleClick(){
    //   axios.get(url).then(
    //     response =>
    //     this.setState({eventList:response.data})
    //   )
    // }

    handleClick(e) {
    var myurl = "http://localhost:8080/events/myevents/?userid=7d010daf-3795-450c-beb1-e246ff8ff851";

    e.preventDefault();
    this.setState({
     // eventList : this.refs.data
     const str = [{"eventname":"Test Event","venue":"IMU"},{"eventname":"Thanksgiving","venue":"IMU"}];
     eventList: JSON.parse(str);
   });
 };
  render() {
    return (
      <div>
      {
          Object.keys(this.props.eventList).map((e, i) => {
              return <Jumbotron subText="this is the subtext" displayState="true"/>
          })
      }
      </div>
    );
  }
}

export default ListEvents;
