import React from 'react';

export class HostFormConf extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="HostFormConf-main">
        <div className="HostFormConf-header">
          <h1>TITLE CONGRATULATING</h1>
        </div>
        <div className="HostFormConf-subheader">
          <h3> Congratulations! You will recieve an email shortly from OpenSpace confirming your space listing information and detailing the next steps.</h3>
        </div>

      </div>


    );
  }

}
export default HostFormConf;
