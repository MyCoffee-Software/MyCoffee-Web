import React from 'react';
import Navigation from "../../Navigation"
import Sidebar from '../../SideBar';
import { Outlet } from 'react-router-dom';

const LayoutWithSidebar = () => {
  return (
    <>
      <Navigation/>
      <Sidebar/>
    </>
  )
}

export default LayoutWithSidebar