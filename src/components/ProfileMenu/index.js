import React, { useEffect, useState, useRef } from 'react';
import * as C from "./styles";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../hooks/useAuth';

const ProfileMenu = ( { userImage } ) => {
  const { logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    logout();
    window.location.reload();
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
        <C.MenuItem onClick={handleLogout} >Sair</C.MenuItem>
      </C.DropdownContent>
    </C.DropdownMenu>
  );
};

export default ProfileMenu;