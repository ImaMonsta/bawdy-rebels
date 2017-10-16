import React, { Component } from 'react';

class Question extends Component {
    constructor(){
        super()
        this.vote = this.vote.bind(this);
        this.close = this.close.bind(this);
    }
    vote(event){
        event.preventDefault();
        this.props.voteForQuestion(this.props.id)
    }
    close(event){
        event.preventDefault();
        this.props.closeQuestion(this.props.id)
    }
    render() {
        return (
            <div className="col-sm-6">
                <div className="box">
                    <img className="rounded-circle" alt="1" src="https://s.gravatar.com/avatar/d67612c2a3a5243efe7abbc9078261ae?s=400" style={{maxWidth: 80, maxHeight: 80}}/>
                    <p className="quote-text">{`"${this.props.details.question}"`} <span className={`badge badge-${(this.props.i === 0) ? "success" : "info"}`}>{`+ ${Object.keys(this.props.details.votes).length }`}</span></p>
                    <ul className="social">
                        <li><a href="" title="vote" className="fa fa-thumbs-up" onClick={this.vote}> </a></li>
                        <li><a href="" title="close" className="fa fa-times" onClick={this.close}> </a></li>
                        <div className="clear"></div>
                    </ul>
                    <p><span className="quote-author">{this.props.details.author}</span></p>
                </div>
            </div>
        );
    }
}

export default Question;