import React, { useState } from 'react';
import * as C from "./styles"
import useAuth from '../../hooks/useAuth';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import InfoInput from '../../components/InfoInput';
import Button from '../../components/Button';

const Profile = () => {
  const { user } = useAuth();
  const [edit, setEdit] = useState(true);

  const handleEdit = () => {
    setEdit(!edit);
  }

  const handlePasswordChange = () => {

  };

  const handleSave = () => {

  }

  return (
    <C.ProfileContainer>
      <C.Banner>
        Dados do usuário
        <C.EditButton onClick={handleEdit} icon={faCog} />
      </C.Banner>

      <C.ProfileInfo>
        <C.ProfileImage src={user.avatar} alt="Imagem do Usuário" />
        <C.Username>{user.name}</C.Username>
      </C.ProfileInfo>

      <C.UserInfoWrapper>
        <C.UserInfoColumn>
          <InfoInput title="Nome" inputInfo={user.name} disabled={edit} />
          <InfoInput title="Email" inputInfo={user.email} disabled={edit} />
          <InfoInput title="Data de nascimento" inputInfo={user.name} disabled={edit} />
          <InfoInput title="Telefone" inputInfo={user.name} disabled={edit} />
          <InfoInput title="RG" inputInfo={user.name} disabled={edit} />
        </C.UserInfoColumn>

        <C.UserInfoColumn>
          <InfoInput title="CEP" inputInfo={user.name} disabled={edit} />
          <InfoInput title="Endereço" inputInfo={user.email} disabled={edit} />
          <InfoInput title="Estado" inputInfo={user.email} disabled={edit} />
          <InfoInput title="Cidade" inputInfo={user.name} disabled={edit} />
          <InfoInput title="Número" inputInfo={user.name} disabled={edit} />
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