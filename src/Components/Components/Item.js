import React from 'react';
import Point from './Point.js';
import Button from './Button.js';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import {MDBCard, MDBContainer, MDBRow, MDBCol, MDBFormInline, MDBIcon, MDBBtn} from "mdbreact";
import '../Styles/Item.css';
import * as Api from '../apiActions.js';


export class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: ''
        };
    }

    //props:
    //props are the Host data points and match the data point names
    componentDidMount() {
        Api.Users.get({username: this.props.host}, data => {
            console.log(data);
            this.setState({
                first_name: data.first_name
            });
        });
    }

    render() {
        const bookButtonAttr = {
            'type': "button",
            'class': "btn btn-primary"
        }
        const bookButtonLabel = "Book";
        let data = {pathname: '/details/' + this.props.id}

        return (

            <div key={this.props.id}>
                <MDBContainer className="item-whole">
                  <MDBCard className="card-body">
                    <MDBRow className="item-info">
                        <MDBCol size="sm">
                            <h1>{this.props.location.name}</h1>
                        </MDBCol>
                        <MDBCol size="sm" className="item-points">
                            <Point id="item-point" dataDisplay={this.props.location.address}
                                   gIcon="glyphicon-map-marker"/>
                            <Point id="item-point" dataDisplay={this.props.space_type} gIcon="glyphicon-home"/>
                            <Point id="item-point" dataDisplay={this.props.listed_price + "/sqInch"}
                                   gIcon="glyphicon-usd"/>
                            <Point dataDisplay={"Total Space: " + this.props.total_space}/>
                            <Point dataDisplay={"Start Date: " + this.props.start_date}/>
                            <Point dataDisplay={"End Date: " + this.props.end_date}/>
                            <Point dataDisplay={`${(this.props.distance_to / 60).toFixed(2)} minutes away`}/>
                        </MDBCol>
                        <MDBCol size="sm">
                            <div className="item-button">
                                <NavLink to={data}><MDBBtn id="row-bookButton">details</MDBBtn></NavLink>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <h4 className="item-title">Space Hosted By: {this.state.first_name}</h4>
                    </MDBRow>
                  </MDBCard>
                </MDBContainer>
            </div>


        );
    }


}

export default Item;
