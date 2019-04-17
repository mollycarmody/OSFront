import React from 'react';
import Button from './Button.js';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.value};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //props:
  //input submitType;

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault(); //this ensures placeholder doesn't return when search
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} {...this.props.formAttr}>
          <input value={this.state.value} onChange={this.handleChange} placeholder={this.props.inputAttr.placeholder}{...this.props.inputAttr}></input>
          <Button attr={this.props.buttAttr} label={this.props.searchButtonLabel}/>
      </form>
    );
  }
}
export default SearchForm;
