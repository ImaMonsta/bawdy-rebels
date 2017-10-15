import React, { Component } from 'react';
import Room from './Room'

class Rooms extends Component {

    render() {
        return (
            <section className="team-3 text-center alt-background" >
			<div className="container">
				<h2>Meet our current available rooms</h2>
				<p className="lead mb-5">Followed by our awesome presenters.</p>
				<div className="row">
					<Room description="React from Scratch is a single SPA application with Firebase as backend and hosting." presenter={{name:"German Garcia", email:"me@g3rm4n.xyz", twitter:"1m_g3rm4n", github:"imamonsta", title:"Software Engineer"}}/>
				</div>
			</div>
		</section>
        );
    }
}

export default Rooms;