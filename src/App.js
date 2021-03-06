import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Row from './Components/Row.js';
import Listing from './Components/Listing.js';
import FirstPage from './Components/FirstPage.js';
import Details from './Components/Details.js';
import TeamPage from './Components/TeamPage.js';
import Faq from './Components/Faq.js';
import ContactPage from './Components/ContactPage.js';
import TermsCond from './Components/TermsCond.js';
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
