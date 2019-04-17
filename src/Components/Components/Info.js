import React from 'react';
import Row from 'react-bootstrap/Row';
import Point from './Point.js';
import Container from 'react-bootstrap/Container';


export class Info extends React.Component{
  constructor(props){
    super(props);
    this.reformatDate = this.reformatDate.bind(this);
  }
  reformatDate(date){
    console.log(date);
    const year = date.substring(0,3);
    date.replace(year+'-', '');
    date = date + "/"+ year;
    date = date.replace('-', '/');
    return date;
  }
  render(){

    // const startDate = this.reformatDate(this.props.start_date);
    // const endDate = this.reformatDate(this.props.end_date);

  return(
      <Container>
        <Point dataDisplay={this.props.space_type} gIcon = "glyphicon-home"/>
        <Point dataDisplay={this.props.listed_price + "/sqInch"} gIcon = "glyphicon-usd"/>
        <Point dataDisplay={'Available: '+this.props.start_date +' to ' + this.props.end_date} gIcon = "glyphicon-time"/>
        <Point dataDisplay={this.props.total_space + "sq. ft remaining"} gIcon = "glyphicon-resize-horizontal"/>
        <Point dataDisplay="OpenSpace Verified" gIcon = "glyphicon-ok-circle"/>
      </Container>

    );
  }

}
export default Info;
