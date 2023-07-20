import React from 'react'

export default function CalcularIMC(props){// calculo IMC
    const calc=()=>{
        const r = props.peso/(props.altura*props.altura)
        props.setResultado(r)
        console.log(r)
    } 
    
    return(
        <div>
            <button onClick={calc}>Calcular</button>
        </div>
    );
}