import React from 'react';
import BookForm from './BookForm.js';
import MainNav from './MainNav.js';
import Footer from './Footer.js';
export class BookPage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="bookpage-main">
        <div className="bookpage-nav">
          <MainNav showSearch = {true}/>
        </div>

        <div className = "bookpage-content">
          <BookForm id={this.props.match.params.id}/>
        </div>

        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
}
export default BookPage;
