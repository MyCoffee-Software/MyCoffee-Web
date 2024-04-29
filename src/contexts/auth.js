import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const userToken = localStorage.getItem("user_token")

    if (userToken) {
      fetch('https://api.escuelajs.co/api/v1/auth/profile', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${userToken}`
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao obter informações do usuário');
          }
          return response.json();
        })
        .then(user => {
          setUser(user);
        })
        .catch(error => {
          console.error('Erro ao obter informações do usuário:', error.message);
        });
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          password: password,
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

      const { access_token, refresh_token } = await response.json();
      setToken(access_token);
      localStorage.setItem("user_token", access_token);
    } catch (error) {
      console.error("Erro ao fazer login:", error.message);
      throw error;
    }
  };

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
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};