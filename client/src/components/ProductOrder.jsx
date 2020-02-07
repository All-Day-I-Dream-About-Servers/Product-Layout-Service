import React from 'react';
import Static_LearnMore from './Static_LearnMore.jsx'
import Static_PayPal from './Static_PayPal.jsx'
import Static_Shipping from './Static_Shipping.jsx'
import Static_SizeGuide from './Static_SizeGuide.jsx'
import ProductAddToBag from './ProductAddToBag.jsx'

/*
["https://adidas-product.s3-us-west-1.amazonaws.com/3mc-red.webp", "https://adidas-product.s3-us-west-1.amazonaws.com/adiease-purple-1.webp", "https://adidas-product.s3-us-west-1.amazonaws.com/adizero-beige-1.webp", "https://adidas-product.s3-us-west-1.amazonaws.com/five-ten-orange-1.webp", "https://adidas-product.s3-us-west-1.amazonaws.com/ultraboost-white-1.webp"]

*/



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

            // sku: 0,
        // name: "",
        // price: 0,
        // color: [],
        // sizes : [],
        // review: 0,
        // colorImages : [],
        // images: []
    const {name, price, color, sizes, images, colorImages, review} = this.props.product
    const quantities = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const availColor = images[5]
    return (
      <div className="orderContainer">



        <div>
          <div className="orderDiv1">
            <div>

              <div className="popup">
                <div id="star_box">stars
                <svg class="gl-star-rating__star" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" data-di-res-id="110c95ee-8fb3a8b3" data-di-rand="1581107329323"><linearGradient id="30309a3b-fb78-4376-9c13-6ec4456097b2">
                  <stop offset="0%" stop-opacity="1" style="stop-color: currentcolor;"></stop>
                  <stop offset="100%" stop-opacity="1" style="stop-color: currentcolor;"></stop>
                  <stop offset="100%" stop-opacity="0" style="stop-color: currentcolor;"></stop>
                  <stop offset="100%" stop-opacity="0" style="stop-color: currentcolor;"></stop>
                  </linearGradient>
                  <path class="gl-star-rating__outline" fill="none" stroke="currentColor" stroke-miterlimit="10" d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"></path>
                  <path fill="url(#30309a3b-fb78-4376-9c13-6ec4456097b2)" class="gl-star-rating__fill" stroke="0" d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"></path>
                  </svg>

                </div>
                <span id="mc_review">Read all {review} reviews</span>
              </div>

              <div id="subName">
                <span>ORIGNALS</span>
              </div>
              {/* <div> */}
              <h1 id="productName">
                <strong>
                  {name}
                </strong>
              </h1>
              {/* </div> */}


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

            <div id="availColors_img_box">
              <div id="color_icon">
                <svg id="color_icon_svg" viewBox="0 0 17 19"><path fill="none" color="white" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" d="M1.5 10.5l4 4 10-10"></path></svg>
              </div>
              <img id="availColors_img" src={images[0]}/>
            </div>

            {colorImages.map((image, index) => {
              var ind = index;
              return (
                <div id="availColors_img_box">
                  {/* { index === 0 ? (
                   <div id="color_icon">
                    <svg id="color_icon_svg" viewBox="0 0 17 19"><path fill="none" color="white" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" d="M1.5 10.5l4 4 10-10"></path></svg>
                  </div>
                    ) : (<div> </div>)} */}
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

