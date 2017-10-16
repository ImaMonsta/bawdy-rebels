import React, { Component } from 'react';

class PostQuestion extends Component {
    constructor(){
        super();
        this.postQuestion = this.postQuestion.bind(this);
    }

    postQuestion(event){
        event.preventDefault();
        const question = {
            question: this.question.value,
            status: "open",
            author: "yo",
            votes: {},
        };
        this.props.addNewQuestion(question);
    }

    render() {
        return (
                <form className="col-sm-12 subscribe" onSubmit={this.postQuestion}>
                    <div className="form-group row pt-3">
                        <div className="col-sm-10 mb-3">
                            <input ref={ (input) => this.question = input} type="text" className="form-control-custom" id="inputQuestion" placeholder="Question"/>
                        </div>
                        <div className="col-sm-2">
                            <button type="submit" className="btn btn-lg btn-outline-success">Ask</button>
                        </div>
                    </div>
				</form>
        );
    }
}

export default PostQuestion;