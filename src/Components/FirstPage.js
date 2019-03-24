import React from 'react';
import { MDBCol, MDBFormInline, MDBIcon, MDBBtn } from "mdbreact";
import MainNav from './MainNav.js';
import 'mdbreact/dist/css/mdb.css'
import { SocialIcon } from 'react-social-icons';
import '../Styles/FirstPage.css';

export class FirstPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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


  render(){
    return(

<div className="firstpage-whole">
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-
awesome.min.css" rel="stylesheet" integrity="sha384-
wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
crossOrigin="anonymous"/>


  <MainNav showSearch={false}/>

<main className="firstpage-content">
  <section>

  <div className = "firstpage-title">
    <strong>RETHINK THE WAY YOU STORE</strong>
  </div>
    <div className="firstpage-search">
      <MDBCol md="6" id="searchCol">
        <MDBFormInline className="md-form" onSubmit={this.handleSubmit}>
          <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" onChange={this.handleChange}/>
        </MDBFormInline>
      </MDBCol>
    </div>


    <div className="firstpage-socialIcons">
      <SocialIcon url="https://www.instagram.com/storeopenspace/" style={{ height: 25, width: 25 }} bgColor="#DE1F2B"/>
      <SocialIcon url="https://www.linkedin.com/company/openspacestorage/" style={{ height: 25, width: 25 }}/>
      <SocialIcon url="https://storeopenspace.com/" style={{ height: 25, width: 25 }}/>
    </div>
  </section>

  <section>

  </section>
</main>

  <footer>
    Im the footer
  </footer>
</div>

    );
  }


}
export default FirstPage;
