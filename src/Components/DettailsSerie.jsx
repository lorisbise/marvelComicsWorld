import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Characters from "./Characters";
import Btn from "./btn";
import { useNavigate } from "react-router-dom";
import "../Style/style.css";

const DettailsSerie = ({ item, copy }) => {
  console.log(item);
    const navigate = useNavigate();

  return (
    <div>
      <Row>
        <Btn
          variant="dark"
          text="Back to character"
          onClick={() => {
            navigate(-1);
          }}
        />
        <Btn
          variant="dark"
          text="Back to Home"
          onClick={() => {
            navigate("/");
          }}
        />
      </Row>
      <Row
        style={{
          padding: "20px",
          marginTop: "25px",
        }}
      >
        <Col sm="6">
          <img
            style={{
              border: "3px solid black",
              width: "70%",
              margin: "20px",
              boxShadow: "-5px 5px 10px 3px #212529",
            }}
            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            alt={item.title}
          />
          <h6 style={{ marginBottom: "25px" }}>{copy}</h6>
        </Col>
        <Col className="description">
          <h4>{item.title.toUpperCase()}</h4>
          <br />

          <p>
            {!item.description
              ? `we are sorry but there is no description for serie ${item.title}`
              : item.description}
          </p>
          <p>Start Year: {item.startYear}</p>
          <p>End Year: {item.endYear}</p>
        </Col>
      </Row>

      <h4 style={{ marginTop: "20px" }}>Related characters</h4>
      <div className="comics">
        {item.characters.items.map((characters, i) => (
          <Characters
            key={i}
            name={characters.name}
            link={characters.resourceURI}
          />
        ))}
      </div>
    </div>
  );
};

export default DettailsSerie;
