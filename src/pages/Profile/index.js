import React, { useEffect, useState } from 'react';
import * as C from "./styles"
import useAuth from '../../hooks/useAuth';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import InfoInput from '../../components/InfoInput';
import Button from '../../components/Button';
import { toast, ToastContainer } from 'react-toastify';
import { formatCPF, isValidCPF, isValidEmail, isValidMobilePhone } from '@brazilian-utils/brazilian-utils';

const Profile = () => {
  const { user, fetchUser } = useAuth();
  const [edit, setEdit] = useState(true);
  const [client, setClient] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
    date: "",
    phone: "",
    cpf: "",
    cep: "",
    estado: "",
    cidade: "",
    num: "",
  });
  const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    if (user && user.imagem) {
      const imageName = user.imagem.split('/').pop();
      import(`../../assets/User/${imageName}`)
        .then(imageModule => {
          setUserImage(imageModule.default);
        })
        .catch(error => {
          console.error(`Failed to load image: ${imageName}`, error);
        });
    }
  }, [user]);

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/clientes?id=${user.id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("user_token")}`
          },
        });

        if (!response.ok) {
          throw new Error("ERRO");
        }

        const client = await response.json();
        setClient(client);
      } catch (e) {
        console.error(e);
      }
    }

    if (user) {
      fetchClient();
    }
  }, [user]);

  useEffect(() => {
    if (user && client) {
      const formattedDate = new Date(client.date);
      console.log(formattedDate);
      setUserData({
        name: user.nome,
        email: user.email,
        cpf: client.cpf,
        date: formattedDate,
        phone: client.telefone,
        address: client.endereco,
        cep: client.cep,
        state: client.estado,
        city: client.cidade,
        num: client.numero 
      });
    }
  }, [user, client]);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    
    if (name === 'cpf') {
      const cpf = value.replace(/\D/g, '');
      newValue = cpf;
    }
    
    setUserData((prevInputData) => ({
      ...prevInputData,
      [name]: newValue,
    }));

    if (name === 'cep') {
      const cepNumerico = value.replace(/\D/g, '');
      if (cepNumerico.length === 8) {
        handleCEP(cepNumerico);
      }
    }
  };

  const handlePasswordChange = () => {

  };

  const handleCEP = async (cep) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
        throw new Error("Erro ao buscar o CEP");
      }
      const data = await response.json();

      setUserData((prevInputData) => ({
        ...prevInputData,
        cep: cep,
        address: data.logradouro,
        city: data.localidade,
        state: data.uf,
      }))
    } catch (error) {
      toast.error('Erro ao buscar o CEP');
      console.error("Error:", error);
    }
  };

  const handleSave = async () => {
    try {
      if (!isValidEmail(userData.email)) {
        throw new Error("Email inválido");
      }
  
      if (!isValidMobilePhone(userData.phone)) {
        throw new Error("Telefone inválido");
      }

      const response = await fetch(`${process.env.REACT_APP_API_URL}/clientes?id=${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("user_token")}`
        },
        body: JSON.stringify({
          cpf: userData.cpf,
          telefone: userData.phone,
          endereco: userData.address,
          cep: userData.cep,
          estado: userData.state,
          cidade: userData.city,
          numero: userData.num,
          usuario: {
            nomeCompleto: userData.name,
            email: userData.email,
            imagem: user.imagem
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar usuário');
      }

      setEdit(!edit);
      fetchUser(localStorage.getItem("user_token"));
      toast.success('Usuário atualizado com sucesso!', {
        theme: "colored",
      });
    } catch (e) {
      toast.error(e.message);
      console.error("Error:", e);
    }
  }

  return (
    <C.ProfileContainer>
      <ToastContainer/>
      <C.Banner>
        Dados do usuário
        <C.EditButton onClick={handleEdit} icon={faCog} />
      </C.Banner>

      <C.ProfileInfo>
        <C.ProfileImage src={userImage} alt="Imagem do Usuário" />
        <C.Username>{user?.nome}</C.Username>
      </C.ProfileInfo>

      <C.UserInfoWrapper>
        <C.UserInfoColumn>
          <InfoInput title="Nome" name="name" inputInfo={userData.name} disabled={edit} onChange={handleInputChange} />
          <InfoInput title="Email" name="email" inputInfo={userData.email} disabled={edit} onChange={handleInputChange} />
          <InfoInput title="Data de nascimento" type="date" name="date" inputInfo={userData.date} disabled={edit} onChange={handleInputChange} />
          <InfoInput title="Telefone" name="phone" inputInfo={userData.phone} disabled={edit} onChange={handleInputChange} />
          <InfoInput title="CPF" name="cpf" inputInfo={userData.cpf} disabled={edit} onChange={handleInputChange} mask="999.999.999-99"/>
        </C.UserInfoColumn>

        <C.UserInfoColumn>
          <InfoInput title="Endereço" name="adress" inputInfo={userData.address} disabled={edit} onChange={handleInputChange} />
          <InfoInput title="CEP" name="cep" inputInfo={userData.cep} disabled={edit} onChange={handleInputChange} mask="99999-999"/>
          <InfoInput title="Estado" name="state" inputInfo={userData.state} disabled={edit} onChange={handleInputChange} />
          <InfoInput title="Cidade" name="city" inputInfo={userData.city} disabled={edit} onChange={handleInputChange} />
          <InfoInput title="Número" name="num" inputInfo={formatCPF(userData.num)} disabled={edit} onChange={handleInputChange} />
        </C.UserInfoColumn>
      </C.UserInfoWrapper>

      {edit ? (
        <></>
      ) : (
        <C.ButtonWrapper>
          <Button Text="Mudar Senha" onClick={handlePasswordChange} />
          <Button Text="Salvar" onClick={handleSave} />
        </C.ButtonWrapper>
      )}

    </C.ProfileContainer>
  );
};

export default Profile;