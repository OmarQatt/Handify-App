import React from "react";
import { Carousel } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import '../css/landingPage.css';
import { useState } from "react";
  

    const  LandingPage = () => {
      const [index, setIndex] = useState(0);

      const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
    
      return (
          <Container>        
 
          <div className='cards'>

  
          <Carousel controls fade activeIndex={index} onSelect={handleSelect}>
        

          <Carousel.Item>
          <div className="text-center">
          <img width={500} height={500} alt="First" src="https://m.media-amazon.com/images/I/71iX+U2hpaL._SL1500_.jpg" />
          </div>
          <Carousel.Caption style={{backgroundColor: 'rgba(29, 44, 42, 0.7)',}}>
          <h3>EarRings</h3>
          <p>A Handmade EarRings</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="text-center">
          <img width={500} height={500} alt="Second" src="https://i.pinimg.com/736x/f3/5c/36/f35c3617fc715788605a66cada840891.jpg" />
          </div>
          <Carousel.Caption style={{backgroundColor: 'rgba(29, 44, 42, 0.7)',}}>
          <h3>Colorful EarRings</h3>
          <p>A Handmade Colorful EarRings</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="text-center">
          <img width={500} height={500} alt="Third" src="https://i.pinimg.com/736x/36/7f/96/367f9612163abc3b54a8b46d4e089abb.jpg" />
          </div>
          <Carousel.Caption style={{backgroundColor: 'rgba(29, 44, 42, 0.7)',}}>
          <h3>Braclet</h3>
          <p>A handmade Braclet</p>
          </Carousel.Caption>
          </Carousel.Item>              
          </Carousel>
          
          </div>
          
          <div className="cat">

        <div className="column">
         <img src='https://www.iwanttobeher.com/wp-content/uploads/il_1588xN.2313805676_a2jg-675x900.jpg' alt="e" style={{width: 150, height: 150, borderRadius: '50%'}}/>
         <p id="text">Handmade Fabric </p> 
        </div>

        <div className="column">
         <img src='https://img.freepik.com/premium-photo/handmade-stuff-blue-background-multicolored-beads-transparent-container_668613-135.jpg?w=2000' alt="e" style={{width: 150, height: 150, borderRadius: '50%'}}/>
         <p id="text">Handmade Rosaries</p> 
        </div>

        <div className="column">
         <img src='http://1.bp.blogspot.com/_wxqne5EQfZw/Sy7ZtvRu9MI/AAAAAAAAAHY/6pOZslgngt8/s320/MaryTDesigns.jpg' alt="e" style={{width: 150, height: 150, borderRadius: '50%'}}/>
         <p id="text">Fabric Roller</p> 
        </div>

        <div className="column">
         <img src='https://sc04.alicdn.com/kf/UTB8ZQkZC5aMiuJk43PTxh5SmXXaU.jpeg' alt="e" style={{width: 150, height: 150, borderRadius: '50%'}}/>
         <p id="text">HandmadeElephant</p> 
        </div>

        <div className="column">
         <img src='https://t4.ftcdn.net/jpg/03/70/17/61/360_F_370176194_wt7ib2QOqWtaHsFtjeYQpzR1hCt0JJn6.jpg' alt="e" style={{width: 150, height: 150, borderRadius: '50%'}}/>
         <p id="text">Handmade Soap</p> 
        </div>

          </div>
          </Container>

      );
  } 
  

  export default LandingPage;