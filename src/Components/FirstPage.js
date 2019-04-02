import React from 'react';
import { MDBCol, MDBFormInline, MDBIcon, MDBBtn } from "mdbreact";
import MainNav from './MainNav.js';
import 'mdbreact/dist/css/mdb.css'
import { SocialIcon } from 'react-social-icons';
import { Section } from 'react-smart-sections';
import Footer from './Footer.js';
import MeetTeam from './MeetTeam.js';
import HowItWorks from './HowItWorks.js';
import '../Styles/FirstPage.css';

export class FirstPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value:"",
      nextImg: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeBackground = this.changeBackground.bind(this);
  }
  handleChange(event){
    console.log(event.target.value);
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault()
    console.log("hi");
    this.props.history.push({
      pathname: '/Listing',
      state: { searchVal: this.state.value }
    });
  }
  //
  changeBackground(){
    console.log("clicked!!");
    this.setState({
      nextImg: !this.state.nextImg
    });

  }


  render(){
    var imgUrl = this.state.nextImg? '/section4-2.png':'/section4.png';
    var divStyle = {
            backgroundImage: 'url(' + imgUrl + ')'
    };
    return(
<div>

<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-
awesome.min.css" rel="stylesheet" integrity="sha384-
wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
crossOrigin="anonymous"/>


  <MainNav showSearch={false}/>

<div className="firstpage-whole">
  <Section className="section" id="section1">

  <div className = "firstpage-title">

  </div>
    <div className="firstpage-search">
      <MDBCol md="6" id="searchCol">
        <MDBFormInline className="md-form" onSubmit={this.handleSubmit}>
          <input id="firstpage-input" className="form-control form-control-sm w-75" type="text" placeholder="Search" aria-label="Search" onChange={this.handleChange}/>
        </MDBFormInline>
      </MDBCol>
    </div>


    <div className="firstpage-socialIcons">
      <SocialIcon url="https://www.instagram.com/storeopenspace/" style={{ height: 25, width: 25 }} bgColor="#DE1F2B"/>
      <SocialIcon url="https://www.linkedin.com/company/openspacestorage/" style={{ height: 25, width: 25 }}/>
      <SocialIcon url="https://storeopenspace.com/" style={{ height: 25, width: 25 }}/>
    </div>
  </Section>

  <Section className="section" id="section2">
  </Section>

  <Section className="section" id="section3">
  </Section>

  <Section className="section" id="section4" onClick={this.changeBackground} style={divStyle}>
  </Section>

  <Section className="section" id="section5">
  </Section>

  <Section className="section" id="section6">
    <HowItWorks/>
  </Section>
  <Section className="section" id="section7">
  </Section>

  <Section className="section" id="section8">
    <MeetTeam/>
  </Section>





  </div>

  <footer className ="firstpage-footer">
      <Footer/>
  </footer>

</div>

    );
  }


}
export default FirstPage;
