import React from 'react';
import { TextBlockContainer, Text } from './styles';

function TextBlock({ children }) { // Recebe children como propriedade
  return (
    <TextBlockContainer>
      <Text>{children}</Text> {/* Renderiza o children dentro do componente Text */}
    </TextBlockContainer>
  );
}

export default TextBlock;
