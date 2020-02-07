import React from 'react';
import axios from 'axios';
import ProductInfo from './ProductInfo.jsx'

// 1, 2, 12, 30, 96
// var arr = [0, 1, 11, 29, 95];
// var randomIndex = () => Math.floor(Math.random() * Math.floor(5));
// var aIndex = randomIndex();
// var selected = arr[aIndex];

// var sampleProduct = this.state.products[selected]
  // console.log(sampleProduct)

        // sku: 0,
        // name: "",
        // price: 0,
        // color: [],
        // sizes : [],
        // review: 0,
        // colorImages : [],
        // images: []

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
        // product: info.data[0]
      }
    ), () => console.log(this.state.product))
    .catch(err => console.log(err))
  }

  render(){
    var productArr = []
    return (<div>
          {/* {this.state.products.map((product, index) =>
              productArr.push(product)
          )} */}
          {this.state.products.map((product, index) =>
            <ProductInfo product={product} sku={this.state.sku}/>
          )}
          {/* {setTimeout(() => <ProductInfo product={this.state.products[0]}/>, 0)} */}
         {/* { this.state.product && <ProductInfo product={this.state.product}/>} */}
      </div>)
  }
}

export default App;