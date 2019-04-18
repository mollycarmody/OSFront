import React from 'react';

export class CustomToggler extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <span className="navbar-toggler-icon">
          <i className="fa fa-navicon" onClick={this.props.handleClick}></i>
      </span>
    )
  }
}

export default CustomToggler;
