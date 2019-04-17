import React from 'react';
import Member from './Member.js';
import { MDBPopover, MDBPopoverBody, MDBCol, MDBRow, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import '../Styles/Popup.css';




export class Popup extends React.Component{
  constructor(props){
    super(props);
  }
  // handleClose(){
  //   this.props.handleClose();
  // }



  // <MDBPopover component="image" placement="right">
  //   <MDBPopoverBody>
  //   <MDBRow>
  //       <MDBCol>
  //         <img src = {this.props.picSrc}/>
  //       </MDBCol>
  //
  //       <MDBCol>
  //         <MDBRow>
  //           <p>{this.props.name}</p>
  //         </MDBRow>
  //         <MDBRow>
  //           <p>{this.props.bio}</p>
  //         </MDBRow>
  //       </MDBCol>
  //
  //   </MDBRow>
  //
  //   </MDBPopoverBody>
  render(){
    return(
      <div className="popup-main">
      <MDBContainer className="popup-container">
        <MDBModal className="popup-modal" isOpen={this.props.show} toggle={()=>this.props.handleToggle()} size="md">
          <MDBModalBody>
            <MDBRow>

                <img className="popup-image"src = {this.props.member.picSrc}/>
            </MDBRow>


                <MDBRow>
                  <p>{this.props.member.name}</p>
                </MDBRow>
                <MDBRow>
                  <p>{this.props.member.bio}</p>
                </MDBRow>



          </MDBModalBody>

        </MDBModal>
      </MDBContainer>
      </div>

    );
  }
}
export default Popup;
