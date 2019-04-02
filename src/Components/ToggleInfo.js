import React from 'react';


export class ToggleInfo extends React.Component{
  constructor(props){
    super(props);
    this.state={
      hideContent:true,
      moreIcon: this.props.moreIcon,
      lessIcon: this.props.lessIcon,
      iconToShow: '',
      titleIconClass: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    this.setState({
      iconToShow:this.state.lessIcon
    });
  }
  handleClick(){
    this.setState({
      hideContent: !this.state.hideContent,
      iconToShow: !this.state.hideContent? this.state.lessIcon: this.state.moreIcon,
    });
  }

  render(){
    return(
      <div className="toggleinfo-main">
      <span className = "toggleinfo-titleIcon"  onClick={this.handleClick}>
          <h1 className="toggleinfo-title">{this.props.title}</h1>
          <i className="toggleinfo-icon" className={this.state.iconToShow}></i>
        </span>
        {this.state.hideContent &&
          <div className="toggleinfo-content">
            {this.props.content}
          </div>}
      </div>
    );
  }

}
export default ToggleInfo;
