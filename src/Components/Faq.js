import React from 'react';
import TitlePara from './TitlePara.js';
import MainNav from './MainNav.js';
import Footer from './Footer.js';
import { MDBNavLink, MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import '../Styles/Faq.css';

export class Faq extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const questionAnswer=[
      {
        question: 'How will I know who my Host is?',
        answer: 'After requesting storage, we match the closest host to your location that has room for your items. More specifically, the OpenSpace team will send you an email providing you with a little bio on your Host, their address, and their contact information so the two of you can organize a time for you to drop off your items.'
      },
      {
        question: 'What if I can’t transport my stuff to my Host’s location?',
        answer: 'No worries at all! OpenSpace offers a premium service at an additional cost (still the cheapest price in the industry), which enables you to have your items picked up and dropped off to your home without you having to lift a finger. What can we say, we like to make it easy.'
      },
      {
        question: 'What if I am going abroad, can I store for the summer and the next semester?',
        answer: 'Yes, absolutely! We can handle your stuff for an extra semester. The specific prices for storage during the semester can be found in a separate column on our pricing flyers.'
      },
      {
        question:'How should I label my shipping and storage items?',
        answer:'Be sure to include your name, phone number, and an item count (e.g. 1 of 6, 2 of 6, etc.) on all the items you store with us. If you are a customer that has selected the delivery option, please include your Host name on the box as well!'
      }
    ];
    const qaElements = questionAnswer.map((qaPair) =>
        <TitlePara title ={qaPair.question} content={qaPair.answer}/>
    );

    return(
      <div className = "faq-main">
        <div className = "faq-nav">
          <MainNav/>
        </div>
        <div className = "faq-content">
          <MDBContainer>
            <div className = "faq-title">
              <h1>Frequently Asked Questions</h1>
            </div>
            <div className = "faq-content">
              {qaElements}
            </div>
          </MDBContainer>
        </div>

        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
}
export default Faq;
