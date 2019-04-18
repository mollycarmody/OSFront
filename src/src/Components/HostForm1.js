import React from 'react';
import Form from 'react-bootstrap/Form';
import Prompt from "react-router-dom/Prompt.js";


export class HostForm1 extends React.Component{
    constructor(props){
      super(props);
      this.state={
        isBlocking:false
      };
      this.handleBlocking=this.handleBlocking.bind(this);
    }
    handleBlocking(event){
      this.setState({
        isBlocking: event.target.value.length > 0
      });
    }

    handleNext(event){
      this.setState({
        isBlocking: false
      });
    }
    handleOnChange = (e)=>{
      this.props.handleChange(e);
    }
        render(){
          const {isBlocking} = this.state;
          return(

              <Form>

              <Prompt
                when={isBlocking}
                message={location =>
                  `Are you sure you want to go to ${location.pathname}? Your progress will be lost.`
                }
              />
      

                <Form.Group controlId="formFirstName">
                  <Form.Control name="firstName" type="" placeholder="first name" onChange={this.handleOnChange}/>
                </Form.Group>

                <Form.Group controlId="formLastName">
                  <Form.Control name="lastName"type="" placeholder="last name" onChange={this.handleOnChange}/>
                </Form.Group>


              </Form>

          );
        }

}

export default HostForm1;
