import React, { useState } from 'react';
import Navigation from "../../Navigation"
import Sidebar from '../../SideBar';
import MediaQuery from 'react-responsive';
import { Outlet } from 'react-router-dom';

const LayoutDefault = ({ url, sidebar }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Navigation back={url} onToggleSidebar={toggleSidebar} />

      {url ? (
        sidebar ? (
          <Sidebar dashboard={false} isOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
        ) : (
          <Outlet />
        )
      ) : (
        sidebar ? (
          <Sidebar dashboard={false} isOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
        ) : (
          <>
            <MediaQuery minWidth={1280} >
              <Outlet />
            </MediaQuery>
            <MediaQuery maxWidth={1279} >
              <Sidebar dashboard={false} isOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
            </MediaQuery>
          </>
        )
      )}
    </>
  )
}

export default LayoutDefault