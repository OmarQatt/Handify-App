import React from "react";
import Footer from "./component/Footer";
import Profile from "./component/Profile";
import About from "./component/About";
import NavBar from "./component/NavBar";
import Contact from  "./component/Contact";
import Cart from "./component/Cart";
// import Description from "./component/Description";
import Homepage from "./component/HomePage"
import Log from "./component/login"
import Register from "./component/register"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";



function App() {


  const [ user, setLoginUser] = useState({})

    return (

      <div className="App">
       
      <Router>
        <NavBar/>
        
        <Routes>
    
          <Route exact path="/Profile" element={user && user._id ? <Profile setLoginUser={setLoginUser}  /> : <Log setLoginUser={setLoginUser}/>}></Route>
          <Route exact path="/login" element={<Log setLoginUser={setLoginUser}/>}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>

        </Routes>
          {/* <Description /> */}
          <Footer />
      </Router>
    </div>
    );
  }


export default App;
