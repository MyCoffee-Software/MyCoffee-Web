import React, { useState } from 'react';
import Navigation from "../../Navigation"
import Sidebar from '../../SideBar';

const LayoutWithSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <>
      <Navigation onToggleSidebar={toggleSidebar}/>
      <Sidebar isOpen={isSidebarOpen} onToggleSidebar={toggleSidebar}/>
    </>
  )
}

export default LayoutWithSidebar