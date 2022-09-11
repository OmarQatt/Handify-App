
import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import logo from '../assets/newlogo.png';
import Swal from 'sweetalert2'



export default class Footer extends React.Component {

  onClick = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: `Thank you for subscribing!`,
      text: `Now you can keep up with us🤩`,
      confirmButtonColor: "#7D9D9C",
  });
  }


  render() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">

          <MDBFooter bgColor='light' className='text-center text-lg-left' >
      <MDBContainer className='p-4 pb-0'>
        <form action=''>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <p className='pt-2'>
                <strong>Sign up for our newsletter</strong>
              </p>
            </MDBCol>

            <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
              <MDBInput type='text' id='form5Example2' label='Enter a valid email address' />
            </MDBCol>

            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <MDBBtn onClick={this.onClick} className="cartBtnAdd" >Subscribe</MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>
    </MDBFooter>
    <hr></hr>

    <div className="footerItems">
            <MDBCol md="2" lg="2" xl="4" className="mx-auto mb-4 footerlogotext">
              <img src={ logo } alt="Logo" className="footerLogo" />
              <p>Our website is a perfect place to support small buisness owners and provide the users with unique hand-made peices .</p>
            </MDBCol>
            
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4 ">
              <h6 className="text-uppercase fw-bold mb-4">Provided products</h6>
              <p>Food items</p>
              <p>Accessories</p>
              <p>Art works</p>
            
            </MDBCol>

            <MDBCol md="" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p><a href="/About" className="text-reset">About us</a></p>
              <p><a href="/contact" className="text-reset">Contact us</a></p>
              <p><a href="/Profile" className="text-reset">Profile</a></p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><MDBIcon icon="home" className="me-2" />Amman, Jordan</p>
              <p><MDBIcon icon="envelope" className="me-3" />info@handify.com</p>
              <p><MDBIcon icon="phone" className="me-3" /> + 96279 345 5678</p>
            </MDBCol>
            </div>

          </MDBRow>

        </MDBContainer>
      </section>
          <hr></hr>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <div className="social">
          <span>Get connected with us on social networks</span>
          <hr></hr>
          <div>
          <a href="https://web.facebook.com/" className="me-4 text-reset"><MDBIcon fab icon="facebook-f" /></a>
          <a href="https://twitter.com/" className="me-4 text-reset"><MDBIcon fab icon="twitter" /></a>
           <a href="https://www.instagram.com/" className="me-4 text-reset"><MDBIcon fab icon="instagram" /></a>
          <a href="https://www.linkedin.com/" className="me-4 text-reset"><MDBIcon fab icon="linkedin" /></a>
          </div>
        </div>

     
        </section>
      

      <div className="text-center p-4" style={{ backgroundColor: "#576F72", color:"#F0EBE3"}}>
        © 2022 Copyright | <a className="text-reset fw-bold" href="/">Handify</a>
      </div>
    </MDBFooter>
  );
}

}