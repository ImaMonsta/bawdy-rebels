import React, { Component } from 'react';
import {MD5} from '../helpers'

class Room extends Component {
    render() {
        return (
            <div className="col-md-4 col-team">
                <div className="box rounded-corners">
                    <img alt="me" className="rounded-circle" src={`http://gravatar.com/avatar/${MD5(this.props.presenter.email)}?s=400`}/>
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

export default Room;