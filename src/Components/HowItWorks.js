import React from 'react';
import ToggleInfo from './ToggleInfo.js';
import List from './List.js';
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBFormInline, MDBIcon, MDBBtn } from "mdbreact";
import '../Styles/HowItWorks.css';

export class HowItWorks extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
      const userFirstStep = (
        <div id="userFirstStep">
          Lorem ipsum<a href="#">dolor sit</a>amet
        </div>
      );
      const userSteps= [userFirstStep, 'Cras porta congue neque in molestie. Vestibulum egestas ullamcorper nunc, vel placerat neque blandit non.', 'Sed ut cursus augue.'];
      const hostSteps= ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras porta congue neque in molestie. Vestibulum egestas ullamcorper nunc, vel placerat neque blandit non.', 'Sed ut cursus augue.'];

      const userContent = (<MDBJumbotron center className="howitworks-jumbotron"><List bulletPoints={userSteps} ordered={true} /></MDBJumbotron>);
      const hostContent = (<MDBJumbotron center className="howitworks-jumbotron"><List bulletPoints={hostSteps} ordered={true}/></MDBJumbotron>);
    return(


      <MDBContainer className="howitworks-container">
          <MDBRow size="sm" className="howitworks-row">
            <ToggleInfo title="Finding Storage Space " lessIcon = "glyphicon glyphicon-minus" moreIcon="glyphicon glyphicon-plus" content={userContent}/>
          </MDBRow>
          <MDBRow size="sm" className="howitworks-row">
            <ToggleInfo title="Listing Storage Space " lessIcon = "glyphicon glyphicon-minus" moreIcon="glyphicon glyphicon-plus" content={hostContent}/>
          </MDBRow>
      </MDBContainer>



    );
  }
}
export default HowItWorks;
