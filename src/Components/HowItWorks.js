import React from 'react';


export class HowItWorks extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isUserHidden:true,
      isHostHidden:true
    };
    this.toggleUserHidden = this.toggleUserHidden.bind(this);
    this.toggleHostHidden = this.toggleHostHidden.bind(this);
  }
  toggleUserHidden () {
    this.setState({
      isUserHidden: !this.state.isUserHidden
    })
  }

  toggleHostHidden () {
    this.setState({
      isHostHidden: !this.state.isHostHidden
    })
  }
  render(){
    return(
      <div>
        <img src = "HowWorksBlue.png" width="50px" height="50px"/>
        <p>OpenSpace is a peer to peer self storage platform that connects college students looking for storage space with people in their area that have it. While also bringing together members of the community, we are focused on offering the most affordable and accessible option in the storage industry.</p>

        <div>
          <div onClick={this.toggleUserHidden}>
            <h1>Becoming a User</h1>
            <i className="glyphicon glyphicon-plus"></i>
          </div>
          {!this.state.isUserHidden && <p>Are you a college student unable to take your things home for the summer? Whether it be those golf clubs that won you state championship in high school, that mattress with a bunch of memories, or those boxes with the miscellaneous things that sat on your desk all year, OpenSpace has you covered. Simply fill out a form with the information of what you are storing and how long we need to hold it captive. From this, we will connect you with a trustworthy host in your community who has extra space in their home. Who knows, it might even be a professor you’ve had on campus. Select the premium option and we will pickup and deliver your items for you, easy as that. You can do it yourself? Sure, that works for us as well and the host will happily meet you face to face at their home to get your goods for the summer. Regardless of the option you choose, we are confident that OpenSpace is the most user friendly and cheapest option out there!</p>}
        </div>

        <div>
          <div onClick={this.toggleHostHidden}>
            <h1>Becoming a host</h1>
            <i className="glyphicon glyphicon-plus"></i>
          </div>
          {!this.state.isHostHidden && <p>Do you have extra storage space in your house? Would you like to earn some extra money over the summer? Sign up with OpenSpace to connect with members of your university community, and earn some money by allowing college students nearby to store their items with you over the summer. You earn 70% of every User order, while we only take 30%! The process is easy, just fill out our online form to give us your contact information and an idea of what storage space you have to offer. From that form we will follow up and arrange a time when the OpenSpace team can meet you in person. Lunch could even be on us! After getting to know you a bit, we will take a look at your storage space and give you a quote for the summer depending on the size of your space. Assuming its a perfect match, we will coordinate a date that works for you and allows students to drop off their things for the summer. From the time the items are dropped off to the the time they are picked up, your responsibility is minimal! Kick back, relax, and enjoy earning some extra money for the summer. Just don’t sell your house...</p>}
        </div>
      </div>


    );
  }
}
export default HowItWorks;
