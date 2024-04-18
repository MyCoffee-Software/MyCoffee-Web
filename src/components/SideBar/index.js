import React, { useRef } from "react";
import { Link, Outlet } from 'react-router-dom';
import * as C from "./style";
import MediaQuery from "react-responsive";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../hooks/useAuth";

const Sidebar = ({ isOpen, onToggleSidebar }) => {
  const { user } = useAuth();
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
          <C.MobileUserWrapper>
            <C.MobileContent>
              {user ? (
                <>
                  <C.StyledIcon icon={faUserCircle} size="50px" />
                  <C.Label>{user.name}</C.Label>
                </>
              ) : (
                <>
                  <Link to="/signin">
                    <C.StyledIcon icon={faUserCircle} size="50px" />
                  </Link>

                  <C.Label>Fazer login</C.Label>
                </>
              )}
            </C.MobileContent>
          </C.MobileUserWrapper>

          <C.SidebarContent>
            <C.ContentButton>Cafés</C.ContentButton>
            <C.ContentButton>Cápsulas</C.ContentButton>
            <C.ContentButton>Kits</C.ContentButton>
            <C.ContentButton>Promoções</C.ContentButton>
          </C.SidebarContent>
        </C.MobileSidebarWrapper>

        {isOpen && (
          <C.Aside onClick={onToggleSidebar} isOpenn={isOpen} />
        )}
      </MediaQuery>

      <C.Content>
        <Outlet />
      </C.Content>
    </C.Wrapper>
  );
};

export default Sidebar;