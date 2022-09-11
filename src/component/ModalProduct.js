import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from "react-bootstrap/Card";
import ProductCardHome from './ProductCardHome';
import axios from 'axios'
class ModalProduct extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        show:false,
        cart: [],
    }
   
  }
  openModal() {
    this.setState( prevState => (
    {show: !prevState.show}))
  }
  closeModal(e) {
    
      this.setState({show: false})
    
  }
  getCart = async () => {
    const res = await axios.get(`${process.env.REACT_APP_HEROKU}/cart`);
    this.setState({
      cart: res.data,
    });
    // console.log(this.state.cart);
  };

  createCart = async (e) => {
    e.preventDefault();
    const newCart = {
      title: this.props.itemData.title,
      description: this.props.itemData.description,
      price: this.props.itemData.price,
      imgURL: this.props.itemData.imgURL,
    };
    await axios.post(`${process.env.REACT_APP_HEROKU}/cart`, { newCart });
    this.getCart();
    // console.log(newCart)
  };

        render() {
          
        return(
            <>
            <ProductCardHome itemData={this.props.itemData} getProduct={this.props.getProduct} showModal={() => this.openModal()}/>
            
      
            <Modal show={this.state.show} onHide={this.state.showset} >
        <Modal.Header closeButton onClick={(e) => this.closeModal(e)}>
         
         </Modal.Header>
              <Card.Img src={this.props.itemData.imgURL} width="200" closeButton onClick={(e) => this.closeModal(e)}/>
          <Card.Body>
            <Card.Title style={{ color: "black" }}>
              {this.props.itemData.title}
            </Card.Title>
            <Card.Text style={{ color: "black" }}>
              {this.props.itemData.description}
            </Card.Text>
            <Card.Text style={{ color: "black" }}>
              {this.props.itemData.price} JD
            </Card.Text>
            <Button variant="secondary" onClick={(e) => this.closeModal(e)}>
                  Close
                </Button>

            <Button onClick={this.createCart} className="cartBtn">Add to Cart</Button>
          </Card.Body>
            </Modal>
          </>
        )
      
        } 
      }   
      export default ModalProduct; 

     