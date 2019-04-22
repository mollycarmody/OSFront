import React from 'react';
import AddressForm from './AddressForm.js';
import { MDBListGroup, MDBListGroupItem, MDBRow, MDBContainer, MDBInput, MDBCol, MDBFormInline, MDBIcon, MDBBtn } from "mdbreact";
import DropFile from './DropFile.js';
import Form from 'react-bootstrap/Form';
import '../Styles/BecomeHost.css';
export class BecomeHost extends React.Component{
  constructor(props){
    super(props);
    this.state={
      firstName: '',
      lastName: '',
      email: '',
      phone: 0,
      street:'',
      city:'',
      zip:0,
      state:'',
      length: 0,
      width:0,
      height:0,
      spaceDescription:'',
      spaceType: '',
      spaceImages:[]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleOnDrop = this.handleOnDrop.bind(this);
    this.handleDeleteImage= this.handleDeleteImage.bind(this);
  }
  handleChange(event, type){
    console.log("Type: " + type);
    console.log("value: " + event.target.value);
    this.setState({
      [type]:event.target.value
    });
  }

  handleOnDrop = (acceptedFiles) => {
      console.log(acceptedFiles);
      let arrImages =this.state.spaceImages;
      for(var i=0;i<acceptedFiles.length;i++){
        arrImages.push(acceptedFiles[i]);
      }
      console.log(arrImages);
      this.setState({
        spaceImages: arrImages
      });
    }
  handleDeleteImage(index){
    console.log("this index clicked! : "+index);
    const arrImages =this.state.spaceImages;
    const arrImages2 = arrImages.slice(0, index).concat(arrImages.slice(arrImages + 1, arrImages.length));
    let arrImagesFiltered = [];
    for(var i=0;i<this.state.spaceImages.length;i++){
        console.log("looking atthis index" + i);
        if(i!=index){
          console.log("adding this in bc okay")
          arrImagesFiltered.push(this.state.spaceImages[i]);
        }
    }
    console.log("new array is "+arrImagesFiltered);
    this.setState({
      spaceImages:arrImagesFiltered
    });
  }
  handleSubmit(){
    console.log("submit!");
  }
  render(){
    var uploadedImages = this.state.spaceImages.map((image, index)=>
        <MDBListGroupItem onClick={()=>this.handleDeleteImage(index)} id={index}>{image.name} <br/>(click to remove)</MDBListGroupItem>
    );
    const maxSize = 1048576;
    return(
      <div className="becomehost-main">
        <div className = "bechomehost-content">
          <div className="becomehost-title">
            <h1>Tell Us About Your Space</h1>
          </div>
          <MDBContainer className="becomehost-container">
            <form onSubmit={this.handleSubmit}>
              <MDBRow className="becomehost-subtitleRow">
                <MDBCol>
                  <h4 className="becomehost-subtitle">1. Contact Info *</h4>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <MDBInput
                    onChange={(event)=>this.handleChange(event, 'firstName')}
                    label="First"
                    group
                    type="text"
                    validate
                    required
                  />
                </MDBCol>
                <MDBCol>
                  <MDBInput
                    onChange={(event)=>this.handleChange(event, 'lastName')}
                    label="Last"
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
                    label="Email"
                    group
                    type="email"
                    validate
                    required
                  />
                </MDBCol>

                <MDBCol>
                  <MDBInput
                    onChange={(event)=>this.handleChange(event, 'phone')}
                    label="Phone"
                    group
                    type="tel"
                    validate
                    required
                  />
                </MDBCol>
              </MDBRow>

              {/*Where is it*/}


              <MDBRow className="becomehost-subtitleRow">
                <MDBCol>
                  <h4 className="becomehost-subtitle">2. Space Location *</h4>
                </MDBCol>
              </MDBRow>
              <AddressForm handleChange = {this.handleChange}/>

              <MDBRow className="becomehost-subtitleRow">
                <MDBCol>
                  <h4 className="becomehost-subtitle">3. Space Details *</h4>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <Form.Group>
                    <Form.Label>Type of space</Form.Label>
                      <Form.Control id="becomehost-spaceTypes" as="select" multiple onChange={(event)=>this.handleChange(event, 'spaceType')}>
                        <option>Garage</option>
                        <option>Closet</option>
                        <option>Basement</option>
                        <option>Attic</option>
                        <option>Outdoor Storage (i.e. shed)</option>
                        <option>other</option>
                      </Form.Control>
                  </Form.Group>
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol>
                  <MDBInput
                    onChange={(event)=>this.handleChange(event, 'length')}
                    label="length (ft)"
                    group
                    type="number"
                    validate
                    required
                  />
                </MDBCol>


                <MDBCol>
                  <MDBInput
                    onChange={(event)=>this.handleChange(event, 'width')}
                    label="width (ft)"
                    group
                    type="number"
                    validate
                    required
                  />
                </MDBCol>

                <MDBCol>
                  <MDBInput
                    onChange={(event)=>this.handleChange(event, 'height')}
                    label="height (ft)"
                    group
                    type="number"
                    validate
                    required
                  />
                </MDBCol>
              </MDBRow>

              <div className="becomehost-spacePics">
                  <MDBRow>
                      <MDBCol size="sm-12">
                        <h4>Pictures of the Space</h4>
                      </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <MDBListGroup style={{ width: "22rem" }}>
                        {uploadedImages}
                      </MDBListGroup>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                      <MDBCol>
                        <DropFile imageNeeded={true} useAvatarEditor={false} handleOnDrop={this.handleOnDrop} minSize={0} maxSize={maxSize} />
                      </MDBCol>
                  </MDBRow>

              </div>

              <MDBRow className="becomehost-subtitleRow">
                <MDBCol>
                  <h4 className="becomehost-subtitle">4. Describe your space</h4>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <MDBInput onChange={(event)=>this.handleChange(event, 'spaceDescription')} type="textarea" label="ex: My space is oddly shaped, has AC,..." rows="5" cols="100"/>
                </MDBCol>
              </MDBRow>

              <MDBRow className="becomehost-buttonRow">
                <MDBCol>
                  <MDBBtn className="becomehost-button" type="submit">Submit</MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </MDBContainer>
        </div>
      </div>
    );
  }
}
export default BecomeHost;
