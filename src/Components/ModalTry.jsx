import React, { Component } from "react";
import {Button, Modal, ModalBody, ModalControls} from "rivet-react";

class ModalTry extends React.Component {
  render() {
    return (
      <div>
        <Modal
          isOpen="true"
          title="Modal"
          onDismiss={this.onDismiss}>
          <ModalBody>
            <p>hello</p>
          </ModalBody>
          <ModalControls>
            <Button key="ok">OK</Button>
            <Button key="close" onClick={this.onDismiss}>Close</Button>
          </ModalControls>
        </Modal>

      </div>
    );
  }
}

export default ModalTry
