import React, { useEffect, useState } from 'react';
import * as C from './styles';
import TextEditor from '../../components/TextEditor';
import useAuth from '../../hooks/useAuth';
import DOMPurify from 'dompurify';
import { faCheck, faCog } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import logo from "../../assets/logo_sobre_nos.svg";

const AboutUs = () => {
  const { permissions } = useAuth();
  const [content, setContent] = useState();
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/sobre`);
        const data = await response.text();
        console.log(data);
        setContent(data);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchContent();
  }, []);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/sobre`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });
      if (!response.ok) {
        throw new Error('Erro ao salvar o conteúdo');
      }
      toggleEdit();
      toast.success('Salvo!', {
        theme: "colored",
      });
    } catch (e) {
      toast.error('Erro ao salvar.', {
        theme: "colored",
      });
      console.log(e.message);
    }
  };

  function sanitize(content) {
    return DOMPurify.sanitize(content);
  }

  return (
    <>
      <C.LogoContainer>
        <C.Logo src={logo} alt="Image" />
        <C.LogoText>SOBRE NÓS</C.LogoText>
      </C.LogoContainer>
      <C.Container>
        <C.ContentContainer>
          {permissions?.includes("Administrador") && (
            <C.IconContainer>
              {edit ? (
                <C.IconButton onClick={handleSave} icon={faCheck} size='xl' />
              ) : (
                <C.IconButton onClick={toggleEdit} icon={faCog} size='xl' />
              )}
            </C.IconContainer>
          )}
          <C.TextContainer>
            {permissions?.includes("Administrador") && edit ? (
              <TextEditor content={content} setContent={setContent} />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: sanitize(content) }} />
            )}
          </C.TextContainer>
        </C.ContentContainer>
      </C.Container>
      <ToastContainer />
    </>
  );
}

export default AboutUs;
