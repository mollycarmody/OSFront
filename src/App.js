import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Row from './Components/Row.js';
import Button from './Components/Button.js';
import Listing from './Components/Listing.js';
import HostForm from './Components/HostForm.js';
import FirstPage from './Components/FirstPage.js';
import Details from './Components/Details.js';
import TeamPage from './Components/TeamPage.js';
import Faq from './Components/Faq.js';
import ContactPage from './Components/ContactPage.js';
import TermsCond from './Components/TermsCond.js';
import Autocomplete from 'react-google-autocomplete';
import BookPage from './Components/BookPage.js';
import UserProfile from './Components/UserProfile.js';
import BecomeHostPage from './Components/BecomeHostPage.js';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import {
  BrowserRouter,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";




class App extends Component{

    constructor(props){
        super(props);

    }
//     handlePlaceSelected = ( place ) => {
// const address = place.formatted_address,
//    addressArray =  place.address_components,
//    city = this.getCity( addressArray ),
//    area = this.getArea( addressArray ),
//    state = this.getState( addressArray ),
//    latValue = place.geometry.location.lat(),
//    lngValue = place.geometry.location.lng();
// // Set these values in the state.
//   this.setState({
//    address: ( address ) ? address : '',
//    area: ( area ) ? area : '',
//    city: ( city ) ? city : '',
//    state: ( state ) ? state : '',
//    markerPosition: {
//     lat: latValue,
//     lng: lngValue
//    },
//    mapPosition: {
//     lat: latValue,
//     lng: lngValue
//    },
//   })
//  };
    render(){


        return(

          <BrowserRouter>
                <div className="content">

                  <Route exact path="/" component={FirstPage}/>
                  <Route path="/BecomeAHost" component={BecomeHostPage}/>
                  <Route path="/Listing" component={Listing}/>
                  <Route path="/Details/:id" component={Details}/>
                  <Route path="/MeetTheTeam" component={TeamPage}/>
                  <Route path="/TermsConditions" component={TermsCond}/>
                  <Route path="/Contact" component={ContactPage}/>
                  <Route path="/Faq" component={Faq}/>
                  <Route path="/Book/:id" component={BookPage}/>
                  <Route path="/Profile" component={UserProfile}/>
                </div>
          </BrowserRouter>
        );
    }


}
export default App;
