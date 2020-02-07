import React from 'react';
import Static_LearnMore from './Static_LearnMore.jsx'
import Static_PayPal from './Static_PayPal.jsx'
import Static_Shipping from './Static_Shipping.jsx'
import Static_SizeGuide from './Static_SizeGuide.jsx'
import ProductAddToBag from './ProductAddToBag.jsx'

class ProductOrder extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
      selectedSize: 'SELECT SIZE',
      selectedQuantity: 0,
      favorite: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  handleOpenModal (e) {
    e.preventDefault()
    this.setState({ showModal: true });
  }

  handleCloseModal (e) {
    e.preventDefault()
    this.setState({ showModal: false });
  }

  handleSelect (e){
    e.preventDefault()
    this.setState({
      [e.target.name] : e.target.value
    }, ()=> console.log(`size: ${this.state.size} quantity: ${this.state.quantity}`))
  }

  handleFavorite(e){
    e.preventDefault()
    this.setState({
      favorite : !this.state.favorite
    })
  }

  render(){

    const {name, price, color, sizes, images} = this.props.product
    const quantities = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const availColor = images[5]
    return (
      <div className="orderContainer">



        <div>
          <div className="orderDiv1">
            <div>

              <div className="popup">stars
                <span id="mc_review">Read all #ofReviews reviews</span>
              </div>

              <div id="subName">
                <span>ORIGNALS</span>
              </div>

              <h1 id="productName">
                <strong>
                  {name}
                </strong>
              </h1>

              <div id="price">
                <span>${price}</span>
              </div>

            </div>

            <div id="installment">
              <span id="learn_1">
                or 3 intrest-free payments of
                <strong id="priceStrong"> ${(price/3).toFixed(2)} </strong>
                with Affirm.
              </span>
              <div id="learn_2">
                <Static_LearnMore price={price} />
              </div>
            </div>
          </div>
          <div id="promo">
            <span>This Product is excluded from all promotional discounts and offers.</span>
          </div>
        </div>



        <div className="orderDiv2">
          <div><strong id="aColors">AVAILABLE COLORS</strong></div>
          <div><span id="subName">{color.join(' / ')}</span></div>
          <div id="availColors">
            {images.map((image, index) => {
              var ind = index;
              return (
                <div id="availColors_img_box">
                  { index === 0 ? (<div id="color_icon">
                    <svg id="color_icon_svg" viewBox="0 0 17 19"><path fill="none" color="white" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" d="M1.5 10.5l4 4 10-10"></path></svg>
                  </div>) : (<div> </div>)
                  }
                  <img id="availColors_img" src={image}/>
                </div>
              )
            })}
          </div>
        </div>


        <div className="orderDiv3">

          <div id="sizeguide">
                <Static_SizeGuide />
          </div>

          <div id="selection">

            <div id="selection_size_box">
              <div id="selection_size_dropdown_box">

                <div id="selection_size_dropdown"></div>

              </div>
            </div>

            <div id="selection_quan_box">
              <div id="selection_quan_dropdown_box">
                <div id="selection_size_dropdown" >

                <button id="quan_drop_button">
                  <span>
                    {/* it will display selected quantity */}
                  </span>
                  <svg>
                    {/* drop arrow / up arrow */}
                  </svg>
                </button>

                <div id="quan_drop_box">
                  {/* <ul id="quan_drop_list">
                    {quantities.map((quantity, index) =>
                      <li id="quan_num_box" value={quantity} key={index}> */}
                        {/* it will hold quantity lists
                          each li will have a button that selects a quantity on the list
                        */}
                        {/* <button id="quan_num_box" value={quantity} key={index}>{quantity}</button>
                      </li>
                    )}
                  </ul> */}
                </div>

                {/* <select id="quan_list" name="selectedQuantity" onChange={this.handleSelect} >
                  {quantities.map((quantity, index) =>
                    <option value={quantity} key={index}>{quantity}</option>
                  )}
                </select> */}

                </div>
              </div>
            </div>


            {/* <select name="selectedSize" onChange={this.handleSelect}>
                SELECT SIZE
                {sizes.map((size, index)=>
                  <option value={size} key={index}>{size}</option>
                )}
            </select>
            <select name="selectedQuantity" onChange={this.handleSelect}>
                  {quantities.map((quantity, index) =>
                    <option value={quantity} key={index}>{quantity}</option>
                  )}
            </select> */}



          </div>
          {/*  */}
          {/* <select name="selectedSize" onChange={this.handleSelect}>
                SELECT SIZE
                {sizes.map((size, index)=>
                  <option value={size} key={index}>{size}</option>
                )}
            </select>
            <select name="selectedQuantity" onChange={this.handleSelect}>
                  {quantities.map((quantity, index) =>
                    <option value={quantity} key={index}>{quantity}</option>
                  )}
            </select> */}


          <div id="bagAndFavorite">
            <ProductAddToBag product={this.props.product} selectedQuantity={this.state.selectedQuantity} selectedSize={this.state.selectedSize}/>
              <div id="fav" onClick={this.handleFavorite}>
                { this.state.favorite ?
                (<div id="fav_icon">
                <svg viewBox="-14 -13 48 48"><path fill="black" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" d="M7.38 6H4.42L2 10l8 8 8-8-2.41-4h-2.98L10 9 7.38 6z"></path></svg>
              </div>) : (<div id="fav_icon">
                <svg viewBox="-14 -13 48 48"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" d="M7.38 6H4.42L2 10l8 8 8-8-2.41-4h-2.98L10 9 7.38 6z"></path></svg>
              </div>)}
            </div>
          </div>

          <div id="shippingBox">
            <Static_Shipping />
          </div>

          <div id="paypalBox">
            <Static_PayPal />
          </div>
        </div>

      </div>
    )
  }
}

export default ProductOrder

