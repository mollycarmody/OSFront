import React from 'react';
import AvatarEditor from 'react-avatar-editor';
import Dropzone from 'react-dropzone';
import { MDBCol, MDBRow, MDBBtn, MDBView, MDBMask } from "mdbreact";

export class DropFile extends React.Component{
  constructor(props){
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver(){
    console.log("mousing over the picture");
  }

  setEditorRef = (editor) => this.editor = editor;
  render(){

    return(
      <>
      {this.props.imageNeeded &&
      <Dropzone onDrop={this.props.handleOnDrop} accept="image/png" minSize={this.props.minSize} maxSize={this.props.maxSize}>
        {({getRootProps, getInputProps, isDragActive, isDragReject, rejectedFiles}) => {
          const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > this.props.maxSize;
          return (

            <div {...getRootProps()} className="userprofile-dropzone">

            <input {...getInputProps()}/>

                {!isDragActive && 'Click here or drop a file to upload!'}
                {isDragActive && !isDragReject && "Drop it like it's hot!"}
                {isDragReject && "File type not accepted, sorry!"}
                {isFileTooLarge && (
                  <div className="text-danger mt-2">
                    File is too large.
                  </div>
                )}



            </div>
          )}
        }
      </Dropzone>}

      {!this.props.imageNeeded &&
        <div>
        <MDBRow>
          <MDBCol size="sm-6">
            <AvatarEditor ref = {this.setEditorRef} width={this.props.avatarWidth} height={this.props.avatarHeight} image={this.props.image} />
          </MDBCol>


          <MDBCol size="sm-6" id="dropfile-bttnCol">
            <div className="bottomdiv">
            <MDBRow>
            <MDBBtn className="dropfile-bttn" onClick={()=>this.props.handleSaveImage(this.editor)}>Save image</MDBBtn>
            </MDBRow>

            <MDBRow>
            <MDBBtn className="dropfile-bttn" onClick={this.props.handleDeleteImage}>Delete image</MDBBtn>
            </MDBRow>
            </div>
          </MDBCol>
        </MDBRow>
        </div>}
      </>
    );
  }
}
export default DropFile;
