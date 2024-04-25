import React from "react"
import * as C from "./styles";
import Cabecalho from './components/Cabecalho';
import Texto from './components/Texto';
import Fundadores from './components/Fundadores';

function AboutUs() {
  return (
    <div>
    <Cabecalho />
    <Texto />
    <Fundadores />
  </div>
  )
}
export default AboutUs;