import React, { Component } from 'react';
import firebase from 'firebase'
import PropTypes from 'prop-types'
import Room from './Room'
import samplePresenters from '../sample-presenters'

class Rooms extends Component {
	constructor(){
		super();
		this.loadSample = this.loadSample.bind(this);
		this.signOut = this.signOut.bind(this);
		this.state = {
			presenters: {},
			userName: '',
			firebase,
			
		}
	}

	signOut(){
		firebase.auth().signOut();
		this.context.router.history.push("/");
	}

	loadSample(){
		this.setState({
			presenters: samplePresenters
		});
	}

	componentWillMount() {
		this.loadSample();

		firebase.auth().onAuthStateChanged( user => {
			if (user) {
				this.setState({ userName: user.displayName});
			} 
		  });
	}
	
    render() {
        return (
			<div>
				
            <section className="team-3 text-center alt-background" >
				
			<div className="container">
				<h3>{`Welcome ${this.state.userName} `}<button className="btn btn-outline-info" onClick={this.signOut}>Sign out</button></h3>
				<h2>Meet our current available rooms</h2>
				<p className="lead mb-5">Followed by our awesome presenters.</p>
				<div className="row">
					{	
						Object
							.keys(this.state.presenters)
							.map(key => <Room key={key} id={key} presenter={this.state.presenters[key].presenter} description={this.state.presenters[key].description}/>)
					}
				</div>
			</div>
		</section>
		</div>
        );
    }
}

Rooms.contextTypes = {
	router: PropTypes.object,
}

export default Rooms;