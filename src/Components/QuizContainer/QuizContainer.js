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
      incorrect: [],
      house: '',
      h: 0,
      r: 0,
      g: 0,
      s: 0
      }
    }
  

  randomizeQuestions = () => {
  let shuffledQs = this.props.studySet.sort(() => 0.5 - Math.random())
  let currentQ = shuffledQs.pop()

    this.setState( {
      questions: shuffledQs,
      currentQuestion: currentQ,
      incorrect: this.props.incorrect,
      house: this.props.house
    } )
  }

  incorrectAns = () => {
    if (!this.state.incorrect.includes(this.state.currentQuestion)) {
      let newState = this.state.incorrect.push(this.state.currentQuestion)
      this.setState( { incorrect: newState } )
      this.props.saveWrongQs();
    }
  }

  addPoints = () => {
    switch (this.state.house) {
      case 'gryffindor' :
        this.setState( { g: this.state.g += 100 } )
      break;
      case 'slytherin':
      this.setState( { s: this.state.s += 100 } )
      break
      case 'hufflepuff':
      this.setState( { h: this.state.h += 100 } )
      break;
      default:
      this.setState( { r: this.state.r += 100 } )
    }
  }

  addOtherPoints = () => {
    switch (this.state.house) {
      case 'gryffindor' :
        this.setState( { 
          r: this.state.r += 100,
          s: this.state.s += 100,
          s: this.state.h += 100
        } )
      break;
      case 'slytherin':
        this.setState( { 
          r: this.state.r += 100,
          s: this.state.g += 100,
          s: this.state.h += 100
        } )
      break
      case 'hufflepuff':
        this.setState( { 
          r: this.state.r += 100,
          s: this.state.s += 100,
          s: this.state.g += 100
        } )
      break;
      default:
      this.setState( { 
        r: this.state.h += 100,
        s: this.state.s += 100,
        s: this.state.g += 100
      } )
    }
  }



  render() {
    const gameBoard =  
    <div className="game-board">
      <Filter 
        studySet={this.state.questions}
        category={this.state.category} />
      <Question 
        question={this.state.currentQuestion.question} />
      <Answer
        addOtherPoints={this.addOtherPoints}
        addPoints={this.addPoints}
        saveWrongQs={this.props.saveWrongQs}
        incorrectAns={this.incorrectAns}
        nextQuestion={this.randomizeQuestions} 
        correctAnswer={this.state.currentQuestion.correctAnswer} 
        allAnswers={this.state.currentQuestion.allAnswers} />
    </div>

    // write method to add points
    // put house point in state
    // pass method to answr comp to happen with answers & update this app state
    // pass the housepoints to player state to populate
    // player state may need a rework, lesser the state/class comp and instead populate from props


    return (
      <div className="game-container">
        {this.state.questions.length > 0 
        ? gameBoard 
        : <Popup 
        clearStorage={this.props.clearStorage}
        randomizeQuestions={this.randomizeQuestions}
        studyWrongQs={this.props.studyWrongQs}
         />}
        <Player house={this.props.house} h={this.state.h} s={this.state.s} g={this.state.g} r={this.state.r} />
      </div>
    )
  }
}

export default QuizContainer;