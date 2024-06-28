import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/iconeCafe.png";
import {
  isValidCPF,
  isValidEmail,
  isValidMobilePhone,
  formatCEP,
  isValidCEP,
} from "@brazilian-utils/brazilian-utils";
import { toast, ToastContainer } from "react-toastify";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [rg, setRg] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [numero, setNumero] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    try {
      if (!isValidCPF(cpf)) {
        throw new Error("CPF inválido");
      }
  
      if (!isValidEmail(email)) {
        throw new Error("Email inválido");
      }
  
      if (!isValidMobilePhone(telefone)) {
        throw new Error("Telefone inválido");
      }
  
      if (!isValidCEP(cep)) {
        throw new Error("CEP inválido");
      }

      if (!name) {
        throw new Error("Insira o nome");
      }

      if (!email) {
        throw new Error("Insira o email!");
      }

      if (!senha) {
        throw new Error("Insira a senha!");
      }

      const response = await fetch(`${process.env.REACT_APP_API_URL}/clientes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          cpf: cpf,
          telefone: telefone,
          endereco: endereco,
          usuario: {
            nomeCompleto: name,
            email: email,
            senha: senha,
            imagem: " "
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao criar novo usuário');
      }

      toast.success('Usuário criado com sucesso!', {
        theme: "colored",
      });
    } catch (e) {
      toast.error(e.message);
      return;
    }
  };

  const handleCpfChange = (e) => {
    const value = e.target.value;
    setCpf(value);
    setError("");
  };

  const handleCepChange = (e) => {
    const value = e.target.value;
    setCep(value);
    if (value.length === 8) {
      fetchCepData(value);
    }
  };

  const fetchCepData = async (cep) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
        throw new Error("Erro ao buscar o CEP");
      }
      const data = await response.json();
      setEndereco(data.logradouro);
      setCidade(data.localidade);
      setEstado(data.uf);
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
      setError("CEP não encontrado");
    }
  };

  return (
    <C.Container>
      <ToastContainer/>
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
            Crie sua conta
          </C.Label>
          <C.LabelContent>
            <C.Label>Nome</C.Label>
            <Input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => [setName(e.target.value), setError("")]}
            />

            <C.Label>Email</C.Label>
            <Input
              type="email"
              placeholder="Digite seu E-mail"
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
            />

            <C.Label>Senha</C.Label>
            <Input
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => [setSenha(e.target.value), setError("")]}
            />

            <C.Label>Data de Nascimento</C.Label>
            <Input
              type="date"
              placeholder="Digite sua data de nascimento"
              value={dataNascimento}
              onChange={(e) => [
                setDataNascimento(e.target.value),
                setError(""),
              ]}
            />

            <C.Label>Telefone</C.Label>
            <Input
              type="text"
              placeholder="Digite seu telefone"
              value={telefone}
              onChange={(e) => [setTelefone(e.target.value), setError("")]}
            />

            {/*
            <C.Label>RG</C.Label>
            <Input
              type="text"
              placeholder="Digite seu RG"
              value={rg}
              onChange={(e) => [setRg(e.target.value), setError("")]}
            />
          */}
            <C.Label>CPF</C.Label>
            <Input
              type="text"
              placeholder="Digite seu CPF"
              value={cpf}
              onChange={handleCpfChange}
            />

            <C.Label>CEP</C.Label>
            <Input
              type="text"
              placeholder="Digite seu CEP"
              value={cep}
              onChange={handleCepChange}
            />
            <C.Label>Estado</C.Label>
            <Input
              type="text"
              placeholder="Estado"
              value={estado}
              onChange={(e) => [setEstado(e.target.value), setError("")]}
              disabled
            />

            <C.Label>Endereço</C.Label>
            <Input
              type="text"
              placeholder="Digite seu endereço"
              value={endereco}
              onChange={(e) => [setEndereco(e.target.value), setError("")]}
            />

            <C.Label>Cidade</C.Label>
            <Input
              type="text"
              placeholder="Digite sua cidade"
              value={cidade}
              onChange={(e) => [setCidade(e.target.value), setError("")]}
            />

            <C.Label>Número</C.Label>
            <Input
              type="text"
              placeholder="Digite o número"
              value={numero}
              onChange={(e) => [setNumero(e.target.value), setError("")]}
            />
          </C.LabelContent>

          <C.Label fontColor="#ff0000">{error}</C.Label>

          <Button Text="Cadastrar" onClick={handleSignUp} />

          <C.Label>
            Voltar para o<Link to="/signin">&nbsp;Login</Link>
          </C.Label>
        </C.Content>
      </C.ContentHalf>
    </C.Container>
  );
};

export default SignIn;
