import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { device } from "../../styles/device";

export const Wrapper = styled.div`
  display: flex;
`;

export const SidebarWrapper = styled.div`
  background-color: white;
  border-right: 2px solid #DECDBB;
  color: black;
  width: 200px;
  margin-top: -20px;
  height: 100vh;
  top: 80;
  left: 0;
`;

export const SidebarContent = styled.div`
  padding-top: 20px;
  padding-right: 20px;
`;

export const ContentButton = styled.div`
  display: block;
  margin-bottom: 20px;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  background-color: #DECDBB;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  &:hover {
    background-color: #AE7347;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: block;
  color: black;
  text-decoration: none;
  margin-bottom: 10px;

  &.active {
    color: red;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding-left: 20px;
`;