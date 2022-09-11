import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";

import "../css/homePage.css";

export default class ProductCardHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favClickCounter: this.props.itemData.likes,
      cart: [],
    };
  }

  favClick = () => {
    this.setState({
      favClickCounter: this.state.favClickCounter + 1,
    });

    const id = this.props.itemData._id;
    const data = {
      likes: this.state.favClickCounter,
    };
    axios.put(`${process.env.REACT_APP_HEROKU}/item/${id}`, { data });
    // this.props.getProduct();
  };


  render() {
    return (
      <div className="" >
    
        <Card className="allcard">

          <Card.Img className="cardImg" src={this.props.itemData.imgURL} onClick={this.props.showModal}/>

          <Card.Body className="allcardbody" >
            <Card.Title >{this.props.itemData.title}</Card.Title>
            <Card.Text >{this.props.itemData.description}</Card.Text>
            <Card.Text >{this.props.itemData.price} JD</Card.Text>
            <Button className="cartBtn" onClick={this.favClick}><i className="far fa-heart"></i> {this.state.favClickCounter}</Button>
            <Button onClick={this.props.createCart} className="cartBtn">Add to Cart</Button>  
          </Card.Body>

        </Card>

      </div>
    );
  }
}
