import React from 'react';
import Footer from './Footer.js';
import MainNav from './MainNav.js';
import BecomeHost from './BecomeHost.js';

export class BecomeHostPage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="becomehostpage-main">
        <MainNav showSearch={false}/>

        <div className="becomehostpage-content">
          <BecomeHost/>
        </div>

        <footer>
          <Footer/>
        </footer>
      </div>

    );
  }
}
export default BecomeHostPage;
