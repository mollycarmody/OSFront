import React from 'react';
import TitlePara from './TitlePara.js';
import { MDBContainer, MDBRow, MDBCol, MDBFormInline, MDBIcon, MDBBtn } from "mdbreact";
import Popup from './Popup.js';
import Member from './Member.js';
import '../Styles/MeetTeam.css';
export class MeetTeam extends React.Component{
  constructor(props){
    super(props);
    this.state={
      showPopup:false,
      clickedMember: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.popUpToggle = this.popUpToggle.bind(this);

  }
  handleClick(member){
    this.setState({
      showPopup:true,
      clickedMember: member
    });
    console.log(this.state.showPopup);
  }
  popUpToggle(){
    this.setState({
      showPopup:!this.state.showPopup
    });
        console.log(this.state.showPopup);
  }
  render(){
    const members = [
      {
        picSrc: 'https://static1.squarespace.com/static/5c4f755e506fbe42bed5dc6e/t/5c6a4fcc971a1870355cd34b/1550471163349/Josh.png?format=300w',
        name: 'Josh France',
        bio: 'Josh is a Junior at Duke studying Electrical Engineering and Computer Science, with a minor in Finance. He grew up in Tokyo, Japan, where he attended the American School in Japan for 12 years. Beyond his involvement in OpenSpace, Josh likes morning runs, and enjoys listening to podcasts in his free time.  Some of his favorites are National Public Radio’s Planet Money and American Public Radio’s Marketplace. Josh was the catalyst behind OpenSpace and came up with the idea after his freshman year when he paid around 70 dollars to store just his bike for the summer.'
      },
      {
        picSrc: 'https://static1.squarespace.com/static/5c4f755e506fbe42bed5dc6e/t/5c6b33b0085229f2877e9eba/1550529465277/IMG_9730.jpg?format=300w',
        name: 'Samir Agadi',
        bio: 'Samir is a Junior at Duke studying International Comparative Studies with minors in Spanish and Finance. Samir is from Alpharetta, Georgia but grew up mostly outside of Georgia, going to Eaglebrook and Loomis Chaffee for boarding school. Along with his commitment to OpenSpace, Samir’s schedule is filled up with tennis, as he plays on the D1 Varsity Team here at Duke. Despite his backhand being inconsistent at times, the OpenSpace team loves to cheer him on and get loud in the stands. Outside of tennis, some of Samir’s other hobbies include golf, traveling, photography, and producing music. '
      },
      {
        picSrc: 'https://static1.squarespace.com/static/5c4f755e506fbe42bed5dc6e/t/5c5b5264b208fc9f308c9409/1549488740247/0+%284%29.jpeg?format=300w',
        name: 'CJ Keim',
        bio: 'CJ is a Junior at Duke studying Financial Economics and Computer Science. Beyond his academics, CJ is an avid sports fan, who is passionate about his hometown teams, the Pittsburgh Penguins and Pittsburgh Steelers. He also has quite a competitive spirit and enjoys playing Club Ice Hockey and Club Golf here at Duke. Along with sports, CJ is equally as passionate about fashion and animals. He loves reading about his favorite designer, Ronnie Fieg, and claims he will never get bored of Planet Earth. Rooming with Josh his Sophomore and Junior year, OpenSpace finds its way into many of their late night conversations. '
      },
      {
        picSrc: 'https://static1.squarespace.com/static/5c4f755e506fbe42bed5dc6e/t/5c6a47e7f9619a97a6d6842a/1550469100898/Scott.jpg?format=300w',
        name: 'Scott McConnell',
        bio: 'Scott is a Junior at Duke studying Electrical Engineering and Computer Science. He is from Philadelphia, Pennsylvania where he attended Episcopal Academy for 14 years. He is an eager programmer and wrote the foundational code for OpenSpace’s web application during HackDuke in 2018, where they received the Best Project Hack award. Outside of academics, Scott loves golf and board games - although he tends to come in last when playing Settlers of Catan. Scott also does community service in Durham every summer through Duke’s Project BUILD.'
      },
      {
        picSrc: 'https://static1.squarespace.com/static/5c4f755e506fbe42bed5dc6e/t/5c60bd6d4785d3966116457c/1549843822075/0+%283%29.jpeg?format=300w',
        name: 'Arjun Ahluwalia',
        bio: 'Arjun is a Junior at Duke studying Financial Economics with a minor in Computer Science. Arjun is originally from New Jersey, but has now adopted the beach lifestyle living in Tampa, Florida. Prior to OpenSpace, Arjun ran the BlueBox storage business for Campus Enterprises. On campus, he debates for the Duke International Relations Association and tutors local high school students in Math. In his free time, Arjun loves watching movies, especially those made by Quentin Tarantino.'
      },
      {
        picSrc: 'https://static1.squarespace.com/static/5c4f755e506fbe42bed5dc6e/t/5c5b52926e9a7f473298f09b/1549488786185/0+%285%29.jpeg?format=300w',
        name: 'Zachary Dietsche',
        bio: 'Zack is a Junior at Duke studying Financial Economics. Zack has quite an international background, growing up in Zurich, London, and Dubai, attending the International School for the entirety of his life. He is most interested in the start up space, and the endless growth opportunities that come with it, especially those for OpenSpace. In addition, Zack is passionate about music production, fashion, and videography. When it comes to OpenSpace, Zack is most drawn to the marketing and customer acquisition side, as he is constantly searching for creative ways to educate the consumer on this revolutionary idea.'
      },


    ]
    const team = members.map((member, index) =>
        // <MDBRow className="member">
        //   <MDBCol sm="4" className="memberPic">
        //     <img className="img-fluid"src={member.picSrc}/>
        //   </MDBCol>
        //   <MDBCol sm="8" className="memberDescription">
        //     <TitlePara title ={member.name} content={member.bio}/>
        //   </MDBCol>
        // </MDBRow>

        <div onClick={()=>this.handleClick(member)}>
          <Member {...member}/>
        </div>
    );
    return(
      <div className = "meetTeam-main">

        <Popup show={this.state.showPopup} handleToggle={this.popUpToggle} member={this.state.clickedMember} />

        <div className = "meetTeam-content">
          <MDBContainer>
            <MDBRow className="meetTeam-row">
              {team}
            </MDBRow>
          </MDBContainer>
        </div>

      </div>
    );
  }
}

export default MeetTeam;
