import React from 'react';
import ImageModal from './ImageModal.jsx'
import Magnify from './Magnify.jsx'

const ProductView = (props) => {

  const {images} = props.product

  return (
    <div>
      <div>
        <ImageModal images={images}/>
      </div>
    </div>
  )
}

export default ProductView;



