import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top:100px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top:10px; 
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  width: 95%;
  margin-top:10px;
`;

export const IconButton = styled(FontAwesomeIcon)`
  border: none;
  background-color: transparent;
  cursor: pointer;
  top: 581px;
`;

export const TextContainer = styled.div`
  width: 95%;
  
  .ql-size-10px {
    font-size: 10px;
  }
  .ql-size-12px {
    font-size: 12px;
  }
  .ql-size-14px {
    font-size: 14px;
  }
  .ql-size-16px {
    font-size: 16px;
  }
  .ql-size-18px {
    font-size: 18px;
  }
  .ql-size-20px {
    font-size: 20px;
  }
  .ql-size-24px {
    font-size: 24px;
  }
  .ql-size-30px {
    font-size: 30px;
  }

  .ql-editor {
    text-align: left;
  }
  .ql-align-center {
    text-align: center;
  }
  .ql-align-justify {
    text-align: justify;
  }
  .ql-align-right {
    text-align: right;
  }
`;



export const LogoContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Logo = styled.img`
  height: 100px;
  object-fit: cover;
  position: absolute;
  margin-top: -19px;
  width: 100%;
`;

export const LogoText = styled.div`
  position: absolute;
  margin-top: 25px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-family: 'Volkhov', serif;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 
    -1px -1px 0 #000,  
     1px -1px 0 #000,
    -1px  1px 0 #000,
     1px  1px 0 #000;
  padding: 10px 20px;
`;