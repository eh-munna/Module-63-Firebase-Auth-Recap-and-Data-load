import React from 'react';
import Button from 'react-bootstrap/Button';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import QZone from '../QZone/QZone';
const RightSide = () => {
  return (
    <div>
      <h5>Login With</h5>
      <div className="mb-2">
        <Button variant="outline-primary">
          <FcGoogle />
          Login with Google
        </Button>
      </div>
      <div>
        <Button variant="outline-secondary">
          <FaGithub />
          Login with GitHub
        </Button>
      </div>
      <h5>Find us on</h5>
      <div>
        <ListGroup>
          <ListGroup.Item disabled>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone />
    </div>
  );
};

export default RightSide;
