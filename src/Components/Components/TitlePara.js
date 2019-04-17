import React from 'react';


export class TitlePara extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className = "tp-main">
        <div className = "tp-title">
          <p>{this.props.title}</p>
        </div>
        <div className = "tp-content">
          <p>{this.props.content}</p>
        </div>
      </div>
    );
  }

}
export default TitlePara;
