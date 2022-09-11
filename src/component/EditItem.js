import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export default class EditItemModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }
    handleShow = () => {
        this.setState({
            show: true
        })
    }

    
    updateProduct = async (e) => {
        e.preventDefault();
        const id = this.props.allData._id;
        const data = {
            title: e.target.itemTitle.value,
            description: e.target.itemDescription.value,
            price: e.target.itemPrice.value,
            imgURL: e.target.itemImgURL.value,
        };
        await axios.put(`${process.env.REACT_APP_HEROKU}/item/${id}`, { data });
        this.props.getProduct();
    }
    
    render() {
        return (
            <>
                <Button className="cartBtn" variant="primary" onClick={this.handleShow} > Edit Item </Button>

                <Modal show={this.state.show} onHide={this.handleClose} >

                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.allData.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={this.updateProduct}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder={this.props.allData.title} autoFocus id ="itemTitle"/>

                            </Form.Group>

                            <Form.Group className="mb-3"  >
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3} id ="itemDescription" placeholder={this.props.allData.description}/>
                            </Form.Group>

                            <Form.Group className="mb-3"  >
                                <Form.Label>Image imgURL</Form.Label>
                                <Form.Control type="text" placeholder={this.props.allData.imgURL} autoFocus  id ="itemImgURL"/>
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" placeholder={this.props.allData.price} autoFocus  id ="itemPrice" />
                            </Form.Group>

                            <Modal.Footer>
                                
                                <Button className="cartBtn" variant="secondary" onClick={this.handleClose}>Close</Button>
                                <Button className="cartBtn" type='submit' variant="primary" onClick={this.handleClose}>Save Changes</Button>
                            </Modal.Footer>
                            
                        </Form>
                    </Modal.Body>

                </Modal>
            </>
        );

    }
}