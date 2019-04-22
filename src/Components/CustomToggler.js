import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export class CustomToggler extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <span className="navbar-toggler-icon">
          <FontAwesomeIcon onClick={this.props.handleClick} icon={faBars}/>
      </span>
    )
  }
}

export default CustomToggler;
