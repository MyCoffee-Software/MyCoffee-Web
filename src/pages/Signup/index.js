import React, { useState } from 'react';
import SignInput from '../../components/Input';
import SignButton from '../../components/Button';
import * as C from "./styles";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/iconeCafe.svg'

const SignIn = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = () => {

  }

  return (
    <C.Container>
      <C.LogoHalf>
        <C.Logo src={logo} alt='MyCoffee Logo' />
      </C.LogoHalf>

      <C.ContentHalf>
        <C.Content>
          <C.Label fontSize="40px" mobileFontSize="24px" fontColor="#616161" fontWeight="700"> Crie sua conta </C.Label>
          <C.LabelContent>
            <C.Label> Nome </C.Label>
            <SignInput
              type="email"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => [setName(e.target.value), setError("")]}
            />

            <C.Label> Email </C.Label>
            <SignInput
              type="email"
              placeholder="Digite seu E-mail"
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
            />

            <C.Label> Senha </C.Label>
            <SignInput
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
          </C.LabelContent>

          <C.Label fontColor="#ff0000">{error}</C.Label>

          <SignButton Text="Cadastrar" onClick={handleSignUp} />

          <C.Label>
            Voltar para o
            <Link to="/signin">&nbsp;Login</Link>
          </C.Label>
        </C.Content>
      </C.ContentHalf>
    </C.Container>
  )
}

export default SignIn