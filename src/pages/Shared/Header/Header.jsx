import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Marquee from 'react-fast-marquee';

const Header = () => {
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
    </div>
  );
};

export default Header;
