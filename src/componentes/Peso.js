import React from 'react'

export default function Peso(props){
    return(
        <div>
            <label>
                Peso <input type="text" value={props.peso} onChange={(e)=>{props.setPeso(e.target.value)}}/>
            </label>
        </div>
    );
}