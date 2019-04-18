import React from 'react';
import Form from 'react-bootstrap/Form';
import InputMask from 'react-input-mask';
import '../Styles/HostForm4.css';

export class HostForm2 extends React.Component{
    constructor(props){
      super(props);
    }

    handleOnChange = (e)=>{
      this.props.handleChange(e);
    }

    render(){

      return(
        <Form>
          <Form.Row>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email"type="email" placeholder="email@example.com" onChange={this.handleOnChange}/>
              <Form.Text className="text-muted">for communication with interested users</Form.Text>
            </Form.Group>
          </Form.Row>
          <Form.Row>
              <Form.Group id="col1"as={Form.Col} controlId="formPhone">
                <Form.Label>Phone number</Form.Label>
                <Form.Control name="phone" type="phone" placeholder="(123)456-789" onChange={this.handleOnChange}/>
                <Form.Text className="text-muted">for communication with interested users</Form.Text>
              </Form.Group>

              <Form.Group id="col2"as={Form.Col} controlId="formPhoneTypes">
                <Form.Label>type</Form.Label>
                <Form.Control name="phoneType" as="select" onChange={this.handleOnChange}>
                  <option>phone type...</option>
                  <option>home</option>
                  <option>mobile</option>
                  <option>work</option>
                </Form.Control>
              </Form.Group>
          </Form.Row>
        </Form>


      );
    }
  }

  export default HostForm2;
