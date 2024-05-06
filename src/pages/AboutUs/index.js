import React from 'react';
import * as C from './styles';
import TextBlock from '../../components/TextBlock';
import bannerImage from './images/banner2.png';

const AboutUs = () => {
  const textContent1 = "Sempre gostamos muito de café – ele esteve presente em nossas manhãs desde sempre – e temos muitas boas lembranças associadas à essa querida bebida. Eu, Boris, me lembro do copo americano sujo de café que meu pai sempre deixava em cima da pia de manhã. Eu, Renata, lembro da fornada de pão quentinho e do cafezinho bem docinho que minha vó fazia nas tardes de domingo.";
  const textContent2 = "Mesmo tendo essa intimidade com o café, foi apenas quando conhecemos o comércio do grão verde, em sacas, que descobrimos que os cafés especiais são, em sua maioria, destinados ao mercado externo. Começamos então a provar esses grãos. Descobrimos um novo café, não sabíamos que era tão bom! Não imaginávamos ser possível toma-lo sem açúcar, apreciar suas características sensoriais e não torcer o nariz com o amargor. Aprendemos que, assim como o vinho, o sabor do café é diferente dependendo da região produtora, da safra e do manejo. Um mundo novo se abriu!";

  return (
    <C.Container>
      <C.BannerContainer>
        <C.BannerImage src={bannerImage} alt="Banner" />
      </C.BannerContainer>
      
      <C.TextsContainer>
        <C.LeftTextBlockContainer>
          <TextBlock>
            {textContent1}
          </TextBlock>
        </C.LeftTextBlockContainer>
        <C.RightTextBlockContainer>
          <TextBlock>
            {textContent2}
          </TextBlock>
        </C.RightTextBlockContainer>
      </C.TextsContainer>
    
    </C.Container>
  );
}

export default AboutUs;