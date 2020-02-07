import React, { Component } from 'react'
import ReactModal from 'react-modal';

const customStyles = {
  content : {
    top                   : '40%',
    left                  : '20%',
    right                 : '20%',
    bottom                : 'auto',
    padding: '20px',
    'border-radius': '0%'
  }
};

export default class Static_PayPal extends Component {

  constructor () {
    super();
    this.state = {
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal (e) {
    e.preventDefault()
    this.setState({ showModal: true });
  }

  handleCloseModal (e) {
    e.preventDefault()
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <div id="check_box">
          <div id="check_icon">
            <svg id="usp-checkmark" viewBox="0 0 17 19"><path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" d="M1.5 10.5l4 4 10-10"></path></svg>
          </div>
          <div className="popup">
            <span onClick={this.handleOpenModal}>Buy now, pay over time with PayPal CREDIT</span>
          </div>
        </div>
        <ReactModal
            isOpen={this.state.showModal}
            style={customStyles}
            overlayClassName="Overlay"
            onRequestClose={this.handleCloseModal}
            >
          <button onClick={this.handleCloseModal} id="mainModalButton">
            <span id="closeButton_x">✕</span>
          </button>
          <div>
            <div className="info_head">
              BUY NOW, PAY OVER TIME WITH PAYPAL CREDIT
            </div>
            <div className="info_body">
              Buy now, pay over time with PayPal CREDIT
            </div>
          </div>
        </ReactModal>
      </div>
    )
  }
}
