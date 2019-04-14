import React, { Component } from 'react';
import Question from '../Question/Question';
import Answer from '../Answer/Answer'
import Player from '../Player/Player'

class QuizContainer extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      questions: [],
      currentQuestion: {},
      incorrect: []

    }
  }

  randomizeQuestions = () => {
  let shuffledQs = this.props.studySet.sort(() => 0.5 - Math.random())
  let currentQ = shuffledQs.pop()

    this.setState( {
      questions: shuffledQs,
      currentQuestion: currentQ
    } )
  }

  correctAns = () => {
    this.randomizeQuestions();
  }

  incorrectAns = () => {
    if (!this.state.incorrect.includes(this.state.currentQuestion)) {
      this.setState( {incorrect: [...this.state.incorrect, this.state.currentQuestion]} );
    }
  }



  render() {

    const gameBoard =  
    <div className="game-board">
      <Question 
        question={this.state.currentQuestion.question} />
      <Answer
        wrongAns={this.incorrectAns}
        correctAns={this.randomizeQuestions} 
        correctAnswer={this.state.currentQuestion.correctAnswer} 
        allAnswers={this.state.currentQuestion.allAnswers} />
    </div>

    const info = 
    <div className="info-popup">
      <h3>Ordinary [React] Wizarding Level</h3>
      <h3>How to Play:</h3>
      <p>You can choose from the filters to quiz yourself on specific topics or run through them at random.</p>
      <p>Should you get a question correct, you will earn your house points. Should you get a quesion wrong, you will earn all other houses points.</p>
      <button onClick={this.randomizeQuestions}>Got it!</button>
    </div>;

    console.log(this.state.questions)
    console.log(this.state.currentQuestion)

    return (
      <div className="game-container">
        {this.state.questions.length > 0 ? gameBoard : info}
        <Player house={this.props.house} />
      </div>
    )
  }
}


export default QuizContainer;