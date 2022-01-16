import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Characters from "./Characters";
import "../Style/style.css";

const DettailsComic = ({ item, copy }) => {
  console.log(item);
  let data = new Date(item.dates[0].date)
  let month= data.getMonth()+1
  let day = data.getDate()
  let year = data.getFullYear()
 
  return (
    <div>
      <Container>
        <Row
          style={{
            padding: "20px",
            backgroundColor: "grey",
            marginTop: "25px",
          }}
        >
          <Col sm="6">
            <img
              style={{
                border: "3px solid red",
                height: "90%",
                width: "70%",
                marginBottom: "20px",
              }}
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              alt={item.title}
            />
            <h6 style={{ marginBottom: "25px" }}>{copy}</h6>
          </Col>
          <Col>
            <h4>{item.title.toUpperCase()}</h4>
            <br />

            <p>
              {item.description === ""
                ? "we are sorry but there is no description for this comic"
                : item.description}
            </p>

            <p>
              Published: {`${day}/${month}/${year}`}
            </p>

            <p>Page Count: {item.pageCount}</p>
            <br />
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
      </Container>
    </div>
  );
};
export default DettailsComic;