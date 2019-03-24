import React from 'react';
import Icon from './Icon.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styles/Item.css';
import { MDBCol, MDBRow, MDBContainer, MDBBtn } from "mdbreact";



export class Point extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <MDBRow id="point-row">
        				<Icon iconType={"glyphicon " + this.props.gIcon} />
                {this.props.dataDisplay}
            </MDBRow>
        );
    }
}
export default Point;
