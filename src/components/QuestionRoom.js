import React, { Component } from 'react';
import Question from './Question';
import PostQuestion from './PostQuestion';
import sampleQuestions from '../sample-questions'
import firebase from '../settings/FirebaseConfig'
import firebaseApp from 'firebase';

class QuestionRoom extends Component {
    constructor(){
        super();
        this.loadSampleQuestions = this.loadSampleQuestions.bind(this);
        this.voteForQuestion = this.voteForQuestion.bind(this);
        this.addNewQuestion = this.addNewQuestion.bind(this);
        this.closeQuestion = this.closeQuestion.bind(this);
        this.state = {
            questions: {},
            user: {},
        };
    }
    
    loadSampleQuestions(){
        this.setState({
            questions: sampleQuestions
        });
    }

    voteForQuestion(questionKey){
        const questions = {...this.state.questions};
        console.log(`You voted for question ${questionKey} ⁉️`)
        questions[questionKey].votes["who"] = Date.now();
        this.setState({questions: questions});
    }

    closeQuestion(questionKey){
        const questions = {...this.state.questions};
        questions[questionKey].status = 'closed';
        this.setState({questions: questions});
    }

    addNewQuestion(question){
        const questions = {...this.state.questions};
        questions[`question-${Date.now()}`] = question;
        this.setState({questions: questions});
    }

    componentWillMount() {
        this.ref = firebase.syncState(`/rooms/${this.props.match.params.roomid}/questions`,
        {
            context: this,
            state: "questions",
        });

        firebaseApp.auth().onAuthStateChanged(user => {
            if(user){
                this.setState({user});
            }
        });
    }

    componentWillUnmount() {
        firebase.removeBinding(this.ref);
    }
    
    render() {
        return (
            <div>
            <section className="testimonial-3 text-center alt-background">
			<div className="container">
            <h4><span className="badge badge-primary">{this.props.match.params.roomid}</span></h4>
				<h3 className="mb-3">What people are asking?</h3>
				<div className="divider"></div>
                <div className="container text-center"><PostQuestion addNewQuestion={this.addNewQuestion} user={ this.state.user }/></div>
				<div className="container text-center">
                    {   
                        Object
                            .keys(this.state.questions)
                            .filter(key => this.state.questions[key].status==="open")
                            .sort((a, b) => Object.keys(this.state.questions[b].votes).length - Object.keys(this.state.questions[a].votes).length)
                            .map((key, i) => 
                                    <Question 
                                        key={key} 
                                        id={key} 
                                        details={this.state.questions[key]} i={i} 
                                        voteForQuestion={this.voteForQuestion}
                                        closeQuestion={this.closeQuestion}
                                        user={this.state.user}/>
                                )
                    }
				</div>
              
			</div>
            
		</section>
        
        </div>
        );
    }
}

export default QuestionRoom;