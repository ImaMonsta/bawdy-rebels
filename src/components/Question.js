import React, { Component } from 'react';

class Question extends Component {
    render() {
        return (
            <div className="col-md-12 col-testimonial">
                <div className="row">
                    <div className="col-3 text-center">
                        <img className="rounded-circle" alt="1" src="https://s.gravatar.com/avatar/d67612c2a3a5243efe7abbc9078261ae?s=400" style={{maxWidth: 80, maxHeight: 80}}/>
                    </div>
                    <div className="col-9">
                        <p className="quote-text">{`"${this.props.details.question}" `}<span className="badge badge-info">{`+ ${Object.keys(this.props.details.votes).length
}`}</span></p>
                        <p><span className="quote-author">Jane Donovan</span></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Question;