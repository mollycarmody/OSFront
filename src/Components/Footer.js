import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import { MDBNavLink, MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";



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
          </MDBContainer>
        </MDBFooter>
      </div>
    );
  }
}
export default Footer;
