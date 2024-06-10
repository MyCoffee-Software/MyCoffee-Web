import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BannerContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  margin-top: -20px;
  flex: 1;
`;

export const BannerImage = styled.img`
  width: 100%; 
  height: auto;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  width: 95%;
`;

export const IconButton = styled(FontAwesomeIcon)`
  border: none;
  background-color: transparent;
  cursor: pointer;
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