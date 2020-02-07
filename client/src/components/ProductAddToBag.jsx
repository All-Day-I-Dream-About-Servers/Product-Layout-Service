import React, { Component } from 'react'
import ReactModal from 'react-modal';

const customStyles = {
  content : {
    top                   : '20%',
    left                  : '20%',
    right                 : '20%',
    bottom                : 'auto',
    padding: '20px',
    'border-radius': '0%'
  }
};

export default class ProductAddToBag extends Component {

  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
      hover: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleAlert = this.handleAlert.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  handleOpenModal (e) {
    e.preventDefault()
    this.setState({ showModal: true })
  }

  handleCloseModal (e) {
    e.preventDefault()
    this.setState({ showModal: false });
  }

  handleAlert (e){
    e.preventDefault()
    if(this.props.selectedSize === 'Select Size' && this.props.selectedQuantity === 0){
      alert('selct size and quantity; need a change later')
    } else if(this.props.selectedSize === 'Select Size'){
      alert('select size; need a change later')
    } else if(this.props.selectedQuantity === 0){
      alert('select quantity; need a change later')
    }
  }

  handleHover (e) {
    e.preventDefault()
    this.setState({
      hover: !this.state.hover
    })
  }

  render() {
    const {name, price, colors, sizes, images} = this.props.product;
    const quantity = this.props.selectedQuantity;
    const size = this.props.selectedSize;
    var productCost = quantity * price;
    var deliveryCost = 4.99;
    var totalCost = productCost + deliveryCost
    if(productCost >= 49){
      deliveryCost = 'FREE';
      totalCost = productCost
    }
    return (
      <div id="bag_button_box">
          {(quantity === 0 || size ==='SELECT SIZE')?
          (<button id="bag_button" onClick={this.handleAlert}>
            <div id="bag_button_txt">ADD TO BAG</div>
            <div></div>
            <div id="bag_button_icon">
            <svg id="arrow-right-long" viewBox="0 -5 30 30" >
                  <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
              </svg>
            </div>
          </button>)
          :
          (<button id="bag_button" onClick={this.handleOpenModal}>
          <div id="bag_button_txt">ADD TO BAG</div>
          <div></div>
          <div id="bag_button_icon">
          <svg id="arrow-right-long" viewBox="0 -5 30 30" >
                <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
            </svg>
          </div>
        </button>)}


          <ReactModal isOpen={this.state.showModal} style={customStyles} overlayClassName="Overlay" modalImageClassName="modalImage_open">

                <button onClick={this.handleCloseModal} id="mainModalButton">
                  <span id="closeButton_x">✕</span>
                </button>

            <div id="bag_container">
                <div className="info_head">
                  SUCCESSFULLY ADDED TO BAG!
                </div>
                <div id="bag_div">
                  <div id="bag_div_left">

                    <div id="bag_left_sep">
                      <div id="bag_left_left">
                        <div id="bagImg">
                          <img id="bagImg" src=''/>
                        </div>
                      </div>
                      <div id="bag_left_right">
                        <div id="bag_left_right_content">
                          <div id="bag_name">{name}</div>
                          <div id="bag_body">${price}</div>
                          <div id="bag_body">
                            Color: {colors[0]}<br/>
                            Size: {size}<br/>
                            Quantity: {quantity}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="bag_div_right">
                    <div id="bag_right_sep">
                      <div id="your_bag">Your Bag</div>
                      <div id="bag_quan">{quantity} items</div>
                      <div id="bag_price_rows">
                        <div id="bag_price_left">
                          <div>
                            <span id="bag_body">Total Product Cost:</span><br/>
                            <span id="bag_body">Total delivery Cost:</span>
                          </div>
                        </div>
                        <div id="bag_price_right">
                          <div>
                            <span id="bag_body">${productCost}</span> <br/>
                            {typeof deliveryCost === 'string' ? (<span id="bag_body">{deliveryCost} </span>) :
                            (<span id="bag_body">${deliveryCost}</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div id="divider"></div>
                      <div id="bag_price_rows2">
                        <div id="bag_price_left">
                          <span><strong id="bag_total">Total:</strong></span>
                        </div>
                        <div id="bag_price_right">
                          <span id="bag_total_cost"><strong>${totalCost}</strong></span>
                        </div>
                      </div>
                      <div id="bag_out">
                        <span id="bag_body">
                          <dt id="bag_option">installment options</dt>
                          <span id="bag_parah">
                        or 3 interest-free payments of ${(totalCost / 3).toFixed(2)} with Affirm.
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="bagFlexBoxright">
                      <div>-------------------------------------------------------</div>
                      <button>VIEW BAG
                        <a>(to bag page)</a>
                      </button><br/>
                      <button>GO TO CHECKOUT
                        <a>(to checkout page)</a>
                      </button>
                    </div>
                  </div>
              </div>
            </div>
          </ReactModal>
      </div>
    )
  }
}
