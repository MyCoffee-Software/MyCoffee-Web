import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import * as C from "./style";
import logo from "../../assets/iconeCafe.png";
import {
  faBars,
  faCartShopping,
  faCircleUser,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../hooks/useAuth";
import ProfileMenu from "../ProfileMenu";

const Navigation = ({ onToggleSidebar, back }) => {
  const { user } = useAuth();
  const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    if (user && user.imagem) {
      const imageName = user.imagem.split('/').pop();
      import(`../../assets/User/${imageName}`)
        .then(imageModule => {
          setUserImage(imageModule.default);
        })
        .catch(error => {
          console.error(`Failed to load image: ${imageName}`, error);
        });
    }
  }, [user]);

  return (
    <C.NavigationWrapper>
      <C.NavigationContent>
        <MediaQuery minWidth={1280}>
          <C.Logo src={logo} />

          <C.NavigationItems className={C.NavigationContent}>
            <C.NavigationItem>
              <C.NavLink to="home">Início</C.NavLink>
            </C.NavigationItem>
            <C.NavigationItem>
              <C.NavLink to="plans">Nossos Planos</C.NavLink>
            </C.NavigationItem>
            <C.NavigationItem>
              <C.NavLink to="/about_us">Sobre Nós</C.NavLink>
            </C.NavigationItem>
          </C.NavigationItems>

          <C.UserWrapper>
            <C.SearchBar />

            {user ? (
              <>
                <ProfileMenu userImage={userImage} />
                <C.Label>{user.nome}</C.Label>
              </>
            ) : (
              <>
                <Link to="/signin">
                  <C.StyledIcon icon={faCircleUser} size="50px" fixedWidth />
                </Link>
                <C.Label>Fazer login</C.Label>
              </>
            )}

            <Link to="/cart">
              <C.StyledIcon icon={faCartShopping} size="50px" fixedWidth />
            </Link>
          </C.UserWrapper>
        </MediaQuery>

        <MediaQuery maxWidth={1279}>
          {back ? (
            <Link to={back}>
              <C.StyledIcon icon={faArrowLeft} />
            </Link>
          ) : (
            <div onClick={onToggleSidebar} style={{ cursor: "pointer" }}>
              <C.StyledIcon icon={faBars} />
            </div>
          )}

          <C.Logo src={logo} />

          <Link to="/cart">
            <C.StyledIcon icon={faCartShopping} />
          </Link>
        </MediaQuery>
      </C.NavigationContent>
    </C.NavigationWrapper>
  );
};

export default Navigation;
