// npm install react-bootstrap

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";


const Cards = ({ title, text, image }) => {
  return (
    <Card className="resultCard" style={{ height: "18rem" }}>
      <div className="inner">
        <img className="card-img-top" src={image} alt={image} />
      </div>
      
      <Card.Body style={{ color: "black", textDecoration: "none !important" }}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
