import React from 'react';
import MainNav from './MainNav.js';
import HowItWorks from './HowItWorks.js';
import Faq from './Faq.js';
import MeetTeam from './MeetTeam.js';
import {SectionsContainer, Header, Section} from 'react-fullpage';
import '../Styles/AboutPage.css';
export class AboutPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
       current: 0,
     }
  }

  render(){
    let options = {
      sectionClassName: 'section',
                  anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
                  scrollBar: false,
                  scrollOverflow: true,
                  navigation: true,
                  verticalAlign: false,
                  sectionPaddingTop: '80px',
                  sectionPaddingBottom: '0px',
                  arrowNavigation: true,
                  scrollCallback: (states) => this.setState({current: states.activeSection})
                         };

                         const {current} = this.state
    return(
      <div>
    <div className = "aboutpage-header">
      <Header>
        <MainNav showSearch={true} />
      </Header>
    </div>
    <div className = "aboutpage-sections">
      <SectionsContainer {...options}>
        <Section><HowItWorks/></Section>
        <Section><Faq/></Section>
        <Section><MeetTeam/></Section>
      </SectionsContainer>
    </div>
    <div className="btnGroup">
        <button onClick={() => this.setState({current: current - 1})} disabled={current === 0}>pre</button>
        <button onClick={() => this.setState({current: current + 1})} disabled={current === 2}>next</button>
    </div>
    </div>
    );
  }
}
export default AboutPage;
