import React, { useState } from 'react';
import * as C from './styles';
import bannerImage from './images/banner.png';
import Button from '../../components/Button';
import TextEditor from '../../components/TextEditor';
import useAuth from '../../hooks/useAuth';
import DOMPurify from 'dompurify';

const AboutUs = () => {
  const { user } = useAuth();
  const [content, setContent] = useState('');
  const [edit, setEdit] = useState(false);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  function sanitize(content) {
    return DOMPurify.sanitize(content);
  }

  return (
    <C.Container>
      <C.BannerContainer>
        <C.BannerImage src={bannerImage} alt="Banner" />
      </C.BannerContainer>

      <C.ContentContainer>
        <Button Text="muda" onClick={toggleEdit} />
        <C.TextContainer>
          {user?.role === "admin" && edit ? (
            <TextEditor content={content} setContent={setContent} />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: sanitize(content) }} />
          )}
        </C.TextContainer>
      </C.ContentContainer>  
    </C.Container>
  );
}

export default AboutUs;
