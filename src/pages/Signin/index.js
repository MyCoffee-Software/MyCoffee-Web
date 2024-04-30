import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as C from "./styles";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/iconeCafe.svg'
import useAuth from '../../hooks/useAuth';

const SignIn = () => {
  const { login, setUser } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email | !password) {
      setError("Preencha todos os campos!");
      return;
    }

    try {
      await login(email, password);
      setUser(await getUserData());
      navigate("/products");
    } catch (error) {
      setError(error.message);
    }
  }

  const getUserData = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("user_token")}`
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao obter informações do usuário");
    }

    return response.json();
  };

  return (
    <C.Container>
      <C.LogoHalf>
        <C.Logo src={logo} alt='MyCoffee Logo' />
      </C.LogoHalf>

      <C.ContentHalf>
        <C.Content>
          <C.Label fontSize="40px" mobileFontSize="24px" fontColor="#616161" fontWeight="700"> Faça seu login </C.Label>

          <C.LabelContent>
            <C.Label> Email </C.Label>
            <Input
              type="email"
              placeholder="Digite seu E-mail"
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
            />

            <C.Label> Senha </C.Label>
            <Input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => [setPasword(e.target.value), setError("")]}
            />
          </C.LabelContent>

          <C.Label fontColor="#ff0000">{error}</C.Label>

          <Button Text="Entrar" onClick={handleLogin} />

          <C.Label>
            Não tem conta?
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Label>
        </C.Content>
      </C.ContentHalf>
    </C.Container>
  )
}

export default SignIn