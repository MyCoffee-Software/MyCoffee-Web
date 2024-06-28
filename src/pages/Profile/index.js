import React, { useEffect, useState } from 'react';
import * as C from "./styles"
import useAuth from '../../hooks/useAuth';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import InfoInput from '../../components/InfoInput';
import Button from '../../components/Button';

const Profile = () => {
  const { user } = useAuth();
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

  const formatDateString = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();

    if (month.length === 1) {
      month = '0' + month;
    }
    if (day.length === 1) {
      day = '0' + day;
    }

    return `${year}-${month}-${day}`;
  };

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleInputChange = (e) => {
    const { name, inputInfo } = e.target;
    setUserData((prevInputData) => ({
      ...prevInputData,
      [name]: inputInfo,
    }));
  };

  const handlePasswordChange = () => {

  };

  const handleSave = async () => {

  }

  return (
    <C.ProfileContainer>
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
          <InfoInput title="RG" inputInfo={userData.name} disabled={edit} onChange={handleInputChange} />
        </C.UserInfoColumn>

        <C.UserInfoColumn>
          <InfoInput title="CEP" inputInfo={userData.name} disabled={edit} onChange={handleInputChange} />
          <InfoInput title="Endereço" name="adress" inputInfo={userData.adress} disabled={edit} onChange={handleInputChange} />
          <InfoInput title="Estado" inputInfo={userData.email} disabled={edit} onChange={handleInputChange} />
          <InfoInput title="Cidade" inputInfo={userData.name} disabled={edit} onChange={handleInputChange} />
          <InfoInput title="Número" inputInfo={userData} disabled={edit} onChange={handleInputChange} />
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