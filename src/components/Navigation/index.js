import React, { useState, useRef, useEffect } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const searchTimeout = useRef(null);
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

  const handleChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    // Verifica se o comprimento do searchTerm é maior ou igual a 3
    if (searchTerm.trim().length >= 3) {
      searchTimeout.current = setTimeout(() => {
        fetch(`https://fakestoreapi.com/products`)
          .then((res) => res.json())
          .then((json) => {
            const filteredResults = json.filter(
              (product) =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            if (filteredResults.length > 0) {
              setSearchResults(filteredResults);
              setShowResults(true);
              setNoResults(false);
            } else {
              setSearchResults([]);
              setShowResults(true);
              setNoResults(true);
            }
          });
      }, 300);
    } else {
      setSearchResults([]);
      setShowResults(false);
      setNoResults(false);
    }
  };

  const handleBlur = () => {
    if (searchTerm.trim() === "") {
      setShowResults(false);
      setNoResults(false);
    }
  };

  return (
    <C.NavigationWrapper>
      <C.NavigationContent>
        <MediaQuery minWidth={1280}>
          <Link to="/home">
          <C.Logo src={logo} />
          </Link>

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
            <C.SearchBar
              type="text"
              placeholder="Buscar produto..."
              value={searchTerm}
              onChange={handleChange}
              onBlur={handleBlur}
            />

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

            <C.SearchResults show={showResults}>
              {searchResults.length > 0 && (
                <>
                  <h3>Resultados da busca:</h3>
                  <ul>
                    {searchResults.map((product) => (
                      <C.SearchResultItem key={product.id}>
                        <Link to={`/product/${product.id}`}>
                          {product.title}
                        </Link>
                      </C.SearchResultItem>
                    ))}
                  </ul>
                </>
              )}
              {noResults && <p>Nenhum resultado encontrado.</p>}
            </C.SearchResults>
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