import React, { useEffect, useState } from 'react';
import * as C from "./styles"
import useAuth from '../../hooks/useAuth';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import InfoInput from '../../components/InfoInput';
import Button from '../../components/Button';
import { toast, ToastContainer } from 'react-toastify';

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
    cpf: ""
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
      });
    }
  }, [user, client]);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevInputData) => ({
      ...prevInputData,
      [name]: value,
    }));
  };

  const handlePasswordChange = () => {

  };

  const handleSave = async () => {
    try {
      console.log(userData);
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

      setEdit(false);
      fetchUser(localStorage.getItem("user_token"));
      toast.success('Usuário atualizado com sucesso!', {
        theme: "colored",
      });
    } catch (e) {
      toast.error('Erro ao atualizar usuário');
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
          <InfoInput title="Endereço" name="adress" inputInfo={userData.address} disabled={edit} onChange={handleInputChange} />
        </C.UserInfoColumn>

        <C.UserInfoColumn>
          {/*
          <InfoInput title="RG" inputInfo={userData.name} disabled={edit} onChange={handleInputChange} />
          <InfoInput title="CEP" inputInfo={userData.name} disabled={edit} onChange={handleInputChange} />
          <InfoInput title="Estado" inputInfo={userData.email} disabled={edit} onChange={handleInputChange} />
          <InfoInput title="Cidade" inputInfo={userData.name} disabled={edit} onChange={handleInputChange} />
          <InfoInput title="Número" inputInfo={userData} disabled={edit} onChange={handleInputChange} />
          */}
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