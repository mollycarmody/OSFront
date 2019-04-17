import React, { Component } from 'react';
//import PracticeNewPage from './PracticeNewPage.js'

export class Button extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);


    }
    // props:
    // label = text that button displays
    handleClick(param1){
       // {()=>this.props.buttonFunction(param1)}

    }
    render(){
        //let paramToPass = {this.props.param}
        return(
            <button {...this.props.attr}>{this.props.label}</button>
        );
    }



}
export default Button;
