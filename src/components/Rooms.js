import React, { Component } from 'react';

class Rooms extends Component {
    render() {
        return (
            <section className="team-3 text-center alt-background" >
			<div className="container">
				<h2>Meet our current available rooms</h2>
				<p className="lead mb-5">Followed by our awesome presenters.</p>
				<div className="row">
					<div className="col-md-4 col-team">
						<div className="box rounded-corners">
							<img alt="me" className="rounded-circle" src="http://gravatar.com/avatar/d67612c2a3a5243efe7abbc9078261ae?s=400"/>
							<h4>German Garcia</h4>
							<p><span className="emphasis">Software Engineer</span></p>
							<p>React from scract is a simple SPA that connects with Firebase.</p>
							<ul className="social">
								<li><a href="https://twitter.com/1m_g3rm4n" title="Facebook" className="fa fa-github"> </a></li>
								<li><a href="https://github.com/imamonsta" title="Twitter" className="fa fa-twitter"> </a></li>
								<div className="clear"></div>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
        );
    }
}

export default Rooms;