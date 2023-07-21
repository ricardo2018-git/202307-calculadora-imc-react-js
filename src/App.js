import React,{useState} from 'react'
import TabelaIMC from './componentes/TabelaIMC'
import Peso from './componentes/Peso'
import Altura from './componentes/Altura'
import CalcularIMC from './componentes/CalcularIMC'
import ResultadoIMC from './componentes/ResultadoIMC'

export default function App() {

  const[peso,setPeso]=useState(0)
  const[altura,setAltura]=useState(0)
  const[resultado,setResultado]=useState(0)

  return (
    <>
      <h1>Calculadora IMC</h1>
      <Peso peso={peso} setPeso={setPeso}/>
      <Altura altura={altura} setAltura={setAltura}/>
      <CalcularIMC peso={peso} altura={altura} setResultado={setResultado}/>
      <ResultadoIMC resultado={resultado}/>
      <TabelaIMC/>
    </>
  );
}