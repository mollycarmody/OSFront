import React, { Component } from 'react';
import 'mdbreact/dist/css/mdb.css'
import '../Styles/MainNav.css';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import CustomToggler from './CustomToggler.js';


//import logo from './logo.svg';


import Button from './Button.js';
import Icon from './Icon.js';
import SearchForm from './SearchForm.js';
import HostForm1 from './HostForm1.js';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

export class MainNav extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLoggedIn:false,
      collapse:false,
      isWideEnough:false,
      width: window.innerWidth,
      height: window.innerHeight
    };
    this.handleLogin=this.handleLogin.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

  }
  // <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //   <NavLink to="/"><img className="navbar-brand" src="/OpenSpaceRevised.png" alt="OpenSpaceRevised"></img></NavLink>
  //   <Button attr={navButtonAttr} label={navButtonLabel}/>
  //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //   {this.props.showSearch &&
  //     <ul className="navbar-nav mr-auto">
  //     <SearchForm value = {this.props.searchVal.searchVal} formAttr = {searchFormAttr} inputAttr={searchInputAttr} buttAttr={searchButtonAttr} searchButtonLabel={searchButtonLabel}/>
  //   </ul>}
  //
  //
  //     {!this.state.isLoggedIn && <a href="/login" onClick={this.handleLogin}>Login with Facebook </a>}
  //     {this.state.isLoggedIn && <a href ="/logout" onClick = {this.handleLogin}>Logout </a>}
  //     <NavLink to="/BecomeAHost">{hostLabel}</NavLink>
  //   </div>
  // </nav>
  handleLogin(){
    this.setState({isLoggedIn: !this.state.isLoggedIn});
  }
  handleClick(){
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render(){
    //*ATTRIBUTE PROPS**//
      const navButtonAttr = {
        'className': "navbar-toggler",
        'type': 'button',
        'aria-label':"Toggle navigation",
        'data-toggle':"collapse",
        'data-target':"#navbarSupportedContent",
         'aria-controls':"navbarSupportedContent",
         'aria-expanded':"false"
      };

      const searchInputAttr ={
        'className':"form-control mr-sm-2",
        'type':"search",
        'placeholder':'search',
        'aria-label':'search'
      }
      console.log(searchInputAttr.placeholder);
      const searchButtonAttr = {
        'className':"btn btn-outline-success my-2 my-sm-0",
        'type':"submit",
        'id':"searchBarButton"
      }
      const searchFormAttr= {
        'className':"form-inline my-2 my-lg-0"
      }

      //to add to json string file:
      const searchButtonLabel = "Search";
      const hostLabel = "Become a Host";

console.log("new nav");

console.log(this.state.width);

//  <SearchForm formAttr = {searchFormAttr} inputAttr={searchInputAttr} buttAttr={searchButtonAttr} searchButtonLabel={searchButtonLabel}/>
    return(
      <div>
      <header className="mainNav-header">

         <MDBNavbar color="white" dark expand="md" scrolling >
           <NavLink to="/">
            <img className="navbar-brand" src="/OpenSpaceRevised.png" alt="OpenSpaceRevised"/>
           </NavLink>


           {this.state.width<767 && <CustomToggler handleClick={this.handleClick} />}
           <MDBCollapse isOpen={this.state.collapse} navbar>
             <MDBNavbarNav left>

              <MDBNavItem>
               {this.props.showSearch && <SearchForm value = {this.props.searchVal.searchVal} formAttr = {searchFormAttr} inputAttr={searchInputAttr} buttAttr={searchButtonAttr} searchButtonLabel={searchButtonLabel}/>}
              </MDBNavItem>

               <MDBNavItem>
               {!this.state.isLoggedIn && <MDBNavLink to="/login" onClick={this.handleLogin}>Login with Facebook </MDBNavLink>}
               {this.state.isLoggedIn && <MDBNavLink to="/logout" onClick = {this.handleLogin}>Logout </MDBNavLink>}
               </MDBNavItem>

               <MDBNavItem>
                 <MDBNavLink to="/BecomeAHost">Become a Host</MDBNavLink>
               </MDBNavItem>

               <MDBNavItem>
                 <MDBNavLink to="/About">About</MDBNavLink>
               </MDBNavItem>
             </MDBNavbarNav>
           </MDBCollapse>
         </MDBNavbar>



     </header>
      </div>
    );
  }

}
MainNav.defaultProps={
  searchVal:"{'searchVal':''}"
}
export default MainNav;
