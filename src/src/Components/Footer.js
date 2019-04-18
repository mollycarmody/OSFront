import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import { MDBNavLink, MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { SocialIcon } from 'react-social-icons';



export class Footer extends React.Component{
  constructor(props){
    super(props);

  }



  render(){
    return(
      <div className="footer-main">
        <MDBFooter className="footer-footer">
          <MDBContainer className="footer-container">
            <MDBRow className="footer-row">
              <MDBCol size="sm" className="footer-col">
                <MDBNavLink to="/Faq">FAQ</MDBNavLink>
              </MDBCol>

              <MDBCol size="sm" className="footer-col">
                <MDBNavLink to="/TermsConditions">Terms&Conditions</MDBNavLink>
              </MDBCol>

              <MDBCol size="sm" className="footer-col">
                <MDBNavLink to="/Contact">Contact Us</MDBNavLink>
              </MDBCol>
            </MDBRow>

            <MDBRow>
            <MDBCol size="sm" className="footer-col">
               <SocialIcon url="https://www.instagram.com/storeopenspace/" style={{ height: 25, width: 25 }} bgColor="#DE1F2B"/>
               <SocialIcon url="https://www.linkedin.com/company/openspacestorage/" style={{ height: 25, width: 25 }}/>
               <SocialIcon url="https://storeopenspace.com/" style={{ height: 25, width: 25 }}/>
            </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBFooter>
      </div>
    );
  }
}
export default Footer;
