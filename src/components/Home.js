import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from '../assets/images/logo.png';
import firebase from 'firebase'

class Home extends Component {
	constructor(){
		super();
		this.goToRooms = this.goToRooms.bind(this);
	}

	goToRooms(events) {
		events.preventDefault();
		console.log("You changed the URL");
		var provider = new firebase.auth.GoogleAuthProvider();
		provider.addScope('https://www.googleapis.com/auth/plus.login');
		firebase.auth().signInWithPopup(provider).then(authData => {
			console.log(authData);
			this.context.router.history.push("/rooms");
		}).catch(error => {
			console.log(error);
		});
		
	}

	authHandler(err, authData){
		console.log(authData);
	}

    render() {
        return (
			<section className="features-4 text-center">
			<div className="container">
				<div className="row justify-center">
					<div className="col-md-8 text-center">
                        <img alt="Nearsoft" src={Logo} style={{ width: 200, height: 200, }} />
                        <h2>I've got a question?</h2>
                        <p className="lead mt-3">Let the questions begin.</p>
						<p className="lead mt-3"></p>
						<form onSubmit={this.goToRooms}>
                        <button type="submit" className="btn btn-outline-white btn-lg mb-2 ml-2">Get Started <i className="fa fa-google"></i></button>
						</form>
					</div>	
				</div>
			</div>
		</section>
        );
    }
}

Home.contextTypes = {
	router: PropTypes.object,
}

export default Home;