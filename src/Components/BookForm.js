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
    };
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
  }

  onClick = (nr, type) => () => {
    console.log(type);
    console.log(nr);
    let typeRadio = type;
    this.setState({
      [type]: nr
    });
  }

  handleValueSelected=(event) =>{
    let noSpace = event.target.value.split(' ').join('');
    let storeItem = `show${noSpace}`;
    this.setState({
      value: [ ...event.target.value ],
      [storeItem]:true
    });
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
    this.setState({ from });
  }
  handleToChange(to) {
    this.setState({ to }, this.showFromMonth);
  }


  render(){
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
  const itemTypes = ['Box', 'Small Furniture', 'Large Furniture', 'TV', 'Couch', 'Suitcase', 'Mini Fridge', 'Moped', 'Bike'];
  const itemCountElements = itemTypes.map((type, index) =>
    <CountItem name={type} id={index}/>
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
                  <MDBCol>
                    <MDBInput
                      label="First Name*"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput
                      label="Last Name*"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol size="sm-3"><h3> Preferred form of contact: </h3></MDBCol>
                  <MDBCol size="sm-2"><MDBInput gap onClick={this.onClick(1, "contactRadio")} checked={this.state.contactRadio===1 ? true : false} label="email" type="radio"
                  id="radio1" /></MDBCol>
                  <MDBCol size="sm-2"><MDBInput gap onClick={this.onClick(2, "contactRadio")} checked={this.state.contactRadio===2 ? true : false} label="phone" type="radio"
                  id="radio2" /></MDBCol>
                  <MDBCol size="sm-5">
                  {this.state.contactRadio===1 && <MDBInput
                    label="Your email *"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />}

                  {this.state.contactRadio===2 && <MDBInput
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
                  <MDBCol size="sm-3"><h3> interested in delivery?: </h3></MDBCol>
                  <MDBCol size="sm-2"><MDBInput gap onClick={this.onClick(1, "deliveryRadio")} checked={this.state.deliveryRadio===1 ? true : false} label="yes" type="radio"
                  id="radio1" /></MDBCol>
                  <MDBCol size="sm-2"><MDBInput gap onClick={this.onClick(2, "deliveryRadio")} checked={this.state.deliveryRadio===2 ? true : false} label="no" type="radio"
                  id="radio2" /></MDBCol>

                </MDBRow>
                {this.state.deliveryRadio==1 &&
                  <div>
                  <MDBRow>
                  <MDBCol>
                    <MDBInput
                      label="Street Address (include APT, etc)"
                      group
                      type="number"
                      validate
                      error="wrong"
                      success="right"
                    />
                  </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol>
                    <MDBInput
                      label="City"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    </MDBCol>

                    <MDBCol>

                      <Form.Control as="select" id="bookform-states">
                        <option>State..</option>
                        <option value="Alabama">Alabama</option><option value="Alaska">Alaska</option><option value="Arizona">Arizona</option><option value="Arkansas">Arkansas</option><option value="California">California</option><option value="Colorado">Colorado</option><option value="Connecticut">Connecticut</option><option value="Delaware">Delaware</option><option value="District of Columbia">District of Columbia</option><option value="Florida">Florida</option><option value="Georgia">Georgia</option><option value="Guam">Guam</option><option value="Hawaii">Hawaii</option><option value="Idaho">Idaho</option><option value="Illinois">Illinois</option><option value="Indiana">Indiana</option><option value="Iowa">Iowa</option><option value="Kansas">Kansas</option><option value="Kentucky">Kentucky</option><option value="Louisiana">Louisiana</option><option value="Maine">Maine</option><option value="Maryland">Maryland</option><option value="Massachusetts">Massachusetts</option><option value="Michigan">Michigan</option><option value="Minnesota">Minnesota</option><option value="Mississippi">Mississippi</option><option value="Missouri">Missouri</option><option value="Montana">Montana</option><option value="Nebraska">Nebraska</option><option value="Nevada">Nevada</option><option value="New Hampshire">New Hampshire</option><option value="New Jersey">New Jersey</option><option value="New Mexico">New Mexico</option><option value="New York">New York</option><option value="North Carolina">North Carolina</option><option value="North Dakota">North Dakota</option><option value="Northern Marianas Islands">Northern Marianas Islands</option><option value="Ohio">Ohio</option><option value="Oklahoma">Oklahoma</option><option value="Oregon">Oregon</option><option value="Pennsylvania">Pennsylvania</option><option value="Puerto Rico">Puerto Rico</option><option value="Rhode Island">Rhode Island</option><option value="South Carolina">South Carolina</option><option value="South Dakota">South Dakota</option><option value="Tennessee">Tennessee</option><option value="Texas">Texas</option><option value="Utah">Utah</option><option value="Vermont">Vermont</option><option value="Virginia">Virginia</option><option value="Virgin Islands">Virgin Islands</option><option value="Washington">Washington</option><option value="West Virginia">West Virginia</option><option value="Wisconsin">Wisconsin</option><option value="Wyoming">Wyoming</option>
                      </Form.Control>
                    </MDBCol>

                    <MDBCol>
                    <MDBInput
                      label="Zip"
                      group
                      type="number"
                      validate
                      error="wrong"
                      success="right"
                    />
                    </MDBCol>
                  </MDBRow>

                  </div>


                }
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
                    <MDBInput id="bookform-extrainfo" type="textarea" label="ex: I have a oddly shaped item..." rows="5" cols="100"/>
                  </MDBCol>
                </MDBRow>
              </div>
              <div className ="bookform-submit">
                  <MDBBtn outline color="secondary">
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
