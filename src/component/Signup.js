import React, { Component } from "react";
import axios from "axios";
import "../css/login.css";
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  getUsers = async () => {
    let usersData = await axios.get(`${process.env.REACT_APP_HEROKU}/user`);
    this.setState({ users: usersData.data });
  };

  createUser = async (e) => {
    e.preventDefault();
    console.log(e.target);
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    await axios.post(`${process.env.REACT_APP_HEROKU}/user`, { newUser });
    //this.getUsers()
  };

  render() {
    return (
      <form onSubmit={this.createUser}>
        
        <h3>SignUp</h3>

        <div className="mb-3">
          <label id="name">User name</label>
          <input id="name" type="text" className="form-control" placeholder="Enter Username"/>
        </div>

        <div className="mb-3">
          <label id="email">Email address</label>
          <input id="email" type="email" className="form-control" placeholder="Enter email"/>
        </div>

        <div className="mb-3">
          <label id="password">Password</label>
          <input id="password" type="password" className="form-control" placeholder="Enter password"/>
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1"/>
            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        {/* <p className="forgot-password text-right">Forgot <a href="#">password?</a></p> */}

      </form>
    );
  }
}
