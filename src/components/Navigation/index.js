import React from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import * as C from "./style";
import logo from "../../assets/iconeCafe.svg";
import { faBars, faCartShopping, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../hooks/useAuth";

const Navigation = ( {onToggleSidebar} ) => {
  const { token }  = useAuth();

  return (
    <C.NavigationWrapper>
      <C.NavigationContent>
        <MediaQuery minWidth={1280}>
          <C.Logo src={logo} />

          <C.NavigationItems className={C.NavigationContent}>
            <C.NavigationItem><C.NavLink>Início</C.NavLink></C.NavigationItem>
            <C.NavigationItem><C.NavLink>Nossos Planos</C.NavLink></C.NavigationItem>
            <C.NavigationItem><C.NavLink>Sobre Nós</C.NavLink></C.NavigationItem>
          </C.NavigationItems>

          <C.UserWrapper>
            <C.SearchBar />
            
            <Link to="/signin">
              <C.StyledIcon icon={faCircleUser} size="50px" fixedWidth/>
            </Link>
            
            <C.Label>
              {token ? (
                "Olá mano"
              ) : (
                "Olá"
              )} 
            </C.Label>

            <Link>
              <C.StyledIcon icon={faCartShopping} size="50px" fixedWidth/>
            </Link>
          </C.UserWrapper>
        </MediaQuery>

        <MediaQuery maxWidth={1279}>
          <div onClick={onToggleSidebar} style={{ cursor: "pointer" }}>
            <C.StyledIcon icon={faBars}/>
          </div>

          <C.Logo src={logo} />

          <C.StyledIcon icon={faCartShopping}/>
        </MediaQuery>

      </C.NavigationContent>
    </C.NavigationWrapper>
  );
};

export default Navigation;
