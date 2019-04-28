import React, { Component } from 'react';
import 'mdbreact/dist/css/mdb.css'
import '../Styles/MainNav.css';
import {compose, withProps} from "recompose"
import Map from './Map.js';
import { MDBIcon, MDBDropdownToggle, MDBDropdownItem, MDBDropdownMenu, MDBDropdown, MDBFormInline, MDBInput, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import CustomToggler from './CustomToggler.js';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser} from "@fortawesome/free-solid-svg-icons";


import Icon from './Icon.js';
import { withRouter, BrowserRouter, Route, NavLink } from 'react-router-dom';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";

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
  handleLogin() {
          window.location = "https://rentopenspace.com/login?next=" + this.props.location.pathname;
          // this.setState({isLoggedIn: !this.state.isLoggedIn});
      }

  handleLogout() {
      window.location = "https://rentopenspace.com/logout";
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

//{this.props.location.pathname}

console.log("new nav");

console.log(this.state.width);
    return(
      <div>
      <header className="mainNav-header">

         <MDBNavbar color="transparent" expand="md" scrolling transparent>
           <NavLink to="/">
             <img className="navbar-brand" src="/static/res/OpenSpaceRevised.png" alt="OpenSpaceRevised"/>
           </NavLink>

           {this.state.width<767 && <CustomToggler handleClick={this.handleClick} />}
           <MDBCollapse isOpen={this.state.collapse} navbar>

           {this.props.showSearch &&
           <MDBNavbarNav left>
             <MDBNavItem>
               <MDBFormInline waves>
                 <div className="md-form my-0">
                   <input className="form-control mr-sm-2" type="text" placeholder={this.props.searchVal} aria-label="Search" />
                 </div>
               </MDBFormInline>
             </MDBNavItem>
         </MDBNavbarNav>}

         <MDBNavbarNav right>



           <MDBNavItem className="mainnav-item">
             <MDBNavLink className="mainnav-link" to="/BecomeAHost">Become a Host</MDBNavLink>
           </MDBNavItem>

           <MDBNavItem className="mainnav-item">
             <MDBNavLink  className="mainnav-link" to="/MeetTheTeam">About</MDBNavLink>
           </MDBNavItem>


           <MDBNavItem className="mainnav-item">

           {!this.state.isLoggedIn && <MDBNavLink className="mainnav-link" to="/" onClick = {this.handleLogin}>Login with Facebook </MDBNavLink>}
           {this.state.isLoggedIn &&
             <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <FontAwesomeIcon icon={faUser} />
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default" right>
                <MDBDropdownItem><MDBNavLink className="mainnav-link" to="/Profile">Profile</MDBNavLink></MDBDropdownItem>
                <MDBDropdownItem><MDBNavLink className="mainnav-link" to="/logout" onClick = {this.handleLogin}>Logout </MDBNavLink></MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown> }
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
