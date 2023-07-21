import React from 'react'

export default class Peso extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <label>
                    Peso <input type="text" value={this.props.peso} onChange={(e)=>{this.props.setPeso(e.target.value)}}/>
                </label>
            </div>
        );
    }
}