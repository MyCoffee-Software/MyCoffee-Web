import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const userToken = localStorage.getItem("user_token")

    if (userToken) {
      fetch('https://fakestoreapi.com/users', {
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
          setToken(user);
        })
        .catch(error => {
          console.error('Erro ao obter informações do usuário:', error.message);
        });
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
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

      const { token } = await response.json();
      setToken(token);
      localStorage.setItem("user_token", token);
    } catch (error) {
      console.error("Erro ao fazer login:", error.message);
      throw error;
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("user_token");
  };

  const value = {
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