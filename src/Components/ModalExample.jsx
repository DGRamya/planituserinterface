import React, { Component } from "react";
import {Button, Modal, ModalBody, ModalControls} from "rivet-react";
import ModalTry from "./ModalTry";
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.onOpenButtonClick = this.onOpenButtonClick.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  render() {
    return (
      <>
        <Button onClick={this.onOpenButtonClick}>Open Modal</Button>
        <Modal
          isOpen={this.state.open}
          title="Modal"
          onDismiss={this.onDismiss}
          style={customStyles}
        >
          <ModalBody>
            <p>Are you sure?</p>
          </ModalBody>
          <ModalControls>
            <Button key="ok">yes</Button>
            <Button key="close" onClick={this.onDismiss}>No, Wait!</Button>
          </ModalControls>
        </Modal>
      </>
    );
  }

  onOpenButtonClick(e) {
    this.setState({
      open: true
    });
  }

  onDismiss(e) {
    this.setState({
      open: false
    });
  }
}

export default ModalExample
