import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSide from '../Shared/LeftSide/LeftSide';
import MainContent from '../MainContent/MainContent';
import RightSide from '../Shared/RightSide/RightSide';

const Layout = () => {
  return (
    <div>
      <Header />
      <Container className="mx-auto">
        <Row>
          <Col md={3}>
            <LeftSide />
          </Col>
          <Col md={6}>
            <MainContent />
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
