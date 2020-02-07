import React from 'react';
import axios from 'axios';
import ProductInfo from './ProductInfo.jsx'

// 1, 2, 12, 30, 96
// var arr = [0, 1, 11, 29, 95];
// var randomIndex = () => Math.floor(Math.random() * Math.floor(5));
// var aIndex = randomIndex();
// var selected = arr[aIndex];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      // name: "",
      // price: 0,
      // colors: [],
      // sizes : [],
      // images: []
    }
    this.getProducts  = this.getProducts.bind(this);
  }

  componentDidMount(){
    this.getProducts();
  }

  getProducts(){
    axios.get('http://localhost:3003/api/products')
    .then((info) =>
      this.setState({
        products: info.data,
        // sku: 0,
        // name: "",
        // price: 0,
        // color: [],
        // sizes : [],
        // review: 0,
        // colorImages : [],
        // images: []
      })
    )
    .catch(err => console.log(err))
  }

  render(){
    // {this.state.products.map((product, index) =>
    //   <ProductInfo product={this.state.products[0]}/>
    // )}
    console.log(this.state.products)

    var arr = [0, 1, 11, 29, 95];
    var randomIndex = () => Math.floor(Math.random() * Math.floor(5));
    var aIndex = randomIndex();
    var selected = arr[aIndex];

    var sampleProduct = this.state.products[selected]
    console.log(sampleProduct)
    return(
      <div>
          {this.state.products.map((product, index) =>
            <ProductInfo product={sampleProduct}/>
          )}
          {/* <div>
            <ProductInfo product={sampleProduct}/>
          </div> */}
      </div>
    )
  }
}

export default App;