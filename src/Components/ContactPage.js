import React from 'react';
import MainNav from './MainNav.js';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import Footer from './Footer.js';
import '../Styles/ContactPage.css';

export class ContactPage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="contactpage-main">
        <MainNav showSearch={true}/>
        <MDBContainer id="contactpage-container">
          <MDBRow id="title">
              <h1>Contact Us</h1>
          </MDBRow>

          <div className="contactpage-content">
          <MDBRow id="form">
            <form>
              <p className="h5 text-center mb-4">Questions? Comments? Concerns?</p>
              <div className="grey-text">
                <MDBInput
                  label="Your name *"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your email *"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Subject *"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  type="textarea"
                  rows="2"
                  label="Your message *"
                />
              </div>
              <div className ="contactpage-submit">
                <MDBBtn outline color="secondary">
                  Send
                </MDBBtn>
              </div>

            </form>
          </MDBRow>
        </div>
        </MDBContainer>

        <footer>
          <Footer/>
        </footer>
    </div>
    );
  }
}
export default ContactPage;
