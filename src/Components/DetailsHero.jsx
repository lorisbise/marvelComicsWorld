import Comics from './Comics'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DetailsHero = ({ item, copy}) => {


  return (
    <div>
      <Container>
        <Row style={{ marginTop: "25px" }}>
          <Col sm="5">
            <img
              style={{
                borderRadius: '50%',
                border: "3px solid red",
                height: "80%",
                width: "70%",
                marginBottom: "10px",
              }}
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              alt={item.name}
            />
            
          </Col>
          <Col>
            <h4>{item.name.toUpperCase()}</h4>
            <br />
            <p style={{textAlign: 'justify',textJustify: 'inter-word',}}>
              {item.description === ""
                ? "we are sorry but there is no description for this character"
                : item.description}
            </p>
          </Col>
        </Row>

        <h4>Comics</h4>
        <div className="comics">
          {item.comics.items.map((comics, i) => (
            <Comics key={i} name={comics.name} link={comics.resourceURI} />
          ))}
        </div>
      </Container>
    </div>
  );
};
export default DetailsHero;
