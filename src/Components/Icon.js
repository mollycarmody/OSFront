import React from 'react';

export class Icon extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
      return(
        <i className={this.props.iconType}></i>
      );
    }
}

export default Icon;
