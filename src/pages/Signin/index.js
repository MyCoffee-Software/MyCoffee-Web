import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as C from "./styles";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/iconeCafe.svg'

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {

  }

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
              value={senha}
              onChange={(e) => [setSenha(e.target.value), setError("")]}
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