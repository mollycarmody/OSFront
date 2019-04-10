import React from 'react';
import { MDBRow, MDBContainer, MDBInput, MDBCol, MDBFormInline, MDBIcon, MDBBtn } from "mdbreact";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput.js';
import { formatDate, parseDate } from 'react-day-picker/moment';
import 'react-day-picker/lib/style.css';

export class Filter extends React.Component{
  constructor(props){
    super(props);

    this.state={
      dropdownOpen: false,
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


  }
  toggle() {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
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

  render(){
    const { from, to } = this.props;
    const modifiers = { start: from, end: to };
    // const spaceTypeDropItems = this.state.spaceTypes.map((space, index) =>
    //     <Dropdown.Item value={space.value}>{space.label}</Dropdown.Item>
    //
    //
    // );
    return(
      <div className="filter-main">
        {this.props.filtersUsed &&
          <div className="filter-clearButton">
          <MDBBtn onClick={this.props.handleClearFilters}>Clear filters</MDBBtn>
        </div>}
        <div className="filter-spaceTypeDropdown">
        <UncontrolledDropdown isOpen={this.state.dropdownOpen}>
          <DropdownToggle onClick={this.toggle}>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
          <select value={this.props.arr} multiple={true} onChange={this.props.handleChange}>
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
             onDayChange={this.props.handleFromChange}
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
               onDayChange={this.props.handleToChange}
             />
           </span>
        </div>

      </div>

    );
  }

}

export default Filter;
