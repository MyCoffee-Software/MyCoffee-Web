import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  display: flex;
`;

export const SidebarWrapper = styled.div`
  background-color: white;
  height: 100%;
  color: black;
  width: 200px;
  margin-top: -20px;
  height: 100vh;
  top: 80;
  left: 0;
`;

export const SidebarContent = styled.div`
  padding-top: 50px;
  padding-right: 20px;
`;

export const ContentButton = styled.div`
  display: block;
  margin-bottom: 20px;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  background-color: #DECDBB;
  border: 2px solid #CDB499;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  &:hover {
    background-color: #AE7347;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding-left: 20px;
`;

export const MobileSidebarWrapper = styled.div`
  left: ${(props) => (props.isOpenn ? "0" : "-250px")};
  border-right: 2px solid black;
  position: fixed;
  top: 0;
  width: 250px;
  height: 100vh;
  background-color: white;
  transition: left 0.3s ease-in-out;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const MobileUserWrapper = styled.div`
  background-color: #DECDBB;
  width: 100%;
  height: 90px;
`;

export const MobileContent = styled.div`
  display: flex;
  padding-top: 20px;
  padding-left: 20px;
  align-items: center;
`;

export const Aside = styled.aside`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: ${(props) => (props.isOpenn ? "250px" : "0")};
  width: ${(props) => (props.isOpenn ? "calc(100% - 250px)" : "0")};
  height: 100vh;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: ${(props) => props.size || '32px'};
  
  color: black;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-left: 10px;
  
`;
