import React from 'react';
import MainNav from './MainNav.js';
import Footer from './Footer.js';
import DropFile from './DropFile.js';

import { MDBRow, MDBCol, MDBInput, MDBContainer, MDBFormInline, MDBIcon, MDBBtn } from "mdbreact";
import '../Styles/UserProfile.css';
export class UserProfile extends React.Component{
  editor: AvatarEditor;

  constructor(props){
    super(props);
    this.state={
      firstName:'',
      lastName:'',
      email:'',
      phone:0,
      interestRadio:1,
      interestResult: '',
      additionalInfo: '',
      image: 'Box.png',
      imageScaleValue: undefined
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteImage = this.handleDeleteImage.bind(this);
    this.handleSaveImage = this.handleSaveImage.bind(this);

  }
  // <Dropzone onDrop={this.handleDrop} disableClick style={{ width: '250px', height: '250px' }}>

  handleChange(event, type){
    console.log("type is "+ type);
    console.log("value is "+ event.target.value);
    this.setState({
      [type]: event.target.value
    })
  }
  onClick = (nr) => () => {
    let interestResult;
    switch(nr){
      case(1):
        interestResult="storing"
        break;
      case(2):
        interestResult="listing"
        break;
      case(3):
        interestResult="both"
        break;
    }
    this.setState({
        interestRadio: nr,
        interestResult: interestResult
    });
  }
  onClickSave = () => {
    if (this.editor) {
      // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
      // drawn on another canvas, or added to the DOM.
      const canvas = this.editor.getImage()

      // If you want the image resized to the canvas size (also a HTMLCanvasElement)
      const canvasScaled = this.editor.getImageScaledToCanvas()
    }
  }
  handleOnDrop = (acceptedFile) => {
      console.log(acceptedFile);
      this.setState({
        image: acceptedFile[0],
        imageNeeded: false
      }, console.log(this.state.imageNeeded));
    }
  setEditorRef = (editor: any) => {
     if (editor) {
        this.editor = editor;
        const img = this.editor.getImageScaledToCanvas().toDataURL();
        console.log(img);
    }
  }

  handleDeleteImage(){
    console.log("delete image");
    this.setState({
      imageNeeded: true
    }, console.log(this.state.imageNeeded));
  }

  handleSubmit(){
    console.log("submit/save profile!");
  }
  handleSaveImage(editor){
    console.log("handle avator change");
    if (editor) {
      let imageURL;
      // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
      // drawn on another canvas, or added to the DOM.
      const canvas = editor.getImage()

      // If you want the image resized to the canvas size (also a HTMLCanvasElement)
      const canvasScaled = editor.getImageScaledToCanvas();
      this.setState({
        imageScaleValue: canvasScaled
      });
    }

  }

  render(){
    // const canvas = this.editor.getImage().toDataURL();
    // let imageURL;
    // fetch(canvas)
    //   .then(res => res.blob())
    //   .then(blob => (imageURL = window.URL.createObjectURL(blob)));

// Usage
// <img src={imageURL} ... />
 const maxSize = 1048576;
    return(
      <div className="userprofile-main">

        <MainNav/>

        <div className = "userprofile-content">
          <div className="userprofile-title">
            <h1>My OpenSpace Profile</h1>
          </div>
          <MDBContainer className="userprofile-container">
            <form onSubmit={this.handleSubmit}>
              <MDBRow>
                <MDBCol>
                  <MDBInput
                    onChange={(event)=>this.handleChange(event, 'firstName')}
                    label="First *"
                    group
                    type="text"
                    validate
                    required
                  />
                </MDBCol>
                <MDBCol>
                  <MDBInput
                    onChange={(event)=>this.handleChange(event, 'lastName')}
                    label="Last *"
                    group
                    type="text"
                    validate
                    required
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol>
                  <MDBInput
                    onChange={(event)=>this.handleChange(event, 'email')}
                    label="Email *"
                    group
                    type="email"
                    validate
                    required
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol>
                  <MDBInput
                    onChange={(event)=>this.handleChange(event, 'phone')}
                    label="Phone *"
                    group
                    type="tel"
                    validate
                    required
                  />
                </MDBCol>
              </MDBRow>


              <div className="userprofile-profilepic">

                  <MDBRow>
                      <MDBCol size="sm-12">
                        <h4>Profile Picture</h4>
                      </MDBCol>
                  </MDBRow>
                  <MDBRow>
                      <MDBCol>
                        <DropFile useAvatarEditor = {true} multiple={false} handleSaveImage = {this.handleSaveImage} imageNeeded = {this.state.imageNeeded} handleDeleteImage = {this.handleDeleteImage} handleOnDrop={this.handleOnDrop} image={this.state.image} minSize={0} maxSize={maxSize} avatarWidth={200} avatarHeight ={200} />
                      </MDBCol>
                  </MDBRow>

              </div>

              <div className="userprofile-selector">
              <MDBRow><MDBCol><h4>Are you interested in storing stuff, listing a space, or both?</h4></MDBCol></MDBRow>
                <MDBRow>
                  <MDBCol>

                    <MDBInput gap onClick={this.onClick(1)} checked={this.state.interestRadio===1 ? true : false} type="radio"
                      id="radio1"/>
                    <label className="radioLabel">Storing stuff</label>
                  </MDBCol>


                </MDBRow>

                <MDBRow>
                  <MDBCol>
                    <MDBInput gap onClick={this.onClick(2)} checked={this.state.interestRadio===2 ? true : false}  type="radio"
                      id="radio2" />
                      <label className="radioLabel">Listing a space</label>
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol>
                    <MDBInput gap onClick={this.onClick(3)} checked={this.state.interestRadio===3 ? true : false} type="radio"
                      id="radio3"/>
                      <label className="radioLabel">Both</label>
                  </MDBCol>
                </MDBRow>
              </div>
              <div className="userprofile-bio">
                <MDBRow>
                  <MDBCol>
                    <h4>Tell us a little about yourself! (optional)</h4>
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol id="bookform-textCol">
                    <MDBInput onChange={(event)=>this.handleChange(event, 'additionalInfo')} id="bookform-extrainfo" type="textarea" label="ex: I am student at ... " rows="5" cols="100"/>
                  </MDBCol>
                </MDBRow>
              </div>

              <div className="userprofile-button">
                <MDBRow>
                  <MDBCol>
                    <MDBBtn type="submit" className="userprofile-button">Save!</MDBBtn>
                  </MDBCol>
                </MDBRow>
              </div>
            </form>
          </MDBContainer>
        </div>


        <footer className ="userprofile-footer">
            <Footer/>
        </footer>
      </div>
    );
  }
}
export default UserProfile;
