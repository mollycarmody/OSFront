// import React, { Component } from 'react';
//
//
// class In extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       showLogin: this.props.currUser;
//
//     }
//   }
// //props:
// //currUser -> if true = login, if false = signup
// //handleClick -> function that changes state of showModal in main Component
//   handleSwitch(){
//     this.setState({
//       showLogin: !this.state.showLogin;
//     })
//   }
//
//   render(){
//     let mainComp;
//     let switchString;
//     if(this.state.showLogin){
//       mainComp = <Login />
//       switchString = "New to OpenSpace? Signup!";
//     }else{
//       mainComp = <Signup />
//       switchString = "Already a user? Login!";
//     }
//
//     return(
//       //basic outline
//       //login or sign up component as fill in
//       <div>
//         <i id="cancel" onClick = {this.handleClick} className="glyphicon-remove"/>
//
//         <div className = "In-mainContent">
//         {mainComp}
//         </div>
//       //bar
//       //switch to other option
//         <div className = "In-switch">
//           <a id = "switch" onClick = {this.handleClick}>{switchString}</a>
//         </div>
//       </div>
//
//     );
//
//
//   }
//
//
// }
