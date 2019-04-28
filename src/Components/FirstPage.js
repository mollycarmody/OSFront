import React from 'react';
import {MDBInput, MDBContainer,MDBRow, MDBCol, MDBFormInline, MDBIcon, MDBBtn } from "mdbreact";
import MainNav from './MainNav.js';
import 'mdbreact/dist/css/mdb.css'
import { SocialIcon } from 'react-social-icons';
import { Section } from 'react-smart-sections';
import Footer from './Footer.js';
import MeetTeam from './MeetTeam.js';
import HowItWorks from './HowItWorks.js';
import Carousel from './Carousel.js'
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput.js';
import { formatDate, parseDate } from 'react-day-picker/moment';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";


import 'react-day-picker/lib/style.css';
import '../Styles/FirstPage.css';

export class FirstPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value:"",
      nextImg: false,
      where: '',
      distance:undefined,
      startD: '',
      endD:'',
      from: undefined,
      to:undefined
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeBackground = this.changeBackground.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.get2D = this.get2D.bind(this);
    this.formatDates = this.formatDates.bind(this);
    this.handleLearnMore = this.handleLearnMore.bind(this);
  }

  handleChange(event, type){
    console.log(event.target.value);
    console.log(type);
    this.setState({[type]: event.target.value});
  }

  handleSubmit(event, filterInfo){
    event.preventDefault()
    console.log("hi");
    this.props.history.push({
      pathname: '/Listing',
      state: { filterInfo }
    });
  }
  //
  changeBackground(){
    console.log("clicked!!");
    this.setState({
      nextImg: !this.state.nextImg
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

  handleLearnMore(){
    console.log("learn more clicked");
  }


  render(){
    const { from, to } = this.props;
    const {where, distance, startD, endD} = this.state;
    const modifiers = { start: from, end: to };
    const reviews = [
      {
        statement: 'OpenSpace was easy and efficient to deal with. I was able to store my stuff without any hassle.',
        name: '- Griffin, Duke student'
      },
      {
        statement: 'This is another review about OpenSpace',
        name: '- Sarah, Duke student'
      },
      {
        statement: 'Love the OpenSpace place ay ay ay. It is a good time. I can store super easy with little effort.',
        name: '- Molly, Duke student'
      }
  ];
  let filterInfo = [ where, distance, startD, endD ];
  console.log(filterInfo);

    const slides = reviews.map((review, index) =>
        <div id={index}>
          <MDBContainer>
            <MDBRow>
              <FontAwesomeIcon className="firstpage-quote" id="left-quote" icon={faQuoteLeft} />{review.statement}<FontAwesomeIcon className="firstpage-quote" id="right-quote" icon={faQuoteRight} />
            </MDBRow>
            <MDBRow className="firstpage-slidesRowName">
              <p className="firstpage-slidesRowName">{review.name}</p>
            </MDBRow>
          </MDBContainer>
        </div>
    );

    const labl = (<label class="" data-error="" data-success="">Where</label>);

    return(
    <div>



  <MainNav showSearch={false}/>

  <div className="firstpage-whole">
  <Section className="section" id="section1">
  <form onSubmit = {(event)=>this.handleSubmit(event, {filterInfo})}>
  <MDBContainer>
    <MDBRow>
    <MDBCol id="firstpage-filterCol" size="sm-6">
      <MDBRow>
        <div id="firstpage-filterTitle">
        Find affordable and convenient storage
        </div>
      </MDBRow>

      <MDBRow>
        <div className = "firstpage-searchFilter">
        <MDBCol>
          <MDBRow>
            <MDBInput
              label="Where"
              group
              type="text"
              required
              validate
              onChange = {(event)=>this.handleChange(event, 'where')}
            />
          </MDBRow>

          <MDBRow>
            <MDBCol className="firstpage-dateCol">
              <DayPickerInput
                className="firstpage-date"
                value={from}
                placeholder="Move-in"
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
              />
            </MDBCol>

            <MDBCol className="firstpage-dateCol">
              <DayPickerInput
                className="firstpage-date"
                ref={el => (this.to = el)}
                value={to}
                placeholder="Move-out"
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
            </MDBCol>
          </MDBRow>

          <MDBRow>
          <MDBInput
            label="Driving distance (minutes)"
            group
            type="text"
            onChange = {(event)=>this.handleChange(event, 'distance')}
          />
          </MDBRow>

          <MDBRow id="firstpage-fitlerBtnRow">
            <MDBBtn id="firstpage-filterBtn" type="submit">Find a Space</MDBBtn>
          </MDBRow>
          </MDBCol>
        </div>
      </MDBRow>

  </MDBCol>

  <MDBCol id="firstpage-whatwedoCol" size="sm-6">
    <MDBRow>
      <div className="firstpage-infoTitle" id="firstpage-whatwedoTitle">What We Do</div>
    </MDBRow>

    <MDBRow>
      <div className="firstpage-infoContent" id="firstpage-whatwedoContent"> OpenSpace connects people looking for extra storage to those that have extra space. Think Airbnb, but for storage. Find space that is cheaper, and more convenient than traditional services, and only pay for what you actually store (not an entire unit).</div>
    </MDBRow>
  </MDBCol>
  </MDBRow>
  </MDBContainer>
      </form>
    </Section>

    <Section className="section" id="section2">
      <MDBContainer>
        <MDBRow>
          <MDBCol size="sm-7">
            <MDBRow>
              <div className="firstpage-infoTitle">
                How It Works
              </div>
            </MDBRow>

            <MDBRow>
              <div className="firstpage-infoContent">
                <p>OpenSpace is a peer to peer self storage platform that connects college students looking for storage space with people in their area that have it. While also bringing together members of the community, we are focused on offering the most affordable and accessible option in the storage industry.</p>
              </div>
            </MDBRow>

            <MDBRow>
              <a id="firstpage-learnMore" onClick={this.handleLearnMore}>Learn More</a>
            </MDBRow>

          </MDBCol>

          <MDBCol size="sm-5" id="firstpage-howworksimgCol">
            <img id="firstpage-howworksimg" src="/HowWorksBlue.png" width="320"/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Section>

    <Section className="section" id="section3">
      <MDBContainer>
        <MDBRow>
          <MDBCol size="sm-6">
              <div className="firstpage-infoTitle">What People Are Saying About OpenSpace</div>
          </MDBCol>
          <MDBCol size="sm-6">
            <div className="centerBlock">
              <Carousel slides={slides}/>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Section>









  </div>

  <footer className ="firstpage-footer">
      <Footer/>
  </footer>

</div>

    );
  }


}
export default FirstPage;
