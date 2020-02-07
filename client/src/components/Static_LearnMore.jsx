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

export default class Static_LearnMore extends Component {

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
        <div className="popup" onClick={this.handleOpenModal}><span id="learnmore">Learn More</span></div>
          <ReactModal
            isOpen={this.state.showModal}
            style={customStyles}
            overlayClassName="Overlay"
            onRequestClose={this.handleCloseModal}
            >
            <button onClick={this.handleCloseModal} id="mainModalButton">
             <span id="closeButton_x">✕</span>
            </button>
            <div id="learnModalWrap">
              <div>
                <div className="info_head">
                  GET YOUR PURCHASE NOW, PAY OVER TIME
                </div>
                <div className="info_body">
                  or 3 interest-free payments of ${(this.props.price/ 3).toFixed(2)} with Affirm. <br />
                  <br />
                  Pay monthly without interest. Your purchase is split into three payments. There's no interest – and never any hidden fees.
                  Just select Affirm at checkout​.
                  Just a few pieces of information is all it takes to get a real-time decision.​ <br />
                  <br />
                  Subject to eligibility check and approval. Estimated payment amount excludes taxes and shipping fees. Payment options are provided by Cross River Bank, a New Jersey State Chartered Commercial Bank, Member FDIC.​
                </div>
              </div>
            </div>
          </ReactModal>
      </div>
    )
  }
}

