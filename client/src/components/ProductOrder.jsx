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
      // selectedSize: 'SELECT SIZE',
      // selectedQuantity: 0,
      favorite: false,
      sizeSelected : 'SELECT SIZE',
      quanSelected: 1,
      sizeDropOpen: false,
      quanDropOpen: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);

    this.handleSizeDropdown = this.handleSizeDropdown.bind(this)
    this.handleQuanDropdown = this.handleQuanDropdown.bind(this)
    this.handleSizeSelect = this.handleSizeSelect.bind(this)
    this.handleQuanSelect = this.handleQuanSelect.bind(this)
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


  handleSizeDropdown(e){
    e.preventDefault()
    if(this.state.quanDropOpen){
      this.setState({
        quanDropOpen : !this.state.quanDropOpen,
        sizeDropOpen : !this.state.sizeDropOpen
      })
    } else {
    this.setState({
      sizeDropOpen : !this.state.sizeDropOpen
    })}
  }

  handleQuanDropdown(e){
    e.preventDefault()
    if(this.state.sizeDropOpen){
      this.setState({
        quanDropOpen : !this.state.quanDropOpen,
        sizeDropOpen : !this.state.sizeDropOpen
      })
    } else {
      this.setState({
        quanDropOpen : !this.state.quanDropOpen
      })
    }
  }

  handleSizeSelect(sz){
    this.setState({
      sizeSelected : sz
    }, ()=> console.log(this.state.sizeSelected))
  }


  handleQuanSelect(qt){
    this.setState({
      quanSelected : qt
    }, ()=> console.log(this.state.quanSelected))
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
    const {name, price, color, size, images, colorImages, review} = this.props.product
    const quanOption = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const availColor = images[5]
    return (
      <div className="orderContainer">



        <div>
          <div className="orderDiv1">
            <div id="review_name_box">
              <div id="review_box">
                <div id="star_box">
                  <svg className="stars" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" data-di-res-id="110c95ee-8fb3a8b3" data-di-rand="1581107329323">
                          <path class="gl-star-rating__outline" fill="black" stroke="currentColor" stroke-miterlimit="10" d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"></path>
                  </svg>
                  <svg className="stars" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" data-di-res-id="110c95ee-8fb3a8b3" data-di-rand="1581107329323">
                          <path className="gl-star-rating__outline" fill="black" stroke="currentColor" stroke-miterlimit="10" d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"></path>
                  </svg>
                  <svg className="stars" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" data-di-res-id="110c95ee-8fb3a8b3" data-di-rand="1581107329323">
                          <path className="gl-star-rating__outline" fill="black" stroke="currentColor" stroke-miterlimit="10" d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"></path>
                  </svg>
                  <svg className="stars" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" data-di-res-id="110c95ee-8fb3a8b3" data-di-rand="1581107329323">
                          <path className="gl-star-rating__outline" fill="black" stroke="currentColor" stroke-miterlimit="10" d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"></path>
                  </svg>
                  <svg className="stars" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" data-di-res-id="110c95ee-8fb3a8b3" data-di-rand="1581107329323">
                          <path className="gl-star-rating__outline" fill="none" stroke="currentColor" stroke-miterlimit="10" d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"></path>
                  </svg>
                </div>
                <span id="mc_review">Read all {review} reviews</span>
                <a></a>
              </div>

              <div id="subName">
                <span>ORIGNALS</span>
              </div>
              {/* <div> */}
              <div id="productName">
                  <div>{name}</div>
              </div>
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
{/* ------------------------------------------------------------------ */}

          <div id="selection">

            <div id="selection_size_box">
              <div id="selection_size_dropdown_btn" onClick={this.handleSizeDropdown}>
                {/* click this btn will open the size dropdown
                  when click trigger
                */}
                <span id="size_txt">
                  {this.state.sizeSelected}
                {/* string showing here will be the size selected */}
                </span>
                <div id="caret">
                  {/* conditional rendering when clicked handleSizeDropdown*/}
                  {this.state.sizeDropOpen ? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 3 20 20"><path color="black" d="M12 16c.273 0 .521-.11.702-.288l5.005-5.005a1 1 0 00-1.414-1.414L12 13.586 7.705 9.29a1 1 0 00-1.412 1.417l4.98 4.98c.182.193.44.313.727.313z"/></svg>) : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 3 20 20"><path color="black" d="M12 8a.997.997 0 00-.702.288l-5.005 5.005a1 1 0 001.414 1.414L12 10.415l4.295 4.295a1 1 0 001.412-1.417l-4.98-4.98A.997.997 0 0012 8z"/></svg>)}
                </div>
              </div>
              {this.state.sizeDropOpen ? (
                <div id="selection_size_dropdown_box">
                  {/* conditional rendering when clicked */}
                  {size.map((sz =>
                    <div className="drop_size_content_box">
                    <div id="drop_size" onClick={()=>this.handleSizeSelect(sz)} name={sz} value={sz}>
                      {sz}
                    </div>
                  </div>
                  ))} </div>) :
                (null)}

            </div>

{/* ------------------------------------------------------------------ */}


            <div id="selection_quan_box">
              <div id="selection_quan_dropdown_btn" onClick={this.handleQuanDropdown}>
                <span>
                  {/* it will display selected quantity */}
                  {this.state.quanSelected}
                  {/* number showing here will be the quan selected */}
                </span>
                <div></div>
                <div id="caret">
                  {this.state.quanDropOpen ? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 3 20 20"><path color="black" d="M12 16c.273 0 .521-.11.702-.288l5.005-5.005a1 1 0 00-1.414-1.414L12 13.586 7.705 9.29a1 1 0 00-1.412 1.417l4.98 4.98c.182.193.44.313.727.313z"/></svg>) : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 3 20 20"><path color="black" d="M12 8a.997.997 0 00-.702.288l-5.005 5.005a1 1 0 001.414 1.414L12 10.415l4.295 4.295a1 1 0 001.412-1.417l-4.98-4.98A.997.997 0 0012 8z"/></svg>)}
                </div>
              </div>
                {this.state.quanDropOpen ? (
                <div id="quan_drop_box" onClick={this.handleQuanDropdown}>
                  {quanOption.map(qt =>
                      <div id="drop_quan" onClick={() => this.handleQuanSelect(qt)}>
                        <span id="quan_txt">
                          {qt}
                        </span>
                      </div>
                    )}
              </div>
                ) : (null)}

            </div>





          </div>

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

