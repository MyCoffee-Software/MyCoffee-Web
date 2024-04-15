import React from 'react';
import Navigation from "../../Navigation"
import { Outlet } from 'react-router-dom';

const LayoutWithoutSidebar = () => {
  return (
    <>
      <Navigation/>
      <div>
        <Outlet/>
      </div>
    </>
  )
}

export default LayoutWithoutSidebar