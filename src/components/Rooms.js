import React, { Component } from 'react';
import Room from './Room'
import samplePresenters from '../sample-presenters'

class Rooms extends Component {
	constructor(){
		super();
		this.loadSample = this.loadSample.bind(this);
		this.state = {
			presenters: {},
		}
	}
	loadSample(){
		this.setState({
			presenters: samplePresenters
		});
	}

	componentDidMount() {
		this.loadSample();
	}
	
    render() {
        return (
            <section className="team-3 text-center alt-background" >
			<div className="container">
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
        );
    }
}

export default Rooms;