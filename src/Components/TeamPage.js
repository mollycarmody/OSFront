import React from 'react';
import MainNav from './MainNav.js';
import Footer from './Footer.js';
import MeetTeam from './MeetTeam.js';
import { Section } from 'react-smart-sections';
import '../Styles/TeamPage.css';
export class TeamPage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="teampage-main">

        <div className="teampage-nav">
          <MainNav/>
        </div>
        <div className="teampage-content">
          <Section className="section" id="teampage-teamBackground">
          </Section>
          <Section className="section" id="teampage-meetteam">
            <MeetTeam/>
          </Section>
        </div>

        <footer>
          <Footer/>
        </footer>
      </div>

    );
  }

}
export default TeamPage;
