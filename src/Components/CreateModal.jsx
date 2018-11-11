import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
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
const buttonStyle = {
  width: "40%",
  backgroundColor: "#F17070",
  border: "0px",
  marginLeft: "25%"

}
class CreateModal extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.yesModal = this.yesModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00'

  }

  yesModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.yesModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Are you sure?</h2>
          <button style={buttonStyle} onClick={this.yesModal}>Yes</button>
        </Modal>
      </div>
    );
  }
}

export default CreateModal
