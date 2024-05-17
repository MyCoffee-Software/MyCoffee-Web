import React, { useState } from 'react';
import Navigation from '../../Navigation';
import Sidebar from '../../SideBar';

const LayoutDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Navigation onToggleSidebar={toggleSidebar}/>
      <Sidebar dashboard={true} isOpen={isSidebarOpen} onToggleSidebar={toggleSidebar}/>
    </>
  )
}

export default LayoutDashboard;