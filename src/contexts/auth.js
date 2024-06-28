import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [permissions, setPermissions] = useState([]);
  const [token, setToken] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const userToken = localStorage.getItem("user_token")
    if (userToken) {
      fetchUser(userToken);
    }
  }, []);

  const fetchUser = async (userToken) => {
    try {
      const response = await fetch(`${API_URL}/usuarios/perfil`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${userToken}`
        },
      });
      if (!response.ok) {
        throw new Error('Erro ao obter informações do usuário');
      }
      const { usuario, permissoes} = await response.json();

      setUser(usuario);
      setPermissions(permissoes);
    } catch (error) {
      console.error('Erro ao obter informações do usuário:', error.message);
    }
  };

  const login = async (username, password) => {
    try {
      const response = await fetch(`${API_URL}/usuarios/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          senha: password,
        }),
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Usuário não encontrado");
        }

        if (response.status === 401) {
          throw new Error("Credencias inválidas");
        }

        throw new Error("Não foi possível fazer login");
      }

      const { token } = await response.json();
      setToken(token);
      localStorage.setItem("user_token", token);
      await fetchUser(token);
    } catch (error) {
      console.error("Erro ao fazer login:", error.message);
      throw error;
    }
  };

  const updateUser = async (userId, userData) => {
    try {
      const response = await fetch(`https://api.escuelajs.co/api/v1/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar os dados do usuário');
      }

      return response.json();
    } catch (error) {
      console.error('Erro ao atualizar os dados do usuário:', error.message);
      throw error;
    }
  }

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("user_token");
  };

  const value = {
    user,
    setUser,
    token,
    login,
    logout,
    updateUser, 
    permissions,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};