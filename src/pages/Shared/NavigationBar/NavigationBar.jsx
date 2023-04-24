import React from 'react';

import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container>
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
              <Link to="/" className="text-decoration-none">
                Home
              </Link>

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
    </Container>
  );
};

export default NavigationBar;
