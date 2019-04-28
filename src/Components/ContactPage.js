import React from 'react';
import MainNav from './MainNav.js';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import Footer from './Footer.js';
import '../Styles/ContactPage.css';

export class ContactPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:'',
      email:'',
      subject:'',
      messsage:'',
      nameClass:'',
      emailClass:'',
      subjectClass:'',
      messsageClass:''

    }
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.id]:[e.target.value]
    }, console.log(e.target.value));
  }

  handleSubmit(e){
    e.preventDefault();
    console.log("hi");
    const {name, email, subject, message} = this.state;
    let flag = true;
    var emailClass='';
    var nameClass='';
    var subjectClass='';
    var messageClass='';
    if(email===''){
      console.log("email no");
      flag=false;
      emailClass="invalid";
    }
    if(name===''){
      console.log("name no");
      flag=false;
      nameClass="invalid";
    }
    if(subject===''){
      console.log("no subject");
      flag=false;
      subjectClass="invalid";
    }
    if(message===''){
      console.log("no message");
      flag=false;
      messageClass="invalid";
    }
    if(flag){
      console.log('you can submit!');
      window.location = "https://rentopenspace.com/";

    }else{
      console.log("there were errors!");
      console.log()
      this.setState({
        emailClass,
        nameClass,
        subjectClass,
        messageClass
      });
    }


  }
  render(){
    return(
      <div className="contactpage-main">
        <MainNav showSearch={false}/>
        <MDBContainer id="contactpage-container">
          <MDBRow id="title">
              <h1>Contact Us</h1>
          </MDBRow>

          <div className="contactpage-content">
          <MDBRow id="form">
            <form
              onSubmit={this.handleSubmit}
            >
              <p className="h5 text-center mb-4">Questions? Comments? Concerns?</p>
              <div className="grey-text">
                <MDBInput className={this.state.nameClass}
                  id = "name"
                  onChange={this.handleChange}
                  label="Your name *"
                  group
                  type="text"
                  validate
                  success="right"
                  required
                />
                <MDBInput className={this.state.emailClass}
                  id ="email"
                  onChange={this.handleChange}
                  label="Your email *"
                  group
                  type="email"
                  validate
                  success="right"
                  required
                />
                <MDBInput className={this.state.subjectClass}
                  id = "subject"
                  onChange={this.handleChange}
                  label="Subject *"
                  group
                  type="text"
                  validate
                  success="right"
                  required
                />
                <MDBInput className={this.state.messageClass}
                  id="message"
                  onChange={this.handleChange}
                  type="textarea"
                  rows="2"
                  label="Your message *"
                  validate
                  required
                />
              </div>
              <div className ="contactpage-submit">
                <MDBBtn outline color="secondary" type="submit">
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
