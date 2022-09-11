import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import EditItemModal from "./EditItem";
import Button from "react-bootstrap/Button";
import "../css/homePage.css";
export default class ProductCard extends Component {


  render() {
    return (
      <div className="productsContainer">

          {this.props.itemData.map((item, idx) => (
            <div key={idx}>
              
              <Card className="allcard">
                <Card.Img src={item.imgURL} className="cardImg" />
                <Card.Body className="allcardbody">

                  <Card.Title style={{ color: "black" }}>{item.title}</Card.Title>
                  <Card.Text style={{ color: "black" }}>{item.description}</Card.Text>
                  <Card.Text style={{ color: "black" }}>{item.price} JD</Card.Text>

                  <EditItemModal allData={item} getProduct={this.props.getProduct}/>

                  <Button className="cartBtn" onClick={() => this.props.deleteProduct(item._id)}>Delete</Button>

                </Card.Body>
              </Card>

            </div>
          ))}
       
      </div>
    );
  }
}



