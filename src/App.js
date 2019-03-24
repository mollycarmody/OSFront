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
                  <Route path="/Details" component={Details}/>
                  <Route path="/About" component={AboutPage}/>
                </div>
          </BrowserRouter>
        );
    }


}
export default App;
