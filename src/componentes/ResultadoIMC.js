import React from 'react'

export default function ResultadoIMC(props){
    return(
        <div>
            <p>Resultado: {props.resultado.toFixed(2)}</p>
        </div>
    );
}