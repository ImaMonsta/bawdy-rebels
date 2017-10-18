import React, { Component } from 'react';
import moment from 'moment';

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
            <div className="row">
                <div className="comments col-md-12" id="comments">
                    <div className="comment mb-2 row">
                        <div className="comment-avatar col-md-1 col-sm-2 text-center pr-1">
                            <a href=""><img className="mx-auto rounded-circle img-fluid" src={this.props.details.photo} alt="avatar"/></a>
                        </div>
                        <div className="comment-content col-md-11 col-sm-10">
                            <h6 className="small comment-meta"><a href="">{this.props.details.author}</a> { moment(this.props.details.when).calendar() }</h6>
                            <div className="comment-body">
                                <p>
                                    {`"${this.props.details.question}" `}
                                    <span className={`badge badge-${(this.props.i === 0) ? "success" : "info"}`}>{`+ ${Object.keys(this.props.details.votes || {}).length }`}</span>
                                    <br/>
                                    <a href="" className="badge badge-info text-right small " onClick={this.vote}><i className="fa fa-thumbs-up"></i>Vote            </a>             
                                    <a href="" className="badge badge-danger text-right small" onClick={this.close}><i className="fa fa-times"></i>Close</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Question;