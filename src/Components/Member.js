import React from 'react';
import { MDBView, MDBMask, MDBContainer, MDBRow, MDBCol, MDBFormInline, MDBIcon, MDBBtn } from "mdbreact";
import '../Styles/MeetTeam.css';

export class Member extends React.Component{
  constructor(props){
    super(props);

  }
  handleHover(){
    console.log("hover");
  }


  render(){
    return(

      <MDBCol className="memberCol" size="sm">
        <MDBView hover onMouseOver={()=>this.handleHover()}>
          <img className="memberPic" src={this.props.picSrc}/>
          <MDBMask className="memberMask flex-center" overlay="red-light">
                <h4 className="memberTitle white-text">title in openspace</h4>
          </MDBMask>
        </MDBView>
        <h2 className="memberName">{this.props.name}</h2>


      </MDBCol>

    );
  }
}
export default Member;
