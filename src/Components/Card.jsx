// npm install react-bootstrap

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";


const Cards = ({ title, text, image }) => {
  return (
    <Card
      style={{
        width: "15rem",
        position: "static",
        marginBottom: "15px",
        marginTop: "15px",
       
        
      }}
    >
      <Card.Img  src={image} />
      <Card.Body>
        <Card.Title style={{ color: 'inherit',
    textDecoration: 'inherit'}}
    >{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
