import React from 'react';
import Navigation from "../../Navigation"
import { Outlet } from 'react-router-dom';

const LayoutWithoutSidebar = ({ url }) => {
  return (
    <>
      <Navigation back={url}/>
      <div>
        <Outlet/>
      </div>
    </>
  )
}

export default LayoutWithoutSidebar