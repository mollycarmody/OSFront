import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import '../Styles/HostForm.css';
import HostForm1 from './HostForm1.js';
import HostForm2 from './HostForm2.js';
import HostForm3 from './HostForm3.js';
import HostForm4 from './HostForm4.js';
import HostFormConf from './HostFormConf.js';
import ProgressNav from './ProgressNav.js';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';


export class HostForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      pageNumber:1,
      totalPageNumbers:5,
      firstName:"",
      lastName:"",
      spaceType:"",
      length:0,
      width:0,
      height:0,
      pricePerSq:0,
      note:"",
      address:"",
      city:"",
      state:"",
      zip:0,
      email:"",
      phone:0,
      phoneType:""

    };
    this.handleBack=this.handleBack.bind(this);
    this.handleNext=this.handleNext.bind(this);
    this.handleDataChange=this.handleDataChange.bind(this);
    //this.handleSubmit=this.handleDataChange.bind(this);
  }
  handleDataChange(event){
    console.log('handle data change');
    // console.log(event.target.id);
    // console.log(event.target.value);
    this.setState({
      [event.target.name]:event.target.value
    });
    console.log(event.target.name);
    console.log(event.target.value);
  }

  handleBack(){
    if(this.state.pageNumber>1){
      this.setState({
        pageNumber: this.state.pageNumber-1, //if back one more is out of bounds
      });
      // console.log(this.state.urlBack);
      // console.log(this.state.urlNext);

      console.log(this.state.pageNumber);
    }
  }
  handleNext(){

    if(this.state.pageNumber<5){
      this.setState({
        pageNumber: this.state.pageNumber+1 //if back one more is out of bounds
      });
    }
  }

  render(){

// <NavLink to={this.state.urlBack}>Back</NavLink>
// <Route path="/BecomeAHost/1" component={HostForm1}/>
// <Route path="/BecomeAHost/2" component={HostForm2}/>
// <Route path="/BecomeAHost/3" component={HostForm3}/>
// <Route path="/BecomeAHost/4" component={HostForm4}/>
    console.log(this.state.pageNumber);
    let percentage = (this.state.pageNumber/this.state.totalPageNumbers) * 100;
    return(

      <div className="HostForm">
        <div className="HostForm-header">
          <ProgressNav percent={percentage} />
        </div>

        <div className="HostForm-cancel">

        </div>

        <div className="Form-Content">
          {this.state.pageNumber==1 && <HostForm1 handleChange={this.handleDataChange}/>}
          {this.state.pageNumber==2 && <HostForm2 handleChange={this.handleDataChange}/>}
          {this.state.pageNumber==3 && <HostForm3 handleChange={this.handleDataChange}/>}
          {this.state.pageNumber==4 && <HostForm4 handleChange={this.handleDataChange}/>}
          {this.state.pageNumber==5 && <HostFormConf/>}

        </div>

        <div className="Form-buttons">
          {this.state.pageNumber>1 && this.state.pageNumber!=5 && <Button className="back" type = "submit" value="Submit" variant="outline-primary" onClick={this.handleBack}>Back</Button> }
          {this.state.pageNumber<5 && <Button className="next" type = "submit" value="Submit" variant="outline-primary" onClick={this.handleNext}>Next</Button> }
          {this.state.pageNumber==5 && <NavLink to="/"><Button className="submit" type = "submit" value="Submit" variant="outline-primary">Gotcha!</Button></NavLink>}
        </div>

      </div>



    );
  }
}
export default HostForm;
