import React from "react";
import { Link } from "react-router-dom";
import * as C from "./style"
import logo from "../../assets/iconeCafe.svg";
import icon from "../../assets/iconeUser.svg"

const Navigation = () => {


  return (
    <C.NavigationWrapper>
      <C.NavigationContent>
        <C.Logo src={logo} />
        
        <C.NavigationItems>
          <C.NavigationItem><C.NavLink>Início</C.NavLink></C.NavigationItem>
          <C.NavigationItem><C.NavLink>Nossos Planos</C.NavLink></C.NavigationItem>
          <C.NavigationItem><C.NavLink>Sobre Nós</C.NavLink></C.NavigationItem>
        </C.NavigationItems>

        <C.UserWrapper>
          <C.SearchBar/>
          <Link to="/signin">
            <C.Logo src={icon} />
          </Link>
          <C.Label>Olá </C.Label>
        </C.UserWrapper>

        
      </C.NavigationContent>
    </C.NavigationWrapper>
  );
};

export default Navigation;
