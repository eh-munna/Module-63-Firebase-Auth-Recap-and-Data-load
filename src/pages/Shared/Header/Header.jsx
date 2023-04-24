import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Marquee from 'react-fast-marquee';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const { user } = useContext(AuthContext);
  // const user = false;
  // const user = true;
  return (
    <div className="py-3 container">
      <div className="text-center">
        <img className="img-fluid mx-auto" src={logo} alt="" />
        <h6 className="my-2">Journalism Without Fear or Favour</h6>
        <p>{moment().format('dddd, MMMM D, YYYY')}</p>
      </div>
      <div className="d-flex bg-light p-2 rounded-1">
        <Button className="rounded-0" variant="danger">
          Latest
        </Button>
        <Marquee pauseOnHover gradient={false} className="bg-transparent">
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      <div>
        <Navbar
          className="my-2 text-info-emphasis"
          collapseOnSelect
          expand="lg"
          bg="transparent"
          variant="light"
        >
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#features">
                  <Link to="/" className="text-decoration-none">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#deets">Career</Nav.Link>
                <Nav.Link href="#deets">
                  {user && <FaUserCircle></FaUserCircle>}
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">{}</Nav.Link>
                <Nav.Link href="#deets">
                  {user ? (
                    <Button className="rounded-0" variant="dark">
                      Logout
                    </Button>
                  ) : (
                    <Link to="/login">
                      <Button className="rounded-0" variant="dark">
                        Login
                      </Button>
                    </Link>
                  )}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
