import React from 'react';
// import ImagePopup from './ImagePopup.jsx'
import ImageModal from './ImageModal.jsx'
import Magnify from './Magnify.jsx'

class ProductView extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }


  render(){

    const {images} = this.props.product

    return (
      <div>
        <div>
          <ImageModal images={images}/>
        </div>
      </div>
    )
  }
}

export default ProductView;



