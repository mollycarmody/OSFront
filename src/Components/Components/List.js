import React from 'react';


export class List extends React.Component{
  constructor(props){
    super(props);
  }
  //prop: bulletPoints, ordered


  render(){
    const bullets = this.props.bulletPoints.map((bulletPoint) =>
      <li>{bulletPoint}</li>
    );
    return(
      <div className="list-main">
        {!this.props.ordered && <ul>{bullets}</ul>}
        {this.props.ordered && <ol>{bullets}</ol>}
      </div>
    );
  }
}
export default List;
