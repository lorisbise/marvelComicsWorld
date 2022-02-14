import Btn from "../Components/btn";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="description"
        style={{ marginLeft: "15px", marginRight: "15px" }}
      >
        <Row
          style={{
            padding: " 15px",
            marginTop: "40px",
            justifyItems: "center",
            marginLeft: "15px",
            marginRight: "15px",

          }}
        >
          <h2>
            This is a single page application created using{" "}
            <a target="_blank" rel="noreferrer" href="https://reactjs.org/">
              React.js
            </a>{" "}
            and{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://developer.marvel.com/"
            >
              Marvel API
            </a>
            . This application uses Characters, Comics and Series listings.
          </h2>

          <br />
          <h3>
            Developed by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/loris-bisesti/"
            >
              Loris Bisesti
            </a>
          </h3>
        </Row>
      </div>
      <Row style={{marginTop: '20px'}}>
        <Btn
          text="Go to Characters List"
          variant="dark"
          onClick={() => {
            navigate("/home");
          }}
        />

        <Btn
          text="GitHub"
          variant="dark"
          onClick={() => {
            window.open("https://github.com/lorisbise/marvelComicsWorld");
          }}
        />
      </Row>
    </div>
  );
};

export default Info;
