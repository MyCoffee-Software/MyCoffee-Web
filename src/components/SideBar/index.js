import React from "react";
import { NavLink, Outlet } from 'react-router-dom';
import * as C from "./style";

const Sidebar = () => {
  return (
    <C.Wrapper>
      <C.SidebarWrapper>
        <C.SidebarContent>
          <C.ContentButton>Cafés</C.ContentButton>
          <C.ContentButton>Cápsulas</C.ContentButton>
          <C.ContentButton>Kits</C.ContentButton>
          <C.ContentButton>Promoções</C.ContentButton>
        </C.SidebarContent>
      </C.SidebarWrapper>

      <C.Content>
        <Outlet />
      </C.Content>
    </C.Wrapper>
  );
};

export default Sidebar;