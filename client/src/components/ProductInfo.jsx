import React from 'react';
import ProductView from './ProductView.jsx'
import ProductOrder from './ProductOrder.jsx'

const ProductInfo = (props) => {

  var arr = [1, 2, 12, 30, 96];
  var randomIndex = () => Math.floor(Math.random() * Math.floor(5));
  var aIndex = randomIndex();
  var selected = arr[props.sku % 5]; // this is for products that have 5 pictures, so use this for presentation 
  var selected2 = parseInt(props.sku) // if you want to render the product that matches sku that you are putting on url, use this.
  return(
    <div>
      {/* {props.product.sku !== selected1 ? */}
      {props.product.sku !== selected2 ?
        null : (
        <div  className="container">
          <div className="left">
            <ProductView product={props.product}/>
          </div>
          <div className="right">
            <ProductOrder product={props.product}/>
          </div>
        </div>
      )}
    </div>
  )
}


export default ProductInfo;