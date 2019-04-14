import React, { Component } from 'react';
import Question from '../Question/Question';
import Answer from '../Answer/Answer';
import Player from '../Player/Player';
import Filter from '../Filter/filter';
import Popup from '../Popup/Popup';

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
      currentQuestion: currentQ,
      incorrect: this.props.incorrect
    } )
  }

  incorrectAns = () => {
    if (!this.state.incorrect.includes(this.state.currentQuestion)) {
      let newState = this.state.incorrect.push(this.state.currentQuestion)
      this.setState( { incorrect: newState } )
      this.props.saveWrongQs();
    }
  }



  render() {
    const gameBoard =  
    <div className="game-board">
      <Question 
        question={this.state.currentQuestion.question} />
      <Answer
        saveWrongQs={this.props.saveWrongQs}
        incorrectAns={this.incorrectAns}
        nextQuestion={this.randomizeQuestions} 
        correctAnswer={this.state.currentQuestion.correctAnswer} 
        allAnswers={this.state.currentQuestion.allAnswers} />
    </div>


    return (
      <div className="game-container">
        <Filter 
        studySet={this.state.questions}
        category={this.state.category}
        />
        {this.state.questions.length > 0 
        ? gameBoard 
        : <Popup 
        clearStorage={this.props.clearStorage}
        randomizeQuestions={this.randomizeQuestions}
        studyWrongQs={this.props.studyWrongQs}
         />}
        <Player house={this.props.house} />
      </div>
    )
  }
}

export default QuizContainer;