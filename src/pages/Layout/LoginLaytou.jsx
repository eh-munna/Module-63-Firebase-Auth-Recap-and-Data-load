import React from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const LoginLaytou = () => (
  <div>
    <NavigationBar />
    <Outlet />
  </div>
);

export default LoginLaytou;
