import React from 'react';
import { MDBRow, MDBContainer, MDBInput, MDBCol, MDBFormInline, MDBIcon, MDBBtn } from "mdbreact";
import { MDBNavbar, MDBNavItem, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput.js';
import { formatDate, parseDate } from 'react-day-picker/moment';
import 'react-day-picker/lib/style.css';

export class Filter extends React.Component{
  constructor(props){
    super(props);

    this.state={
      dropdownOpenSpace: false,
      dropdownOpenDate: false,
      filtersUsed:false,
      spaceTypes:[
        {
          value:'Restaurant space',
          label:'Restaurant'
        },
        {
          value:'Mall space',
          label:'Mall'
        },
        {
          value:'Apartment space',
          label:'Apartment'
        },
        {
          value:'Garage space',
          label:'Garage'
        },
        {
          value:'Closet space',
          label:'Closet'
        },
        {
          value:'Basement space',
          label:'Basement'
        },
        {
          value:'Outdoor space',
          label:'Outdoor (i.e shed)'
        }
      ]
    }
    this.toggle = this.toggle.bind(this);
    this.handleClearFilter = this.handleClearFilter.bind(this);
    this.closeDropDowns = this.closeDropDowns.bind(this);


  }
  toggle(type) {
    switch(type){
      case('space'):
        this.setState({
          dropdownOpenSpace:!this.state.dropdownOpenSpace,
          dropdownOpenDate: false
        });
        break;
      case('date'):
        this.setState({
          dropdownOpenDate:!this.state.dropdownOpenDate,
          dropdownOpenSpace: false
        });
        break;
    }


  }
  closeDropDowns(){
    this.setState({
      dropdownOpenSpace:false,
      dropdownOpenDate: false
    });
  }
  handleClearFilter(){
    this.props.handleClearFilters();
    this.closeDropDowns();
  }

  // <select value={this.props.arr} multiple={true} onChange={this.props.handleChange}>
  //   <option value="Restaurant space">Restaurant</option>
  //   <option value="Apartment space">Apartment</option>
  //   <option value="Mall space">Mall</option>
  //   <option value="Garage space">Garage</option>
  //   <option value="Closet space">Closet</option>
  //   <option value="Basement space">Basement</option>
  //   <option value="Attic space">Attic</option>
  //   <option value="Outdoor space">Outdoor Storage (i.e. shed)</option>
  // </select>
  // const spaceTypeDropItems = this.state.spaceTypes.map((space, index) =>
  //     <Dropdown.Item value={space.value}>{space.label}</Dropdown.Item>
  //
  //
  // );
  render(){
    let { from, to, distance } = this.props;
    console.log("from" + from);
    console.log("to" + to);
    console.log("distance" + distance);
    if(distance==undefined){
      distance='';
    }
    const modifiers = { start: from, end: to };

    return(
      <div className="filter-main">
        <MDBNavbar id="filter-navbar" color="transparent" expand="md" scrolling transparent>
          <MDBNavItem>
            {this.props.filtersUsed &&
              <div className="filter-clearButton">
                <button className="filter-button" onClick={this.handleClearFilter}>Clear filters</button>
              </div>}
          </MDBNavItem>

          <MDBNavItem>
            <div className="filter-spaceTypeDropdown">
            <UncontrolledDropdown isOpen={this.state.dropdownOpenSpace}>
              <DropdownToggle tag="button" className="filter-button" onClick={()=>this.toggle('space')}>
                SpaceType
              </DropdownToggle>
              <DropdownMenu className="filter-dropdown">
              <select value={this.props.arr} multiple={true} onChange={(event)=>this.props.handleChange(event, 'spaceType')}>
                <option value="Restaurant space">Restaurant</option>
                <option value="Apartment space">Apartment</option>
                <option value="Mall space">Mall</option>
                <option value="Garage space">Garage</option>
                <option value="Closet space">Closet</option>
                <option value="Basement space">Basement</option>
                <option value="Attic space">Attic</option>
                <option value="Outdoor space">Outdoor Storage (i.e. shed)</option>
              </select>
              </DropdownMenu>
            </UncontrolledDropdown>
            </div>
          </MDBNavItem>

          <MDBNavItem>
            <div className="InputFromTo">
            <UncontrolledDropdown isOpen={this.state.dropdownOpenDate}>
            <DropdownToggle tag="button" className="filter-button" onClick={()=>this.toggle('date')}>
              Date
            </DropdownToggle>
              <DropdownMenu className="filter-dropdown">
               <DayPickerInput
                 id="filter-from"
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
                 onDayChange={this.props.handleFromChange}
               />{' '}
               —{' '}
               <span className="InputFromTo-to">
                 <DayPickerInput
                   id="filter-to"
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
                   onDayChange={(to)=>this.props.handleToChange(to, this.to)}
                 />
               </span>
               </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </MDBNavItem>

          <MDBNavItem>
          <button className="filter-button">
            <MDBInput
              id = "filter-driving"
              label="Driving distance (minutes)"
              value ={distance}
              group
              type="text"
              onClick={this.closeDropDowns}
              onChange = {(event)=>this.props.handleChange(event, 'distance')}
            />

            </button>
          </MDBNavItem>
        </MDBNavbar>
      </div>

    );
  }

}

export default Filter;
