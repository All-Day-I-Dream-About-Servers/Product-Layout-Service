import React from 'react';
import axios from 'axios';
import ProductInfo from './ProductInfo.jsx'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      product : {},
      sku: window.location.pathname.slice(1,-1)
    }
    this.getProducts  = this.getProducts.bind(this);
  }

  componentDidMount(){
    this.getProducts();
  }

  getProducts(){
    axios.get(`http://localhost:3002/${this.state.sku}/products`)
    .then((info) =>
      this.setState({
        products: info.data,
      }
    ), () => console.log(this.state.product))
    .catch(err => console.log(err))
  }

  render(){
    var productArr = []
    return (<div>
          {this.state.products.map((product, index) =>
            <ProductInfo product={product} sku={this.state.sku}/>
          )}
      </div>)
  }
}

export default App;