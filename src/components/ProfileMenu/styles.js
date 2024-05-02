import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const DropdownMenu = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownContent = styled.div`
  display: ${props => (props.show ? "block" : "none")};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0 rgba(0,0,0,0.2);
  z-index: 1;
`;

export const MenuItem = styled(Link)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const Icon = styled.div`
  cursor: pointer;
`;

export const UserIcon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px black solid;
  margin-right: 10px;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: ${(props) => props.size || '32px'};
  
  color: black;
`;