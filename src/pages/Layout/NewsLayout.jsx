import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';

import RightSide from '../Shared/RightSide/RightSide';
import { Outlet } from 'react-router-dom';
const NewsLayout = () => {
  return (
    <div>
      <Header />
      <Container className="mx-auto">
        <Row>
          <Col md={9}>
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

export default NewsLayout;
