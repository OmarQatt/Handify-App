import React from "react";
import axios from "axios";
import ProductModal from "./ProductModal";
import homeCoverImg from '../assets/Bath bomb-pana.svg'
import salesImg from "../assets/sales.svg";
import marketingImg from "../assets/marketing.svg";
import timeImg from "../assets/time.svg";
import   { MDBBtn } from "mdb-react-ui-kit";
import '../css/homePage.css';
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
SwiperCore.use([Navigation]);



export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [],
      handify: [],
      swiperArray: [],
      saveAllData: [],
    };
  }

  getProduct = async () => {
    const res = await axios.get(`${process.env.REACT_APP_HEROKU}/item`);
    const swiperArray = [];
    for (let i = 6; i < res.data.length; i++) {
      swiperArray.push(res.data[i])
    }
    this.setState({
      saveAllData: res.data,
      handify: res.data,
      swiperArray,
    });
  };

  componentDidMount() {
    this.getProduct();
  }

  handleSearch = (e) => {
    if(!e.target.value){
      return this.setState({
        handify: this.state.saveAllData,
      });
    }
    const { saveAllData } = this.state;
    const filteredProducts = saveAllData.filter((item) => {
      return item.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    this.setState({
      handify: filteredProducts,
    });
  }
  
  render() {
    return (
      <div className="login-body">
        <div className="coverContainer d-flex justify-content-between align-items-center">
          <div>
            <h1 className="outterWelcoming pt-4 pb-3">Welcome To </h1>
            <p className="firstP pb-4">We believe in creativity, share your hand-made pieces here today!</p>
            <h1 className="secondOutter pt-3 pb-3">Our Mission </h1>
            <p className="sencondP pb-4">We are looking to serve you with outstand hand-made pieces, Checkout our products now!</p>
          </div>
          <img className="homeCoverImg" src={homeCoverImg} alt="homeCoverImg" />
        </div>
        <div className="test">
          <hr className="hr" />
          <h1 className="sectionHeader  mb-3">Our recent added products</h1>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper "
          >
            {this.state.swiperArray.map((item, idx) => { 

              return <SwiperSlide key={idx}><img src={item.imgURL} alt="swiperimg" /></SwiperSlide>
            })}
          </Swiper>
          <hr className="hr mb-0 mt-5" />
          <div className="sectionTwo">
            <div className="serviceContainter">
              <h2 className="pt-4 pb-6"> Our Services </h2>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column justify-content-center align-items-center oneServiceContainer">
                  <img src={salesImg} alt="salesImg" className="serviceImg" />
                  <h3>Sales</h3>
                  <p>
                    We are looking to serve you with best <br/> sales offers and discounts.
                  </p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center oneServiceContainer">
                  <img src={marketingImg} alt="marketingImg" className="serviceImg" />
                  <h3>Marketing</h3>
                  <p>
                    We help you with creating and implementing <br /> successful marketing strategies.
                  </p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center oneServiceContainer">
                  <img src={timeImg} alt="timeImg" className="serviceImg" />
                  <h3>24 x 7 Support</h3>
                  <p>
                    Our friendly and knowledgeable staff are available 24x7 <br /> to answer your questions.
                  </p>
                </div>
              </div>
            </div>

          </div>
          <hr className="hr mt-0" />
        </div>
        <h1 className="sectionHeader mb-5">Our products:</h1>
        <div className="d-flex gap-3 searchContainer mb-5">
        <input
              className="form-control"
              placeholder="Search here"
              aria-label="Search"
              type="Search"
              onChange={(e) => this.handleSearch(e)}
            />
            <MDBBtn outline>Search</MDBBtn>
            </div>
        <div className="productsContainer">
          {this.state.handify.map((item, idx) => (
            <div  key={idx}>
              <ProductModal itemData={item} getProduct={this.getProduct} createCart={this.createCart} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
