import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/iconeCafe.png";
import useAuth from "../../hooks/useAuth";

const SignIn = () => {
  const { login, setUser } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    if (event) event.preventDefault();

    if (!email | !password) {
      setError("Preencha todos os campos!");
      return;
    }

    try {
      await login(email, password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <C.Container>
      <C.LogoHalf>
        <C.Logo src={logo} alt="MyCoffee Logo" />
      </C.LogoHalf>

      <C.ContentHalf>
        <C.Content>
          <C.Label
            fontSize="40px"
            mobileFontSize="24px"
            fontColor="#616161"
            fontWeight="700"
          >
            {" "}
            Faça seu login{" "}
          </C.Label>


          <C.LabelContent onSubmit={handleLogin}>
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
              onKeyDown={(e) => e.key === "Enter" && handleLogin(e)}
            />
          </C.LabelContent>


          <C.Label fontColor="#ff0000">{error}</C.Label>

          <Button Text="Entrar" onClick={handleLogin} type="submit" />

          <C.Label>
            Não tem conta?
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Label>
        </C.Content>
      </C.ContentHalf>
    </C.Container>
  );
};

export default SignIn;
