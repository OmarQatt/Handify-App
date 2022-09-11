import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "./ProductCard";
import AddItemForm from "./AddItemForm";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handify: [],
    };
  }

  getProduct = async () => {
    const res = await axios.get(`${process.env.REACT_APP_HEROKU}/item`);
    this.setState({
      handify: res.data,
    });
    // console.log(this.state.handify);
  };

  componentDidMount() {
    console.log("we are inside componentDidMount");
    this.getProduct();
  }

  deleteProduct = async (id) => {
    await axios.delete(`${process.env.REACT_APP_HEROKU}/item/${id}`);
    this.getProduct();
    console.log(id);
  };

  createProduct = async (e) => {
    e.preventDefault();
    const newItem = {
      title: e.target.itemTitle.value,
      description: e.target.itemdes.value,
      price: e.target.itemPrice.value,
      imgURL: e.target.itemImg.value,
    };
    await axios.post(`${process.env.REACT_APP_HEROKU}/item`, { newItem });
    this.getProduct();
  };

  

  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <AddItemForm submitHandler={this.createProduct} />
        <button onClick={this.getProduct}>Get item Data</button>

        <ProductCard
          deleteProduct={this.deleteProduct}
          itemData={this.state.handify}
          getProduct={this.getProduct}
        />

      </>
    );
  }
}

export default Product;
