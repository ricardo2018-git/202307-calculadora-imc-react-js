import React from 'react'

export default class CalcularIMC extends React.Component{
    constructor(props){
        super(props)
        this.calc=this.calc.bind(this)
    }
    calc=()=>{
        const r = this.props.peso/(this.props.altura*this.props.altura)
        this.props.setResultado(r)
        //console.log(r)
    } 
    render(){
        return(
            <div>
                <button onClick={this.calc}>Calcular</button>
            </div>
        );
    }
}