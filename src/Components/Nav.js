import React from 'react';
import Icon from './Icon'
export class Nav extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return(


            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <img className="navbar-brand" src="/OpenSpaceRevised.png" alt="OpenSpaceRevised"></img>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span><Icon iconType="navbar-toggler-icon" /></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Find space near you" aria-label="Find space near you"></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" id="searchBarButton">Search</button>
                  </form>
                </ul>
                <a className="nav-link disabled" href="/BecomeAHost">Become A Host</a>
              </div>
            </nav>
        );
      }
}
export default Nav;
