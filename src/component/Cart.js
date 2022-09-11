import React, { Component } from "react";
import axios from "axios";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import "../css/cart.css";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  getCart = async () => {
    const res = await axios.get(`${process.env.REACT_APP_HEROKU}/cart`);
    this.setState({
      cart: res.data,
    });
    // console.log(this.state.cart);
  };

  deleteCart = async (id) => {
    await axios.delete(`${process.env.REACT_APP_HEROKU}/cart/${id}`);
    this.getCart();
    // console.log(id);
  };

  componentDidMount() {
    console.log("we are inside componentDidMount");
    this.getCart();
  }


  render() {
    return (
      <div className="cart-body">
        <div className=" text-center ">
          <MDBTypography tag="h3" className=" fw-normal mb-5  cartTitle" >
            Shopping Cart
          </MDBTypography>
        </div>

        {this.state.cart.map((item, idx) => (
          <MDBContainer className="h-10 " key={idx}>
            <MDBRow className="justify-content-center align-items-center h-10 ">
              <MDBCol md="10" >
                <MDBCard className="rounded-3 mb-4 cartItem">
                  <MDBCardBody className="p-4 box cartCart">
                    <MDBRow className="justify-content-between align-items-center">
                      <MDBCol md="2" lg="2" xl="2">
                        <MDBCardImage
                          className="rounded-3"
                          fluid
                          src={item.imgURL}
                          alt={this.title}
                        />
                      </MDBCol>
                      <MDBCol md="3" lg="3" xl="3">
                        <p className="lead fw-normal mb-2">{item.title}</p>
                        <p>{item.price} JD</p>
                      </MDBCol>
                      <MDBCol
                        md="3"
                        lg="3"
                        xl="2"
                        className="d-flex align-items-center justify-content-around"
                      >
                        <MDBBtn color="Beige" className="px-2">
                          <MDBIcon fas icon="minus" color="black" />
                        </MDBBtn>

                        {/* <MDBInput min={0} defaultValue={2} type="number" size="sm" /> */}

                        <MDBBtn color="#F0EBE3" className="px-2">
                          <MDBIcon fas icon="plus" color="black" />
                        </MDBBtn>
                      </MDBCol>
                      <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                        <MDBTypography tag="h5" className="mb-0" >
                          <p>{item.price} JD</p>
                        </MDBTypography>
                      </MDBCol>
                      <MDBCol md="1" lg="1" xl="1" className="text-end">
                        <a href="#!" className="text-danger">
                          <MDBIcon
                            fas
                            icon="trash text-danger"
                            size="lg"
                            color="black"
                            onClick={() => this.deleteCart(item._id)}
                          />
                        </a>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        ))}
        {/* <MDBCard className="mb-1">
          <MDBCardBody className="p-4 d-flex flex-row">
            <MDBBtn
              outline
              size="lg"
              className="position-absolute top-0 start-50 translate-middle badge border  rounded-circle  p-2"
            >
              Purchase
            </MDBBtn>
          </MDBCardBody>
        </MDBCard> */}
      </div>
    );
  }
}