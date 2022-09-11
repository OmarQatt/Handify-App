import React from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import AddItemForm from "./AddItemForm";
import Button from "react-bootstrap/Button";

import "../css/homePage.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [],
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

  deleteProduct = async (id) => {
    await axios.delete(`${process.env.REACT_APP_HEROKU}/item/${id}`);
    this.getProduct();
    // console.log(id);
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

  getUser = async () => {
    const res = await axios.get(`${process.env.REACT_APP_HEROKU}/user`);
    this.setState({
      userInfo: res.data,
    });
  // console.log(this.state.userInfo);
  };

  componentDidMount() {
    // console.log("we are inside componentDidMount");
    this.getUser();
    this.getProduct();
  }

  createUser = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.userName.value,
      email: e.target.userEmail.value,
      password: e.target.userPassword.value,
    };
    console.log(data);

    await axios.post(`${process.env.REACT_APP_HEROKU}/user`, { data });
    this.getUser();
  };

  updateUser = async (e) => {
    e.preventDefault();
    const id = this.userInfo._id;
    const data = {
      name: e.target.userName.value,
      email: e.target.userEmail.value,
      password: e.target.userPassword.value,
    };
    await axios.put(`${process.env.REACT_APP_HEROKU}/user/${id}`, { data });
    this.getUser();
    console.log(this.state.userInfo._id);
  };

  setLoginUser = async () => {
    this.props.setLoginUser();
  };




  render() {
    return (
      <div className="login-body">
        <section className="row text-secondary my-3">
          
          <div className="product">
            <>
              <h1 className="contactTxt">My Products</h1>
                <div className="profileButtons">
                  <AddItemForm submitHandler={this.createProduct} />
                  <Button className="cartBtn" onClick={this.setLoginUser}>Logout</Button>
                </div>
                <div className="">
              <ProductCard
                deleteProduct={this.deleteProduct}
                itemData={this.state.handify}
                getProduct={this.getProduct}
              />
              </div>
            </>
          </div>
        </section>
      </div>
    );
  }
}

export default Profile;
