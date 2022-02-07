import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Logo from '../img/Logo.png'
import "../Style/style.css";
import { Link } from 'react-router-dom'

const Header =()=>{

  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                alt="Logo"
                src={Logo}
                width="200"
                height="80"
                className="d-inline-block align-top"
              />
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
