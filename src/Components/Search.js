import React from 'react';
import { MDBFormInline} from "mdbreact";

export class Search extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(){
    this.props.handleSubmit;
  }
  handleChange(){
    this.props.handleChange;
  }
  render(){
    return(
      <MDBFormInline className="md-form" onSubmit={this.handleSubmit}>
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" onChange={this.handleChange}/>
      </MDBFormInline>
    );
  }
}
export default Search;
