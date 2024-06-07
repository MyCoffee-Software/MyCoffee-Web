import React from 'react';
import * as C from './styles';
import TextBlock from '../../components/TextBlock';
import bannerImage from './images/banner.png';
import avatar1 from './images/avatar.png';
import avatar2 from './images/avatar.png';
import avatar3 from './images/avatar.png';
import avatar4 from './images/avatar.png';
import avatar5 from './images/avatar.png';
import avatar6 from './images/avatar.png';

const AboutUs = () => {
  const mainText = "Sempre gostamos muito de café – ele esteve presente em nossas manhãs desde sempre – e temos muitas boas lembranças associadas à essa querida bebida. Eu, Boris, me lembro do copo americano sujo de café que meu pai sempre deixava em cima da pia de manhã. Eu, Renata, lembro da fornada de pão quentinho e do cafezinho bem docinho que minha vó fazia nas tardes de domingo.";
  const sideText = "Mesmo tendo essa intimidade com o café, foi apenas quando conhecemos o comércio do grão verde, em sacas, que descobrimos que os cafés especiais são, em sua maioria, destinados ao mercado externo. Começamos então a provar esses grãos. Descobrimos um novo café, não sabíamos que era tão bom! Não imaginávamos ser possível toma-lo sem açúcar, apreciar suas características sensoriais e não torcer o nariz com o amargor. Aprendemos que, assim como o vinho, o sabor do café é diferente dependendo da região produtora, da safra e do manejo. Um mundo novo se abriu!";
  const founder1 = "Pedro";
  const founder2 = "Cyro";
  const founder3 = "Luan";
  const founder4 = "Yago";
  const founder5 = "Lohan";
  const founder6 = "Everton";
  const description1 = "“Ama o café da manhã. Tem senso de humor, “ousadia e alegria”. O coração é o que guia. Um pouco avoada, mas pé no chão. Melhor com números do que palavras, mas tenta. Mestra em engenharia de minas, foi arrebatada pela ideia de empreender com café especial, até então uma paixonite. Agora que foi picada pelo bichinho do café, não pensa em outra coisa…”";
  const description2 = "“Ama o café da manhã. Tem senso de humor, “ousadia e alegria”. O coração é o que guia. Um pouco avoada, mas pé no chão. Melhor com números do que palavras, mas tenta. Mestra em engenharia de minas, foi arrebatada pela ideia de empreender com café especial, até então uma paixonite. Agora que foi picada pelo bichinho do café, não pensa em outra coisa…”";
  const description3 = "“Ama o café da manhã. Tem senso de humor, “ousadia e alegria”. O coração é o que guia. Um pouco avoada, mas pé no chão. Melhor com números do que palavras, mas tenta. Mestra em engenharia de minas, foi arrebatada pela ideia de empreender com café especial, até então uma paixonite. Agora que foi picada pelo bichinho do café, não pensa em outra coisa…”";
  const description4 = "“Ama o café da manhã. Tem senso de humor, “ousadia e alegria”. O coração é o que guia. Um pouco avoada, mas pé no chão. Melhor com números do que palavras, mas tenta. Mestra em engenharia de minas, foi arrebatada pela ideia de empreender com café especial, até então uma paixonite. Agora que foi picada pelo bichinho do café, não pensa em outra coisa…”";
  const description5 = "“Ama o café da manhã. Tem senso de humor, “ousadia e alegria”. O coração é o que guia. Um pouco avoada, mas pé no chão. Melhor com números do que palavras, mas tenta. Mestra em engenharia de minas, foi arrebatada pela ideia de empreender com café especial, até então uma paixonite. Agora que foi picada pelo bichinho do café, não pensa em outra coisa…”";
  const description6 = "“Ama o café da manhã. Tem senso de humor, “ousadia e alegria”. O coração é o que guia. Um pouco avoada, mas pé no chão. Melhor com números do que palavras, mas tenta. Mestra em engenharia de minas, foi arrebatada pela ideia de empreender com café especial, até então uma paixonite. Agora que foi picada pelo bichinho do café, não pensa em outra coisa…”";

  return (
    <C.Container>
      <C.BannerContainer>
        <C.BannerImage src={bannerImage} alt="Banner" />
      </C.BannerContainer>
      <C.TextsContainer>
        <C.LeftTextBlockContainer>
          <TextBlock>
            <br></br>
            {mainText}
            <br></br>
            <br></br>
            <h2>Fundadores do MyCoffe</h2><br></br>
            <C.FounderContainer>
            <C.Founder>
              <C.FounderImage src={avatar1} alt="Perfil 1" />
              <p>{founder1}</p>
              <br></br>
              <p>{description1}</p>
            </C.Founder>
            <C.Founder>
              <C.FounderImage src={avatar2} alt="Perfil 2" />
              <p>{founder2}</p>
              <br></br>
              <p>{description2}</p>
            </C.Founder>
            <C.Founder>
              <C.FounderImage src={avatar3} alt="Perfil 3" />
              <p>{founder3}</p>
              <br></br>
              <p>{description3}</p>
            </C.Founder>
          </C.FounderContainer>
          <br></br>
          <C.FounderContainer>
            <C.Founder>
              <C.FounderImage src={avatar4} alt="Perfil 4" />
              <p>{founder4}</p>
              <br></br>
              <p>{description4}</p>
            </C.Founder>
            <C.Founder>
              <C.FounderImage src={avatar5} alt="Perfil 5" />
              <p>{founder5}</p>
              <br></br>
              <p>{description5}</p>
            </C.Founder>
            <C.Founder>
              <C.FounderImage src={avatar6} alt="Perfil 6" />
              <p>{founder6}</p>
              <br></br>
              <p>{description6}</p>
            </C.Founder>
          </C.FounderContainer>
          </TextBlock>
        </C.LeftTextBlockContainer>
        <C.RightTextBlockContainer>
          <TextBlock>
            <br></br>
            {sideText}
          </TextBlock>
        </C.RightTextBlockContainer>
      </C.TextsContainer>
    
    </C.Container>
  );
}

export default AboutUs;