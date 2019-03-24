import React from 'react';
import Point from './Point.js';
import Button from './Button.js';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBFormInline, MDBIcon, MDBBtn } from "mdbreact";
import '../Styles/Item.css';
import * as Api from '../apiActions.js';



export class Item extends React.Component{
    constructor(props){
        super(props);
        this.state={
          first_name:''
        };
    }
    //props:
    //props are the Host data points and match the data point names
    componentDidMount(){
      Api.Users.get({username: this.props.host}, data=>{
        console.log(data);
        this.setState({
          first_name:data.first_name
        });
      }


    }
    render(){
      const bookButtonAttr={
        'type':"button",
        'class':"btn btn-primary"
      }
      const bookButtonLabel="Book";
    //  const {...props} = this.props;
      let data = {pathname: '/details', id: this.props.id }

        return(

      <div key={this.props.id}>
        <MDBContainer className="item-whole">
            <MDBRow>
							<h4 className="item-title">{this.state.first_name}</h4>
            </MDBRow>
            <MDBRow className="item-info">
              <MDBCol size="sm">
                <h1> hi</h1>
              </MDBCol>
              <MDBCol size="sm" className="item-points">
                  <Point id = "item-point" dataDisplay={this.props.location.address} gIcon = "glyphicon-map-marker"/>
                  <Point id = "item-point" dataDisplay={this.props.space_type} gIcon = "glyphicon-home"/>
                  <Point id = "item-point" dataDisplay={this.props.listed_price + "/sqInch"} gIcon = "glyphicon-usd"/>
						  </MDBCol>
              <MDBCol size="sm">
                <div className="item-button">
                  <NavLink to={data}><MDBBtn id="row-bookButton">details</MDBBtn></NavLink>
                </div>
              </MDBCol>
            </MDBRow>

</MDBContainer>
          </div>



        );
    }


}
export default Item;
