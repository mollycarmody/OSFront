import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import MainNav from './MainNav.js';

export class ProgressNav extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <MainNav/>
        <header>
        <ProgressBar animated now={this.props.percent}/>
        </header>
      </div>

    );
  }
}
export default ProgressNav;
