import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSide from '../Shared/LeftSide/LeftSide';
import RightSide from '../Shared/RightSide/RightSide';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';

const Layout = () => {
  return (
    <div>
      <Header />
      <NavigationBar></NavigationBar>
      <Container className="mx-auto">
        <Row>
          <Col md={3}>
            <LeftSide />
          </Col>
          <Col md={6}>
            <Outlet></Outlet>
          </Col>
          <Col md={3}>
            <RightSide />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
