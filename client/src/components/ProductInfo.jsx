import React from 'react';
import ProductView from './ProductView.jsx'
import ProductOrder from './ProductOrder.jsx'

// 1, 2, 12, 30, 96
var arr = [1, 2, 12, 30, 96];
var randomIndex = () => Math.floor(Math.random() * Math.floor(5));
var aIndex = randomIndex();
var selected = arr[aIndex];


const ProductInfo = (props) => {

  return(
    <div>
      {props.product.sku !== selected ?
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