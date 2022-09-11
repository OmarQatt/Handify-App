import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
          users: [],
        };
      }
    
      getUsers = async () => {
        let usersData = await axios.get(`${process.env.REACT_APP_HEROKU}/user`);
        this.setState({ 
            users: usersData.data,
            email: usersData.data.email,
            password: usersData.data.password
        });
        console.log(this.state.users);
      };

    componentDidMount() {
        this.getUsers();
    }

  isAuth = (e) => {
    e.preventDefault();
    if ((e.target.userEmail.value === this.email) && (e.target.userPassword.value === this.password))
    return true
  }

  render() {
    return (
      <>
        <Form onSubmit={this.isAuth}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" autoFocus id="userEmail"/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" id="userPassword"/>
          </Form.Group>

          <Button variant="primary" type="submit" className="mb-3">{" "}Login{" "}</Button>
        </Form>
      </>
    );
  }
}
