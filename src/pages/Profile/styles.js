import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { device } from "../../styles/device";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${device.md} {
    align-items: center;
  }
`;

export const Banner = styled.div`
  display: flex;
  background-color: rgba(222, 205, 187, 0.5);
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 20px;
  width: 100%;
  margin-top: -20px;
  text-align: left;
  color: black;
  font-size: 30px;
`;

export const EditButton = styled(FontAwesomeIcon)`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

export const Username = styled.h2`
  margin-left: 30px;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 50px;
  width: 60%;

  @media ${device.md} {
    margin-left: 0px;
    flex-direction: column;
  }
`;

export const UserInfoColumn = styled.div`
  width: 50%;
  padding: 0 10px;

  @media ${device.md} {
    width: 100%;
    padding: 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin-left: 50px;
  gap: 40px;
`;
