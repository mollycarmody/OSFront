import React, { Component } from 'react';
import 'mdbreact/dist/css/mdb.css'
//import logo from './logo.svg';
import '../App.css';
import '../Styles/MainNav.css';
import Table from './Table.js';
import Map from './Map.js';
import MainNav from './MainNav.js';
import HowItWorks from './HowItWorks.js';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'

// import Main from './Main.js';
// import PracticeNewPage from './Components/PracticeNewPage.js';
// import {
//   Route,
//   NavLink,
//   HashRouter
// } from "react-router-dom";
class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      showModal:false,
      login:false,
      signup:false,
      searchVal:this.props.location.state
    };
  }
    render() {

      const hosts = [
  			{
  				firstName: 'Scott',
  				lastName: 'McConnell',
  				street: '1262 Farm Rd',
  				city: 'Berwyn',
  				state: 'Pennsylvania',
  				zip: '19312',
  				email: 'skm44@duke.edu',
  				phone: '6103124662',
  				spaceType: 'Garage',
  				spaceAvailable: '160',
  				createdAt: new Date()
  			},
  			{
  				firstName: 'Josh',
  				lastName: 'France',
  				street: '220 Alexander Ave',
  				city: 'Durham',
  				state: 'North Carolina',
  				zip: '27705',
  				email: 'jrf36@duke.edu',
  				phone: '9802146075',
  				spaceType: 'Shed',
  				spaceAvailable: '100',
  				createdAt: new Date(),
  			},
  			{
  				firstName: 'Samir',
  				lastName: 'Agadi',
  				street: '207 Erwin Rd',
  				city: 'Durham',
  				state: 'North Carolina',
  				zip: '27705',
  				email: 'sa280@duke.edu',
  				phone: '2486335250',
  				spaceType: 'Closet',
  				spaceAvailable: '50',
  				createdAt: new Date(),
  			},
  		];

    // handleNavModalOption = event =>{
    //   console.log("nav option clicked");
    //   switch(event.target.id){
    //     case 'login':
    //       this.setState({
    //         login:true
    //         //signup:false;
    //       });
    //       break;
    //     case 'signup':
    //       this.setState({
    //         login:true
    //         //signup:false
    //       });
    //       break;
    //   }
    // };
    // toggleNavModal = () => {
    //   this.setState({ showModal: !this.state.showModal });
    // };
//{this.state.showModal && <In currUser = {this.state.login} handleCancel = {this.toggleNavModal}/>}
    return (
      <FullPage>
        <FullPageSections>
          <FullpageSection>
            <div className="Main">

                <MainNav searchVal={this.state.searchVal} showSearch={true}/>


              <div className ="Main-content">
                <Table dataPoints={hosts} colSpacing="col-md-6"/>
                <Map colSpacing = "col-md-6"/>

              </div>
            </div>
          </FullpageSection>
          <FullpageSection>
            <div>
              <HowItWorks/>
            </div>
          </FullpageSection>
          <FullpageSection>
          </FullpageSection>
        </FullPageSections>
      </FullPage>


    );
  }

}
export default Main;
