import React from 'react';
import Gallery from 'react-grid-gallery';
import MainNav from './MainNav.js';
import { MDBCol, MDBRow, MDBContainer, MDBBtn, MDBNavLink } from "mdbreact";
import Info from './Info.js';
import TitlePara from './TitlePara.js';

import * as Api from '../apiActions.js';

import "../Styles/Details.css";

export class Details extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      //id:this.props.location.id,
      listingInfo: null,
      listingInfo:[],
      first_name:''
    };
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

componentDidMount() {
  // console.log("id is" + JSON.stringify(this.props.location.id));
  // Api.Listings.get({id: this.props.location.id}, listData=>{
  console.log("id is" + JSON.stringify(this.props.match.id));
  Api.Listings.get({id: this.props.match.id}, listData=>{
      console.log(listData);
      this.setState({
        listingInfo:listData
      });
      Api.Users.get({username: listData.host}, userData=>{
        console.log("this is first name" + userData.first_name);
        this.setState({
          first_name:userData.first_name
        });
      });
  });
  //console.log("props location is" + JSON.stringify(this.props.location));

  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions() {
  this.setState({ width: window.innerWidth, height: window.innerHeight });
}



  render(){

    const IMAGES =
  [{
          src: "https://www.sidec.be/sites/default/files/styles/backgroundimage/public/garage.JPG",
          thumbnail:"https://www.sidec.be/sites/default/files/styles/backgroundimage/public/garage.JPG",
          thumbnailWidth: 320,
          thumbnailHeight: 174,
          caption: "Garage from outside"
  },
  {
          src: "http://www.itsmebilly.com/upload/2018/07/07/amazing-garage-interior-designs-interior-design-home-depot-garage-garage-interior-designs-l-228456e1ca76078e.jpg",
          thumbnail:"http://www.itsmebilly.com/upload/2018/07/07/amazing-garage-interior-designs-interior-design-home-depot-garage-garage-interior-designs-l-228456e1ca76078e.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 212,
          caption: "Inside view"
  },

  {
          src: "http://www.billdoherty.net/idea/The-Garage-Door-Repairs.jpg",
          thumbnail: "http://www.billdoherty.net/idea/The-Garage-Door-Repairs.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 212,
          caption: "Plenty of space for boxes and large items"
  },
  {
          src: "https://www.thespruce.com/thmb/17i-qsY7efIegV5CDdZWUpxfksk=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/83010974-56a343d43df78cf7727c9817.jpg",
          thumbnail: "https://www.thespruce.com/thmb/17i-qsY7efIegV5CDdZWUpxfksk=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/83010974-56a343d43df78cf7727c9817.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 212,
          caption: "Door is secure and locked with combo"
  }
];
  const rowH = this.state.height*.3;
  const listingInfo = {
    title: 'Airconditioned Spacious Garage Space',
    firstName: 'Scott',
    lastName: 'McConnell',
    street: '1262 Farm Rd',
    city: 'Berwyn',
    state: 'Pennsylvania',
    zip: '19312',
    email: 'skm44@duke.edu',
    phone: '6103124662',
    spaceType: 'Garage',
    spaceAvailable: '160',
    createdAt: new Date()
  };

  const listingAbout = {
    title: this.state.first_name + "\'s Place",
    content: this.state.listingInfo.description
  };
  let data = {pathname: '/Book', listingInfo:this.state.listingInfo, hostFirstName: this.state.first_name }
console.log("listing info" + this.state.listingInfo);


    return(
      <div className="Details-main">
      <MainNav showSearch={false}/>
      <MDBContainer>

      <MDBRow>
        <MDBCol size="sm" id="galleryCol">
          <div  className="Details-gallery">
            <Gallery images={IMAGES}
              enableLightbox={true}
              enableImageSelection={false}
              maxRows={2}
              rowHeight={rowH}/>
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <h1>{listingInfo.title}</h1>
      </MDBRow>
      <MDBRow>
        <h6>{listingInfo.street + ", " + listingInfo.city}</h6>
      </MDBRow>
      <MDBRow>
        <MDBCol size="sm">
          <div className="Details-info">
            <h3>Specifics</h3>
            <Info {...this.state.listingInfo}/>
          </div>
        </MDBCol>
        <MDBCol size="sm">
          <div className="Details-about">
            <h3>About</h3>
            <TitlePara {...listingAbout}/>
          </div>
        </MDBCol>
      </MDBRow>

      <MDBRow >
        <div className="Details-button" >
          <MDBNavLink to={data}><MDBBtn id="interestBttn">I'm interested!</MDBBtn></MDBNavLink>
        </div>
      </MDBRow>
      </MDBContainer>
      </div>
    );
  }
}
export default Details;
