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

export default class Static_Shipping extends Component {

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
        <div id="ship_box" onClick={this.handleOpenModal}>
          <div id='ship_icon'>
              <svg id="usp-delivery" viewBox="0 0 19 19"><g fill="none" stroke="currentColor" stroke-miterlimit="10"><path d="M13.42 13.5H9.5"></path><path stroke-linecap="square" d="M4.5 5.5h10l4 3v5h-2M6.5 13.5h-2m0-6h-4"></path><circle cx="8" cy="13" r="1.5"></circle><circle cx="15" cy="13" r="1.5"></circle><path stroke-linecap="square" d="M1.5 9.5h3m-2 2h2"></path></g></svg>
          </div>
          <div className="popup"><span>FREE SHIPPING OVER $49 + FREE RETURNS & EXCHANGES</span></div>
        </div>



        <ReactModal isOpen={this.state.showModal} style={customStyles} overlayClassName="Overlay" onRequestClose={this.handleCloseModal}>
          <button onClick={this.handleCloseModal} id="mainModalButton">
             <span id="closeButton_x">✕</span>
          </button>
          <div>
            <div className="info_head">
              FREE SHIPPING OVER $49 + FREE RETURNS & EXCHANGES
            </div>
            <div className="info_body">
              FREE SHIPPING OVER $49 + FREE RETURNS & EXCHANGES <br/>
              Spend over $49 and shipping is free! Creators Club members unlock free shipping on any order. Sign up or Login.<br/>
              If you are not completely satisfied with your adidas.com purchase, for any reason, we will offer you a free return or exchange within 30 days of purchase. Some restrictions apply.<br/>
              Check out our Return Policy for more details.
            </div>
            <div className="popup">
              <span className="popup">
                Learn more
                <a href="https://www.adidas.com/us/help?hcid=HCID_RETURN_REFUND"></a>
              </span>
            </div>
          </div>
        </ReactModal>
      </div>
    )
  }
}
