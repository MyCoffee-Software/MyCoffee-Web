import React, { useEffect, useState } from 'react';
import * as C from "./styles"
import useAuth from '../../hooks/useAuth';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import InfoInput from '../../components/InfoInput';
import Button from '../../components/Button';

const Profile = () => {
  const { user, updateUser } = useAuth();
  const [edit, setEdit] = useState(true);
  const [userData, setUserData] = useState({
    name: user.nome,
    email: user.email
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

  const handleEdit = () => {
    setEdit(!edit);
    console.log(user);
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
        <C.Username>{user.nome}</C.Username>
      </C.ProfileInfo>

      <C.UserInfoWrapper>
        <C.UserInfoColumn>
          <InfoInput title="Nome" name="name" inputInfo={userData.name} disabled={edit} onChange={handleInputChange} />
          <InfoInput title="Email" name="email" inputInfo={userData.email} disabled={edit} onChange={handleInputChange}/>
          <InfoInput title="Data de nascimento" inputInfo={userData.name} disabled={edit} onChange={handleInputChange}/>
          <InfoInput title="Telefone" inputInfo={userData.name} disabled={edit} onChange={handleInputChange}/>
          <InfoInput title="RG" inputInfo={userData.name} disabled={edit} onChange={handleInputChange}/>
        </C.UserInfoColumn>

        <C.UserInfoColumn>
          <InfoInput title="CEP" inputInfo={userData.name} disabled={edit} onChange={handleInputChange}/>
          <InfoInput title="Endereço" inputInfo={userData.email} disabled={edit} onChange={handleInputChange}/>
          <InfoInput title="Estado" inputInfo={userData.email} disabled={edit} onChange={handleInputChange}/>
          <InfoInput title="Cidade" inputInfo={userData.name} disabled={edit} onChange={handleInputChange}/>
          <InfoInput title="Número" inputInfo={userData.name} disabled={edit} onChange={handleInputChange}/>
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