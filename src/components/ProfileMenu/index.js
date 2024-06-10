import React, { useEffect, useState, useRef } from 'react';
import * as C from "./styles";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const ProfileMenu = ( { userImage } ) => {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    logout();
    navigate("/products");
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  
  return (
    <C.DropdownMenu ref={dropdownRef}>
      <C.Icon onClick={toggleDropdown}>
        {userImage ? (
          <C.UserIcon src={userImage} alt="User" />
        ) : (
          <C.StyledIcon icon={faCircleUser} size="40px" fixedWidth />
        )}
      </C.Icon>

      <C.DropdownContent show={showDropdown}>
        <C.MenuItem to="/profile">Perfil</C.MenuItem>

        {user?.role === "admin" && (
          <C.MenuItem to="/dashboard">Dashboard</C.MenuItem>
        )}

        <C.MenuItem to="/home" onClick={handleLogout} >Sair</C.MenuItem>
      </C.DropdownContent>
    </C.DropdownMenu>
  );
};

export default ProfileMenu;