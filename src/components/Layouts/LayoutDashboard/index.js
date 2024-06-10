import React, { useState } from 'react';
import Navigation from '../../Navigation';
import Sidebar from '../../SideBar';
import MediaQuery from 'react-responsive';
import { Outlet } from 'react-router-dom';

const LayoutDashboard = ({ url }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Navigation back={url} onToggleSidebar={toggleSidebar}/>

      { url ? (
        <>
          <MediaQuery minWidth={1280} >
            <Sidebar dashboard={true} isOpen={isSidebarOpen} onToggleSidebar={toggleSidebar}/>
          </MediaQuery>
          <MediaQuery maxWidth={1279} >
            <Outlet/>
          </MediaQuery>
        </>
      ) : (
        <Sidebar dashboard={true} isOpen={isSidebarOpen} onToggleSidebar={toggleSidebar}/>
      )}
    </>
  )
}

export default LayoutDashboard;