import React from 'react';
import Row from 'react-bootstrap/Row';
import Point from './Point.js';
import Container from 'react-bootstrap/Container';


export class Info extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Container>
        <Point dataDisplay={this.props.spaceType} gIcon = "glyphicon-home"/>
        <Point dataDisplay={this.props.pricePerSq + "/sqInch"} gIcon = "glyphicon-usd"/>
        <Point dataDisplay="8:00AM - 12:00PM (Monday-Friday)" gIcon = "glyphicon-time"/>
        <Point dataDisplay={this.props.spaceAvailable + "sq. ft remaining"} gIcon = "glyphicon-resize-horizontal"/>
        <Point dataDisplay="OpenSpace Verified" gIcon = "glyphicon-ok-circle"/>
      </Container>

    );
  }

}
export default Info;
