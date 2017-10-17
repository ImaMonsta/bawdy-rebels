import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {MD5} from '../helpers'

class Room extends Component {
    constructor() {
        super();
        this.goToRoom = this.goToRoom.bind(this);
    }

    goToRoom(events) {
		events.preventDefault();
		console.log("You changed the URL");
		this.context.router.history.push(`/room/${this.props.id}`);
    }
    
    render() {
        return (
            <div className="col-md-4 col-team">
                <div className="box rounded-corners">
                    <a onClick={this.goToRoom}><img alt="me" className="rounded-circle" src={`https://gravatar.com/avatar/${MD5(this.props.presenter.email || '')}?s=400`}/></a>
                    <h4>{this.props.presenter.name}</h4>
                    <p><span className="emphasis">{this.props.presenter.title}</span></p>
                    <p>{this.props.description}</p>
                    <ul className="social">
                        <li><a href={`https://twitter.com/${this.props.presenter.twitter}`} title="Facebook" className="fa fa-github"> </a></li>
                        <li><a href={`https://github.com/${this.props.presenter.github}`} title="Twitter" className="fa fa-twitter"> </a></li>
                        <li><a href={`mailto:${this.props.presenter.email}?Subject=hi`} title="Mail" className="fa fa-envelope"> </a></li>
                        <div className="clear"></div>
                    </ul>
                </div>
            </div>
        );
    }
}

Room.contextTypes = {
	router: PropTypes.object,
}

export default Room;