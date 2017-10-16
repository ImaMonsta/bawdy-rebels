import React, { Component } from 'react';
import Question from './Question';
import sampleQuestions from '../sample-questions'

class QuestionRoom extends Component {
    constructor(){
        super();
        this.loadSampleQuestions = this.loadSampleQuestions.bind(this);
        this.state = {
            questions: {},
        };
    }
    
    loadSampleQuestions(){
        this.setState({
            questions: sampleQuestions
        });
    }
    
    componentDidMount() {
        this.loadSampleQuestions();
    }
    
    render() {
        return (
            <section className="testimonial-2 text-center alt-background">
			<div className="container">
				<h3 className="mb-3">What people are asking</h3>
				<div className="divider"></div>
				<div className="row text-left">
                    {   
                        Object
                            .keys(this.state.questions)
                            .sort((a, b) => Object.keys(this.state.questions[b].votes).length - Object.keys(this.state.questions[a].votes).length)
                            .map(key => <Question key={key} id={key} details={this.state.questions[key]} />)
                    }
				</div>
			</div>
		</section>
        );
    }
}

export default QuestionRoom;