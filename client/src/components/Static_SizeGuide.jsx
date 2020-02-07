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

export default class Static_SizeGuide extends Component {

  constructor (props) {
    super(props);
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
        <div id="size_box" onClick={this.handleOpenModal}>
          <div id="size_icon">
            <svg id="size-guide" viewBox="0 0 19 19"><g fill="none" stroke="currentColor" stroke-miterlimit="10"><path d="M.5 6.5h18v6H.5z"></path><path stroke-linecap="square" d="M3.5 12.5v-3m3 3v-2m3 2v-3m6 3v-3m-3 3v-2"></path></g></svg>
          </div>
          <div className="popup"><span>Size Guide</span></div>
        </div>
        <ReactModal isOpen={this.state.showModal} style={customStyles} overlayClassName="Overlay" onRequestClose={this.handleCloseModal}>
          <button onClick={this.handleCloseModal} id="mainModalButton">
             <span id="closeButton_x">✕</span>
          </button>
              <div className="info_head">
                SIZE GUIDE
              </div>
              <div className="info_body">
                size guide screen shot will be here
              </div>
        </ReactModal>
      </div>
    )
  }
}
