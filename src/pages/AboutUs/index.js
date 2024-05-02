import React from "react"
import * as C from "./styles";
import Cabecalho from '../../components/AboutUs/Cabecalho';
import Texto from '../../components/AboutUs/Texto';
import Fundadores from '../../components/AboutUs/Fundadores';

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