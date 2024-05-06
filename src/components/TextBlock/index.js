import React from 'react';
import { TextBlockContainer, Text } from './styles';

function TextBlock({ children }) {
  return (
    <TextBlockContainer>
      <Text>{children}</Text>
    </TextBlockContainer>
  );
}

export default TextBlock;
