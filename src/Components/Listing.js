import React, { Component } from 'react';
import 'mdbreact/dist/css/mdb.css'
//import logo from './logo.svg';
import '../App.css';
import '../Styles/Listing.css';
import Table from './Table.js';
import Map from './Map.js';
import MainNav from './MainNav.js';
import HowItWorks from './HowItWorks.js';
import Filter from './Filter.js';

import { MDBRow, MDBCol, MDBFormInline, MDBIcon, MDBBtn } from "mdbreact";
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import moment from 'moment';
import 'react-day-picker/lib/style.css';

import DayPickerInput from 'react-day-picker/DayPickerInput.js';
import { formatDate, parseDate } from 'react-day-picker/moment';
import * as Api from '../apiActions.js';
import * as API from "../apiActions";

// import Main from './Main.js';
// import PracticeNewPage from './Components/PracticeNewPage.js';
// import {
//   Route,
//   NavLink,
//   HashRouter
// } from "react-router-dom";
export class Listing extends Component{
  constructor(props){
    super(props);
    this.state={
      newStateControl:false,
      showModal:false,
      login:false,
      signup:false,
      searchVal:this.props.location.state,
      data: [],
      arr: [],
      from: undefined,
      to: undefined,
      startD: '',
      endD: '',
      distance: undefined,
      filtersUsed:false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.get2D = this.get2D.bind(this);
    this.formatDates = this.formatDates.bind(this);
    this.handleClearFilters = this.handleClearFilters.bind(this);
    this.showFromMonth = this.showFromMonth.bind(this);
  }
//put fitlers in brackets as from_plade_id: "string", from_radis:"8"
  componentDidMount(){
    if(!this.newStateControl){
      const {filterInfo} = this.state.searchVal.filterInfo;
      let filtersUsed = false;
      let from = filterInfo[2]==''? undefined : filterInfo[2];
      let to = filterInfo[3]==''? undefined : filterInfo[3];
      let distance = filterInfo[1];
      if(filterInfo[1]!=undefined || filterInfo[2]!='' || filterInfo[3]!=''){
        filtersUsed=true;
      }
      Api.Listings.all({},
        data=>{
          console.log(data);
          this.setState({
            data:data,
            filtersUsed,
            distance
          });
        }
      );
  }else{
  Api.Listings.all({},
    data=>{
      console.log(data);
      this.setState({
        data:data
      });
    }
  );
}
  }

  searchForListings(placeId, radius, transportationMode, startDate, endDate, spaceType){
      API.Listings.all({
          from_place_id: placeId,
          radius: radius,
          space_type: spaceType,
          start_date: startDate,
          end_date: endDate,
          transportation_mode: transportationMode
      }, response => {
          console.log("Search Query: " + placeId)
          console.log("Search Query: " + startDate)
          console.log("Search Query: " + endDate)
          console.log("Search Query: " + spaceType)
          console.log("Search Results:\n")
          console.log(response)
          this.setState({
              data: response
          })
      })
  }


    get2D( num ) {
       if( num.toString().length < 2 ) // Integer of less than two digits
           return "0" + num; // Prepend a zero!
       return num.toString(); // return string for consistency
    }

    formatDates(date){
      const months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var dateA = date.toString().split(' '); //split by spaceTypes
      let year = dateA[3].toString();
      let day = dateA[2].toString();
      let month = months.indexOf(dateA[1])+1;
      const monthString = this.get2D(month);
      const dayString = this.get2D(day);
      const newDate = year + '-' + monthString + '-' + dayString;
      console.log("new date" + newDate);
      return newDate;
    }

    showFromMonth(month) {
      const { from, to } = this.state;
      console.log("this is to" + to);
      if (!from) {
        return;
      }
      if (moment(to).diff(moment(from), 'months') < 2) {
        month.getDayPicker().showMonth(from);
      }
    }

    handleFromChange(from) {
      // Change the from date and focus the "to" input field
      console.log(from);
      const d = this.formatDates(from);
      this.setState({
        from,
        startD:d,
        filtersUsed:true
       });
    }

    handleToChange(to, dayPick) {
      console.log("to: "+ to);
      const d = this.formatDates(to);
      this.setState({
        to,
        endD:d,
        filtersUsed:true

      }, this.showFromMonth(dayPick)); //,showFromMonth
    }

    handleChange(event, type) {
      switch(type){
        case('spaceType'):
            console.log("adding space type to array");
            const exists = this.state.arr.some(v => (v === event.target.value));
            if(!exists){
               this.setState({
              arr: this.state.arr.concat(event.target.value),
              filtersUsed:true
            });
            }else{
              var array = [...this.state.arr];
              var index = array.indexOf(event.target.value)
              if (index !== -1) {
                array.splice(index, 1);
                if((array === undefined || array.length == 0)&&this.state.startD==''&&this.state.endD==''&&this.state.distance==''||this.state.distance==undefined){
                  this.setState({
                    arr:[],
                    filtersUsed:false
                  });
                }else{
                  this.setState({
                    arr: array,
                    filtersUsed:true
                  });
                }
              }
            }
          break;
        case('distance'):
          if((array === undefined || array.length == 0)&&this.state.startD==''&&this.state.endD==''&&event.target.value==''){
            this.setState({
              distance:'',
              filtersUsed:false
            });
          }else{
            this.setState({
              distance:event.target.value,
              filtersUsed:true
            });
          }
      }

  //call filter function
   }
   handleClearFilters(){
     this.setState({
       newStateControl:true,
       arr: [],
       from: '',
       to: '',
       startD: '',
       endD: '',
       distance: undefined,
       filtersUsed:false
     }, console.log("from" + this.state.from));
   }


    render() {

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
const {filterInfo} = this.state.searchVal.filterInfo;
console.log("search value is "+ JSON.stringify(filterInfo));
console.log("the dsitance be "+ this.state.distance);

    return (

      <div className="listing-main">

          <MainNav searchVal={filterInfo[0]} showSearch={true}/>
          <MDBRow>
            <Filter distance = {this.state.distance} to={this.state.to} from={this.state.from} filtersUsed={this.state.filtersUsed} arr={this.state.arr} handleClearFilters = {this.handleClearFilters} handleToChange = {this.handleToChange} handleFromChange={this.handleFromChange}  handleChange = {this.handleChange}/>
          </MDBRow>

        <div className ="listing-content">
          <MDBRow className="listing-row">
            <MDBCol size="sm">
              <Table dataPoints={this.state.data}/>
            </MDBCol>
            <MDBCol size="sm">
              <Map data={this.state.data} onPlaceSearched={(placeId, startDate, endDate) => this.searchForListings(placeId, 1200, 'driving', this.state.startD, this.state.endD, this.state.arr)}/>
            </MDBCol>
          </MDBRow>

        </div>
      </div>






    );
  }

}
export default Listing;
