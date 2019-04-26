import React from 'react';
import Point from './Point.js';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import { MDBCol, MDBFormInline, MDBIcon, MDBBtn } from "mdbreact";
import '../Styles/Listing.css';



export class Row extends React.Component{
    constructor(props){
        super(props);
    }
    //props:
    //props are the Host data points and match the data point names

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
				<li className="list-group-item">
					<div className="media">
						<div className="media-body">
							<h4 className="mt-0">{this.props.firstName}</h4>
							<div className="container">
								<div className="row">
                        <Point dataDisplay={this.props.street} gIcon = "glyphicon-map-marker"/>
                        <Point dataDisplay={this.props.spaceType} gIcon = "glyphicon-home"/>
								</div>
								<div className="row">
                      <Point dataDisplay={this.props.pricePerSq + "/sqInch"} gIcon = "glyphicon-usd"/>
                      <Point dataDisplay="8:00AM - 12:00PM (Monday-Friday)" gIcon = "glyphicon-time"/>

								</div>
								<div className="row">
                      <Point dataDisplay={this.props.spaceAvailable + "sq. ft remaining"} gIcon = "glyphicon-resize-horizontal"/>
                      <Point dataDisplay="OpenSpace Verified" gIcon = "glyphicon-ok-circle"/>
								</div>
							</div>
						</div>
            <NavLink to={data}><MDBBtn id="row-bookButton" Pointor="$md-indigo-700">Book</MDBBtn></NavLink>
					</div>
				</li>
			</div>

        );
    }


}
export default Row;
