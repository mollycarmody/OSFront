import React from 'react';
import { MDBRow, MDBContainer, MDBInput, MDBCol, MDBFormInline, MDBIcon, MDBBtn } from "mdbreact";
import '../Styles/CounterItem.css';


export class CountItem extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement(){
    console.log("up");

    this.setState({
      count:this.state.count+1
    });
  }
  handleDecrement(){
    console.log("down");
    this.setState({
      count:this.state.count==0? 0:this.state.count-1
    });
  }
  render(){
    return(
      <div>
      <MDBRow>
        <MDBCol>
          {this.props.name}
        </MDBCol>
        <MDBCol>
          <div className="def-number-input number-input">
           <MDBBtn outline color="primary" onClick={this.handleDecrement} className="minus" id="countitem-button"></MDBBtn>
           <input className="quantity" name="quantity" value={this.state.count}
           type="number"/>
           <MDBBtn outline color="primary" onClick={this.handleIncrement} className="plus" id="countitem-button"></MDBBtn>
         </div>
        </MDBCol>
      </MDBRow>
      </div>

    );
  }
}
export default CountItem;
