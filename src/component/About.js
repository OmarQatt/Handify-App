import React from "react";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import "../css/about.css"


const About = () => {

  const cardInfo = [
    {
      image: "https://avatars.githubusercontent.com/u/108029468?v=4",
      title: "Saeed Kokash - TL",
      text: "Full Stack",
      description: "I'm following my passion of becoming a programmer/ developer.",
      gitHub: "https://github.com/SaeedKokash",
      linkedin: "",
    },
    {
      image: "https://avatars.githubusercontent.com/u/65464415?v=4",
      title: "Omar Qattam",
      text: "Full Stack",
      description: "Becoming a developer, Full Stack Developer, Open source fan!",
      gitHub: "https://github.com/OmarQatt",
      linkedin: "",
    },
    {
      image: "https://avatars.githubusercontent.com/u/108058306?v=4",
      title: "Ali Mohammad",
      description: "Hello!!Welcome to my work space, I'm Ali, I'm senior developer.",
      text: "Full Stack",
      gitHub: "https://github.com/AliMohammad420",
      linkedin: "",
    },
    {
      image: "https://avatars.githubusercontent.com/u/108042591?v=4",
      title: "Bashar Al-Zrigat",
      description: "A JS student learning in LTUC, who wants to be a full stack",
      text: "Full Stack",
      gitHub: "https://github.com/BasharAlzrigat",
      linkedin: "",
    },
    {
      image: "https://avatars.githubusercontent.com/u/94776105?v=4",
      title: "Firas Yacoup",
      description: "Software developer graduated with an international diploma",
      text: "Full Stack",
      gitHub: "https://github.com/FirasMyacoup",
      linkedin: "",
    },
    {
      image: "https://avatars.githubusercontent.com/u/108057115?v=4",
      title: "Bayan Al-Jawawdeh",
      description: "Architect with great passion toward programming.",
      text: "Full Stack",
      gitHub: "https://github.com/bayanfuad",
      linkedin: "",
    },
    {
      image: "https://avatars.githubusercontent.com/u/97349122?v=4",
      title: "Shaima Al-Khateeb",
      description: "I'm interested in designing and coding.,I’m currently full stack.",
      text: "Full Stack",
      gitHub: "https://github.com/Shaima-Alkhateeb",
      linkedin: "",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <div className="aboutPage" key={index}> 
        <Card style={{ width: "22rem"}} key={index} className="box" >
          <Card.Img variant="top" src={card.image} style={{ borderRadius: "50%", padding: "2%"}} className="eachImg, shadow"/>

          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
            <Card.Text>{card.description}</Card.Text>

            <Card.Link href={card.gitHub} className="socialIcons">
              <i className="fab fa-github"></i>
            </Card.Link>

            <Card.Link href={card.linkedin} className="socialIcons">
              <i className="fab fa-linkedin"></i>
            </Card.Link>

            <Card.Link href={card.linkedin} className="socialIcons">
              <i className="fab fa-facebook"></i>
            </Card.Link>

          </Card.Body>
        </Card>
      </div>
    );
  };

  return (
    <div className="login-body">
      <h1 className='contactTxt' >Who We Are</h1>

      <Row className="rowAbout">
      <Col>

         <Card.Link href="" className="aboutImg">    
          
           <Card.Img
             variant="top"
             src="https://eunimart.com/wp-content/uploads/2021/10/Guide-on-selling.jpeg"
             style={{ width: "100%" }} />  
          
          </Card.Link>
          </Col> 
          
           <Card className="csddd" style={{ width: "40%"}} >
          <Col >
          
          <Card.Body className="aboutText " style={{ width: "100%", height:"50%" }}>  
            <Card.Text  style={{ width: "100%", height:"100%" }}>
            We are a team of passionate developers interested in web developing and many other social, economical, political and artistic issues so we try to find solutions and help the community by creating some useful, creative apps.
            <hr/>
            Our Application idea is to create an application where small businesses and upcoming individuals can share their story/products/creations/items
             (all the items must be locally handmade to support small businesses only) in one platform.           
            </Card.Text>
          </Card.Body>
          </Col>
        </Card>
      </Row>


        <br></br><br></br>
      <hr></hr>
      <h1 className='contactTxt' >Meet our Team</h1>
      <hr></hr>
      <div className="grid">{cardInfo.map(renderCard)}</div>
    </div>
  );
};

export default About;