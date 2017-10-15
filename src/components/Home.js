import React, { Component } from 'react';
import Logo from '../assets/images/logo.png';

class Home extends Component {
    render() {
        return (
			<section className="features-4 text-center">
			<div className="container">
				<div className="row justify-center">
					<div className="col-md-8 text-center">
                        <img alt="Nearsoft" src={Logo} style={{ width: 200, height: 200, }} />
                        <h2>I've got a question?</h2>
                        <p class="lead mt-3">Let the questions begin.</p>
						<p className="lead mt-3"></p>
                        <button type="submit" className="btn btn-outline-white btn-lg mb-2 ml-2 ml-2">Get Started</button>
					</div>	
				</div>
			</div>
		</section>
        );
    }
}

export default Home;