import styled from "styled-components";
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

  @media ${device.lg} {
    display: ${(props) => (props.isOpenn ? "block" : "inline")};
    left: ${(props) => (props.isOpenn ? "0" : "-250px")};
    position: fixed;
    top: 0;
    width: 250px;
    height: 100vh;
    background-color: white;
    transition: left 0.3s ease-in-out;
    padding: 0;
    margin: 0;
  }
`;

export const MobileSidebarWrapper = styled.div`
  left: ${(props) => (props.isOpenn ? "0" : "-250px")};
  border-right: 2px solid #DECDBB;
  position: fixed;
  top: 0;
  width: 250px;
  height: 100vh;
  background-color: white;
  transition: left 0.3s ease-in-out;
  padding: 0;
  margin: 0;
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

export const Content = styled.div`
  flex: 1;
  padding-left: 20px;
`;

export const Aside = styled.aside`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: ${(props) => (props.isOpenn ? "250px" : "0")};
  width: ${(props) => (props.isOpenn ? "calc(100% - 250px)" : "0")};
  height: 100vh;
  
`;
