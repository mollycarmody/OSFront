import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App1 extends Component {

	render() {
		const hosts = [
			{
				firstName: 'Scott',
				lastName: 'McConnell',
				street: '1262 Farm Rd',
				city: 'Berwyn',
				state: 'Pennsylvania',
				zip: '19312',
				email: 'skm44@duke.edu',
				phone: '6103124662',
				spaceType: 'Garage',
				spaceAvailable: '160',
				createdAt: new Date()
			},
			{
				firstName: 'Josh',
				lastName: 'France',
				street: '220 Alexander Ave',
				city: 'Durham',
				state: 'North Carolina',
				zip: '27705',
				email: 'jrf36@duke.edu',
				phone: '9802146075',
				spaceType: 'Shed',
				spaceAvailable: '100',
				createdAt: new Date(),
			},
			{
				firstName: 'Samir',
				lastName: 'Agadi',
				street: '207 Erwin Rd',
				city: 'Durham',
				state: 'North Carolina',
				zip: '27705',
				email: 'sa280@duke.edu',
				phone: '2486335250',
				spaceType: 'Closet',
				spaceAvailable: '50',
				createdAt: new Date(),
			},
		];

		const hostInfo = hosts.map((host) =>
			<div key={host.id}>
				<li className="list-group-item">
					<div className="media">
						<div className="media-body">
							<h4 className="mt-0">{host.firstName}</h4>
							<div className="container">
								<div className="row">
									<div className="col-sm">
										<i className="glyphicon glyphicon-map-marker"></i> {host.street}
									</div>
									<div className="col-sm">
										<i className="glyphicon glyphicon-home"></i> {host.spaceType}
									</div>
								</div>
								<div className="row">
									<div className="col-sm">
										<i className="glyphicon glyphicon-usd"></i> .06$/sqInch
									</div>
									<div className="col-sm">
										<i className="glyphicon glyphicon-time"></i> 8:00AM - 12:00PM (Monday-Friday)
									</div>
								</div>
								<div className="row">
									<div className="col-sm">
										<i className="glyphicon glyphicon-resize-horizontal"></i> {host.spaceAvailable} sq. ft remaining
									</div>
									<div className="col-sm">
										<i className="glyphicon glyphicon-ok-circle"></i> OpenSpace Verified
									</div>
								</div>
							</div>
						</div>
						<a href="/BookASpace"><button type="button" class="btn btn-primary">Book</button></a>
					</div>
				</li>
			</div>
		);

		return (
			<div className="App">
				<header className="App-header">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<img className="navbar-brand" src="/OpenSpaceRevised.png" alt="OpenSpaceRevised"></img>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
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
				<div className="col-md-6">
					<ul className="list-group">{hostInfo}</ul>
				</div>
				<div class = "col-md-6">
					<div id="map"></div>
				</div>
			</header>
			</div>
		);
	}
}

export default App1;
