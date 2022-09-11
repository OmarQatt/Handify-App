import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Swal from 'sweetalert2'
import "../css/contact.css";
import { AddressMap } from './AddressMap';

import contactus from '../assets/contact4.jpg';


class Contact extends Component {

  onClick = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: `Message Sent!`,
      text: `Thank you for reaching out!`,
      confirmButtonColor: "#7D9D9C",
  });
  }

  render() {
    return (
      <div className="contact">

        <img src={ contactus } alt="contactus" className="contactUsImg" />

        <div className="contactContainer">
          <h1 className='contactHeader'> Share your Thoughts Here!</h1>
          <div className="pb-5 d-flex justify-content-around align-items-center gap-5 contactBodyContainer" >
            <Form className='contactForm shadow-lg'>

              <Row className="mb-3">
                <Col>
                  <Form.Label>First name</Form.Label>
                  <Form.Control placeholder='Enter your first name' />
                </Col>
                </Row>
                <Row className="mb-3">
                <Col>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control placeholder='Enter your last name' />
                </Col>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control placeholder='Enter a valid email' type="email" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1" >
                <Form.Label>Message</Form.Label>
                <Form.Control placeholder='Enter your message here' as="textarea" rows={4} />
              </Form.Group>
              <div className='d-flex justify-content-between'>
              <Button className="cartBtn" onClick={this.onClick} variant="primary" type="submit">Submit</Button>
              </div>
                

            </Form>

          <AddressMap />
    
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;