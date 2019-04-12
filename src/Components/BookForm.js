import React from 'react';
import moment from 'moment';
import { MDBRow, MDBContainer, MDBInput, MDBCol, MDBFormInline, MDBIcon, MDBBtn } from "mdbreact";
import CountItem from './CountItem.js';
import ToggleInfo from './ToggleInfo.js';
import Form from 'react-bootstrap/Form';
import DayPickerInput from 'react-day-picker/DayPickerInput.js';
import { formatDate, parseDate } from 'react-day-picker/moment';

import 'react-day-picker/lib/style.css';
import '../Styles/BookForm.css';

import * as Api from '../apiActions.js';



export class BookForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value: [],
      contactRadio:1,
      deliveryRadio:1,
      showBox:false,
      showOther:false,
      showBike: false,
      showLargeBox:false,
      showSmallFurniture:false,
      showLargeFurniture:false,
      from: undefined,
      to: undefined,
      startD: '',
      endD: '',
      BoxCount:0,
      BikeCount:0,
      LargeBoxCount:0,
      SmallFurnitureCount:0,
      LargeFurnitureCount:0,
      TVCount:0,
      CouchCount:0,
      SuitcaseCount:0,
      SuitcaseCount:0,
      MiniFridgeCount:0,
      MopedCount:0,
      note:'',
      email:'',
      phone:0
    };
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.get2D = this.get2D.bind(this);
    this.formatDates = this.formatDates.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleContactChange = this.handleContactChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // <MDBRow>
  //   <MDBCol>
  //     <MDBInput
  //       label="First Name*"
  //       group
  //       type="text"
  //       validate
  //       error="wrong"
  //       success="right"
  //     />
  //   </MDBCol>
  //   <MDBCol>
  //     <MDBInput
  //       label="Last Name*"
  //       group
  //       type="text"
  //       validate
  //       error="wrong"
  //       success="right"
  //     />
  //   </MDBCol>
  // </MDBRow>
  // <MDBRow>
  //   <MDBCol size="sm-3"><h3> interested in delivery?: </h3></MDBCol>
  //   <MDBCol size="sm-2"><MDBInput gap onClick={this.onClick(1, "deliveryRadio")} checked={this.state.deliveryRadio===1 ? true : false} label="yes" type="radio"
  //   id="radio1" /></MDBCol>
  //   <MDBCol size="sm-2"><MDBInput gap onClick={this.onClick(2, "deliveryRadio")} checked={this.state.deliveryRadio===2 ? true : false} label="no" type="radio"
  //   id="radio2" /></MDBCol>
  //
  // </MDBRow>
  // {this.state.deliveryRadio==1 &&
  //   <div>
  //   <MDBRow>
  //   <MDBCol>
  //     <MDBInput
  //       label="Street Address (include APT, etc)"
  //       group
  //       type="number"
  //       validate
  //       error="wrong"
  //       success="right"
  //     />
  //   </MDBCol>
  //   </MDBRow>
  //
  //   <MDBRow>
  //     <MDBCol>
  //     <MDBInput
  //       label="City"
  //       group
  //       type="text"
  //       validate
  //       error="wrong"
  //       success="right"
  //     />
  //     </MDBCol>
  //
  //     <MDBCol>
  //
  //       <Form.Control as="select" id="bookform-states">
  //         <option>State..</option>
  //         <option value="Alabama">Alabama</option><option value="Alaska">Alaska</option><option value="Arizona">Arizona</option><option value="Arkansas">Arkansas</option><option value="California">California</option><option value="Colorado">Colorado</option><option value="Connecticut">Connecticut</option><option value="Delaware">Delaware</option><option value="District of Columbia">District of Columbia</option><option value="Florida">Florida</option><option value="Georgia">Georgia</option><option value="Guam">Guam</option><option value="Hawaii">Hawaii</option><option value="Idaho">Idaho</option><option value="Illinois">Illinois</option><option value="Indiana">Indiana</option><option value="Iowa">Iowa</option><option value="Kansas">Kansas</option><option value="Kentucky">Kentucky</option><option value="Louisiana">Louisiana</option><option value="Maine">Maine</option><option value="Maryland">Maryland</option><option value="Massachusetts">Massachusetts</option><option value="Michigan">Michigan</option><option value="Minnesota">Minnesota</option><option value="Mississippi">Mississippi</option><option value="Missouri">Missouri</option><option value="Montana">Montana</option><option value="Nebraska">Nebraska</option><option value="Nevada">Nevada</option><option value="New Hampshire">New Hampshire</option><option value="New Jersey">New Jersey</option><option value="New Mexico">New Mexico</option><option value="New York">New York</option><option value="North Carolina">North Carolina</option><option value="North Dakota">North Dakota</option><option value="Northern Marianas Islands">Northern Marianas Islands</option><option value="Ohio">Ohio</option><option value="Oklahoma">Oklahoma</option><option value="Oregon">Oregon</option><option value="Pennsylvania">Pennsylvania</option><option value="Puerto Rico">Puerto Rico</option><option value="Rhode Island">Rhode Island</option><option value="South Carolina">South Carolina</option><option value="South Dakota">South Dakota</option><option value="Tennessee">Tennessee</option><option value="Texas">Texas</option><option value="Utah">Utah</option><option value="Vermont">Vermont</option><option value="Virginia">Virginia</option><option value="Virgin Islands">Virgin Islands</option><option value="Washington">Washington</option><option value="West Virginia">West Virginia</option><option value="Wisconsin">Wisconsin</option><option value="Wyoming">Wyoming</option>
  //       </Form.Control>
  //     </MDBCol>
  //
  //     <MDBCol>
  //     <MDBInput
  //       label="Zip"
  //       group
  //       type="number"
  //       validate
  //       error="wrong"
  //       success="right"
  //     />
  //     </MDBCol>
  //   </MDBRow>
  //
  //   </div>
  //
  //
  // }

  onClick = (nr, type) => () => {
    console.log(type);
    console.log(nr);
    let typeRadio = type;
    this.setState({
        [type]: nr
    });
  }



  Selected=(event) =>{
    let noSpace = event.target.value.split(' ').join('');
    let showItem = `show${noSpace}`;
    let countItem = noSpace+'Count';
    console.log("count item is " + countItem );
    this.setState({
      value: [ ...event.target.value ],
      [showItem]:true
    });
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

  showFromMonth() {
    const { from, to } = this.state;
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), 'months') < 2) {
      this.to.getDayPicker().showMonth(from);
    }
  }
  handleFromChange(from) {
    // Change the from date and focus the "to" input field
    console.log(from);
    const d = this.formatDates(from);
    this.setState({
      from,
      startD: d
    });
  }
  handleToChange(to) {
    console.log(to);
    const d = this.formatDates(to);
    this.setState({
      to,
      endD: d
    }, this.showFromMonth);
  }

  handleIncrement(item){
    console.log("up");
    let countItem = item+'Count';
    console.log("count item is " + countItem );

    this.setState({
      [countItem]:this.state[countItem]+1
    });
  }
  handleDecrement(item){
    console.log("down");
    let countItem = item+'Count';
    console.log("count item is " + countItem );

    this.setState({
      [countItem]:this.state[countItem]==0? 0:this.state[countItem]-1
    });
  }

  handleNoteChange(event){
    this.setState({
      note: event.target.value
    });
  }
  handleContactChange(event){
    if(this.state.contactRadio==1){
      this.setState({
        email: event.target.value
      });
    }else{
      this.setState({
        phone: event.target.value
      });
    }

  }

  handleSubmit(){
    console.log("submit!");
    //post data
    console.log("id is" + JSON.stringify(this.props.id));
    const data = {
      listing:{
        id: this.props.id
      },
      price: '$5.00',
      booked_space: 100,
      start_date: this.state.startD,
      end_date: this.state.endD,
      additional_instructions: this.state.note,
//      confirmed:false,   // Just don't include this. Only admins should be able to modify confimed/unconfirmed
//      booker: "mollycarmody" // Don't include your username. It knows who you are if you are logged in.
    }
    Api.Bookings.create(data, response =>{
      console.log("post attempt");
      console.log(response);

    })
    //data validate
  }
  render(){
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    const itemTypes = ['Box', 'Small Furniture', 'Large Furniture', 'TV', 'Couch', 'Suitcase', 'Mini Fridge', 'Moped', 'Bike'];
    const itemCountElements = itemTypes.map((type, index) =>{
    let noSpace = type.replace(/\s+/g, '');
    let countItem = noSpace+'Count';
    return <CountItem count={this.state[countItem]} name={type} id={index} handleIncrement={this.handleIncrement} handleDecrement = {this.handleDecrement}/>;
  }


  );


    return(
      <div className="bookform-main">
        <MDBContainer>
          <div className="bookform-title">
            <h1>Book this Space</h1>
            <h4>Please fill out the form below to submit a booking request. We will follow up as soon as possible to confirm the booking and setup details for payment, delivery, etc.</h4>
          </div>
          <MDBRow>
            <form>
             <MDBContainer id="bookform-container">
              <div className ="bookform-content">
                <MDBRow>
                  <MDBCol size="sm-3"><h3> Preferred form of contact: </h3></MDBCol>
                  <MDBCol size="sm-2"><MDBInput gap onClick={this.onClick(1, "contactRadio")} checked={this.state.contactRadio===1 ? true : false} label="email" type="radio"
                  id="radio1" /></MDBCol>
                  <MDBCol size="sm-2"><MDBInput gap onClick={this.onClick(2, "contactRadio")} checked={this.state.contactRadio===2 ? true : false} label="phone" type="radio"
                  id="radio2" /></MDBCol>
                  <MDBCol size="sm-5">
                  {this.state.contactRadio===1 && <MDBInput
                    onChange ={this.handleContactChange}
                    label="Your email *"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />}

                  {this.state.contactRadio===2 && <MDBInput
                    onChange ={this.handleContactChange}
                    label="Your phone *"
                    group
                    type="number"
                    validate
                    error="wrong"
                    success="right"
                  />}
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol>
                    <h4>Dates to be stored</h4>
                  </MDBCol>

                  <MDBCol>
                  <div className="InputFromTo">
                     <DayPickerInput
                       value={from}
                       placeholder="From"
                       format="LL"
                       formatDate={formatDate}
                       parseDate={parseDate}
                       dayPickerProps={{
                         selectedDays: [from, { from, to }],
                         disabledDays: { after: to },
                         toMonth: to,
                         modifiers,
                         numberOfMonths: 1,
                         onDayClick: () => this.to.getInput().focus(),
                       }}
                       onDayChange={this.handleFromChange}
                     />{' '}
                     —{' '}
                     <span className="InputFromTo-to">
                       <DayPickerInput
                         ref={el => (this.to = el)}
                         value={to}
                         placeholder="To"
                         format="LL"
                         formatDate={formatDate}
                         parseDate={parseDate}
                         dayPickerProps={{
                           selectedDays: [from, { from, to }],
                           disabledDays: { before: from },
                           modifiers,
                           month: from,
                           fromMonth: from,
                           numberOfMonths: 1,
                         }}
                         onDayChange={this.handleToChange}
                       />
                     </span>
                  </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <ToggleInfo title="item count" content={itemCountElements}/>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol><h4>Additional information about your storage needs</h4></MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <MDBInput onChange={this.handleNoteChange} id="bookform-extrainfo" type="textarea" label="ex: I have a oddly shaped item..." rows="5" cols="100"/>
                  </MDBCol>
                </MDBRow>
              </div>
              <div className ="bookform-submit">
                  <MDBBtn outline color="secondary" onClick={this.handleSubmit}>
                    Send
                  </MDBBtn>
              </div>

              </MDBContainer>
            </form>

          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
export default BookForm;
