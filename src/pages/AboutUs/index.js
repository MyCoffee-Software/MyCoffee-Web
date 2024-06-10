import React, { useState } from 'react';
import * as C from './styles';
import TextEditor from '../../components/TextEditor';
import useAuth from '../../hooks/useAuth';
import DOMPurify from 'dompurify';
import { faCheck, faCog } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';

const AboutUs = () => {
  const { user } = useAuth();
  const [content, setContent] = useState('');
  const [edit, setEdit] = useState(false);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const handleSave = () => {
    toggleEdit();
    toast.success('Salvo!', {
      theme: "colored",
      });
  }

  function sanitize(content) {
    return DOMPurify.sanitize(content);
  }

  return (
    <>
      <C.Container>
        <C.ContentContainer>
          <C.IconContainer>
            { edit ? (
              <C.IconButton onClick={handleSave} icon={faCheck} size='xl'/>
            ) : (
              <C.IconButton onClick={toggleEdit} icon={faCog} size='xl'/>
            )}
          </C.IconContainer>
          <C.TextContainer>
            {user?.role === "admin" && edit ? (
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
