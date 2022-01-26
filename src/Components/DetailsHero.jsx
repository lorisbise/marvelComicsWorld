import Comics from './Comics'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const DetailsHero = ({ item, copy}) => {
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
console.log(item);
  return (
    <div>
      <Container>
        <Row style={{ marginTop: "25px" }}>
          <Col sm="5">
            <img
              style={{
                borderRadius: "50%",
                border: "3px solid black",
                width: "70%",
                margin: "20px",
                boxShadow: "-5px 5px 10px 3px #212529",
              }}
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              alt={item.name}
            />
          </Col>
          <Col>
            <h4>{item.name.toUpperCase()}</h4>
            <br />
            <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
              {item.description === ""
                ? `We are sorry but there is no description for ${item.name}`
                : item.description}
            </p>
          </Col>
        </Row>
        <h4>Comics</h4>
        <Carousel
          style={{ marginBottom: "15px" }}
          swipeable={false}
          draggable={true}
          showDots={false}
          responsive={responsive}
          infinite={false}
          autoPlay={false}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={400}
          containerClass="carousel-container"
          focusOnSelect={false}
          itemClass="carousel-item-padding-40-px"
        >
          {item.comics.items.map((comics, i) => (
            <div key={i}>
              <Comics name={comics.name} link={comics.resourceURI} />
            </div>
          ))}
        </Carousel>

        <br />
        <h4>Series</h4>
        <Carousel
          style={{ marginBottom: "15px" }}
          swipeable={false}
          draggable={true}
          showDots={false}
          responsive={responsive}
          infinite={false}
          autoPlay={false}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={400}
          containerClass="carousel-container"
          focusOnSelect={false}
          itemClass="carousel-item-padding-40-px"
        >
          {item.series.items.map((series, i) => (
            <div key={i}>
              <Comics name={series.name} link={series.resourceURI} />
            </div>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};
export default DetailsHero;
