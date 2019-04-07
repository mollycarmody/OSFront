import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Row from './Components/Row.js';
import Button from './Components/Button.js';
import Listing from './Components/Listing.js';
import HostForm from './Components/HostForm.js';
import FirstPage from './Components/FirstPage.js';
import Details from './Components/Details.js';
import AboutPage from './Components/AboutPage.js';
import Faq from './Components/Faq.js';
import ContactPage from './Components/ContactPage.js';
import TermsCond from './Components/TermsCond.js';

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
                  <Route path="/BecomeAHost" component={HostForm}/>
                  <Route path="/Listing" component={Listing}/>
                  <Route path="/Details/:id" component={Details}/>
                  <Route path="/AboutUs" component={AboutPage}/>
                  <Route path="/TermsConditions" component={TermsCond}/>
                  <Route path="/Contact" component={ContactPage}/>
                  <Route path="/Faq" component={Faq}/>
                </div>
          </BrowserRouter>
        );
    }


}
export default App;
