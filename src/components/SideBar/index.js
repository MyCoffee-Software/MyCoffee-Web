import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet } from 'react-router-dom';
import * as C from "./style";
import MediaQuery from "react-responsive";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../hooks/useAuth";

const Sidebar = ({ isOpen, onToggleSidebar, dashboard = false }) => {
  const { user } = useAuth();
  const sidebarRef = useRef();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/categorias?limite=10&pagina=1`);
        const data = await response.json();
        setCategories(data);
      } catch (e) {
        console.error("Error");
      }
    };

    fetchCategories();
  }, []);

  return (
    <C.Wrapper>
      <MediaQuery minWidth={1280}>
        <C.SidebarWrapper>
          <C.SidebarContent>
            {!dashboard ? (
              <>
                {categories.map((category) => (
                  <C.ContentButton>{ category.nome }</C.ContentButton>
                ))}
              </>
            ) : (
              <>
                <Link to={'/dashboard/products_dashboard'} >
                  <C.ContentButton>Produtos</C.ContentButton>
                </Link>

                <Link to={'/dashboard/category_dashboard'}>
                  <C.ContentButton>Categorias</C.ContentButton>
                </Link>
                <C.ContentButton>Usuários</C.ContentButton>
                <C.ContentButton>Relatórios</C.ContentButton>
              </>
            )}
          </C.SidebarContent>
        </C.SidebarWrapper>
      </MediaQuery>

      <MediaQuery maxWidth={1279}>
        <C.MobileSidebarWrapper isOpenn={isOpen} ref={sidebarRef}>
          <C.MobileUserWrapper>
            <C.MobileContent>
              {user ? (
                <>
                  <Link to="profile">
                    <C.UserIcon src={user.avatar} />
                  </Link>
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
            {!dashboard ? (
              <>
                {categories.map((category) => (
                  <C.ContentButton>{ category.nome }</C.ContentButton>
                ))}
              </>
            ) : (
              <>
                <Link to={'/dashboard/products_dashboard'} onClick={onToggleSidebar}>
                  <C.ContentButton>Produtos</C.ContentButton>
                </Link>

                <Link to={'/dashboard/category_dashboard'} onClick={onToggleSidebar}>
                  <C.ContentButton>Categorias</C.ContentButton>
                </Link>
                <C.ContentButton>Usuários</C.ContentButton>
                <C.ContentButton>Relatórios</C.ContentButton>
              </>
            )}
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