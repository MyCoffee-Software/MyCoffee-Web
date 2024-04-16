import React, { useRef } from "react";
import { Outlet } from 'react-router-dom';
import * as C from "./style";
import MediaQuery from "react-responsive";

const Sidebar = ({ isOpen, onToggleSidebar }) => {
  const sidebarRef = useRef();

  return (
    <C.Wrapper>
      <MediaQuery minWidth={1280}>
        <C.SidebarWrapper>
          <C.SidebarContent>
            <C.ContentButton>Cafés</C.ContentButton>
            <C.ContentButton>Cápsulas</C.ContentButton>
            <C.ContentButton>Kits</C.ContentButton>
            <C.ContentButton>Promoções</C.ContentButton>
          </C.SidebarContent>
        </C.SidebarWrapper>
      </MediaQuery>

      <MediaQuery maxWidth={1279}>
        <C.MobileSidebarWrapper isOpenn={isOpen} ref={sidebarRef}>
          <C.SidebarContent>
            <C.ContentButton>Cafés</C.ContentButton>
            <C.ContentButton>Cápsulas</C.ContentButton>
            <C.ContentButton>Kits</C.ContentButton>
            <C.ContentButton>Promoções</C.ContentButton>
          </C.SidebarContent>
        </C.MobileSidebarWrapper>

        {isOpen && (
          <C.Aside onClick={onToggleSidebar} isOpenn={isOpen}/>
        )}
      </MediaQuery>

      <C.Content>
        <Outlet />
      </C.Content>
    </C.Wrapper>
  );
};

export default Sidebar;