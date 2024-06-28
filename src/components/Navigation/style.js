import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const NavigationWrapper = styled.nav`
  background-color: #decdbb;
  color: black;
  height: 80px;
  width: 100%;
  margin-bottom: 20px;
  position: relative;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5); 
`;

export const NavigationContent = styled.div`
  max-width: 95%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative; 
`;

export const Logo = styled.img`
  height: ${(props) => props.height || "70px"};
  width: ${(props) => props.width || "70px"};
  margin: 0;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: ${(props) => props.size || "32px"};
  color: black;
`;

export const NavigationItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 40px;
`;

export const NavigationItem = styled.li`
  margin-right: 20px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  font-family: "Roboto Flex", sans-serif;
  font-weight: 400;
  letter-spacing: 0%;
  color: black;
  transition: color 0.2s ease;

  &:hover {
    text-decoration: underline;
    color: #a54f00;
  }
`;

export const SearchBar = styled.input`
  margin-right: 20px;
  padding: 8px;
  border-radius: 30px;
  border: none;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  font-size: 16px;
  margin-right: 16px;
`;

export const SearchResults = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: calc(100% - 30%);
  width: 30%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1000;
  display: ${(props) => (props.show ? "block" : "none")}; 
`;

export const SearchResultItem = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }

  a {
    text-decoration: none;
    color: black;

    &:hover {
      text-decoration: underline;
      color: #a54f00;
    }
  }
`;
