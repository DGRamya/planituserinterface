import React, { Component } from "react";
import PrimaryButton from "./PrimaryButton";
import "./Jumbotron.css";
import { HomeIcon, DeleteIcon} from "./ProjectIcons";
import ModalTry from "./ModalTry";
import ModalExample from "./ModalExample";
import CreateModal from "./CreateModal";
import { Link } from 'react-router-dom';
import { Login } from './LoginPage';
import 'rivet-uits/css/rivet.min.css'
import { Alert } from 'rivet-react'
import planit from "../images/planit.png";

class Jumbotron extends Component {
  render() {
    const imgPath = this.props.img;

    return (
      <div className="jumbotron">
      <div>
        <img src={this.props.image} style={{maxHeight:"40%",width: "70%" }}/>
      </div>
        <h1>{this.props.mainText}</h1>
        <p>{this.props.subText}</p>
        <PrimaryButton buttonText='Learn more' buttonLink={this.props.buttonLink}/>
        {this.props.displayState=="true" ? (
          <div className = "deleteIcon">
            <DeleteIcon />
          </div>
        ) : (
            null
        )
      }
      </div>
    );
  }
}
export default Jumbotron
