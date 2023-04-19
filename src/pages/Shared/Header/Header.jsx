import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
  return (
    <div className="text-center py-3">
      <img className="img-fluid mx-auto" src={logo} alt="" />
      <h6 className="my-2">Journalism Without Fear or Favour</h6>
      <p>{moment().format('dddd, MMMM D, YYYY')}</p>
    </div>
  );
};

export default Header;
