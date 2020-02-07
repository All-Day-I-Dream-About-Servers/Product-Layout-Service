import React from 'react';
import ProductView from './ProductView.jsx'
import ProductOrder from './ProductOrder.jsx'


const ProductInfo = (props) => (
  <div className="container">
    <div className="left">
      <ProductView product={props.product}/>
    </div>
    <div className="right">
      <ProductOrder product={props.product}/>
    </div>
  </div>
)

export default ProductInfo;