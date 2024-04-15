import styled from "styled-components";
import { device } from "../../styles/device";

export const NavigationWrapper = styled.nav`
  background-color: #DECDBB;
  color: black;
  height: 80px;
  width: 100%;
  margin-bottom: 20px;
`;

export const NavigationContent = styled.div`
  max-width: 95%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  margin: 0;
  height: 70px;
  width: 70px;
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

export const NavLink = styled.a`
  
  text-decoration: none;
  font-size: 30px;
  font-family: "Roboto Flex", sans-serif;
  font-weight: 400;
  letter-spacing: 0%;
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
`;