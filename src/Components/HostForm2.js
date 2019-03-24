import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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
          <Form.Group controlId="formSpaceType">
            <Form.Label>Type of space</Form.Label>
              <Form.Control as="select" multiple onChange={this.handleOnChange}>
                <option>Garage</option>
                <option>Closet</option>
                <option>Basement</option>
                <option>Attic</option>
                <option>Outdoor Storage (i.e. shed)</option>
                <option>other</option>
              </Form.Control>
          </Form.Group>
          </Form.Row>
          <Form.Row>
                <Form.Group>
                  <Form.Label>Space dimensions (ft)</Form.Label>
                </Form.Group>
                <Form.Group id="col3"as={Form.Col} controlId="formSpaceAvailable">
                  <Form.Label>length</Form.Label>
                  <Form.Control name="length" type="dimensions" placeholder="23.5" onChange={this.handleOnChange}/>
                </Form.Group>

                <Form.Group id="col3"as={Form.Col} controlId="formSpaceAvailable">
                  <Form.Label>width</Form.Label>
                  <Form.Control name="width" type="dimensions" placeholder="23.5" onChange={this.handleOnChange}/>
                </Form.Group>

                <Form.Group id="col3"as={Form.Col} controlId="formSpaceAvailable">
                  <Form.Label>height</Form.Label>
                  <Form.Control name ="height" type="dimensions" placeholder="23.5" onChange={this.handleOnChange}/>
                </Form.Group>



          </Form.Row>

          <Form.Row>
              <Form.Group controlId="formPricePerSq">
                <Form.Label>Price (USD) per sq. foot</Form.Label>
                <Form.Control type="price" placeholder="5.00" onChange={this.handleOnChange}/>
              </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group controlId="formStorageNotes">
              <Form.Label>Anything else to note about the space?</Form.Label>
              <Form.Control as="textarea" rows="3" placeholder="The space is well air-conditioned and secured with a padlock..." onChange={this.handleOnChange}/>
            </Form.Group>
          </Form.Row>
        </Form>


      );
    }
  }

  export default HostForm2;
