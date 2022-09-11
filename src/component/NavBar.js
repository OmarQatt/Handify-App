import { Link } from "react-router-dom";
import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBIcon,
  // MDBCollapse,
} from "mdb-react-ui-kit";
import logo from '../assets/newlogo.png';

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleCollapse() {
    this.setState({ 
      isOpen: !this.state.isOpen 
    });
  }

  render() {
    const show = (this.state.isOpen)? "show" : "";
  return (

    <MDBNavbar expand="lg" light bgColor="light" className="navBar" >
      <MDBContainer fluid className="navBarContainer">
        <MDBNavbarBrand href="/" > <img src={ logo } alt="Logo" className="logoImg" /></MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded="false"
          aria-label="Toggle navigation"
          // onClick={this.toggleCollapse}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        {/* <MDBCollapse navbar isOpen={this.state.isOpen}> */}
          <MDBNavbarNav className={"shomabde"+show} >
            
          <div className="collapse navbar-collapse justify-content-center">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/profile" className="nav-link">Profile</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            </div>
            
            {/* <input className="form-control" placeholder="Type query" aria-label="Search" type="Search"/>
            <MDBBtn outline>Search</MDBBtn> */}

            <Link to="/cart" className="nav-link" > <MDBIcon fas icon="shopping-cart"/> </Link>

          </MDBNavbarNav>
        {/* </MDBCollapse> */}

      </MDBContainer>
    </MDBNavbar>
    
  );
}
}
