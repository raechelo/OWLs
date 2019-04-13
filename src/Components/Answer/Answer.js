import React, { Component } from 'react';


class Answer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allAnswers: this.props.allAnswers,
      correctAnswer: this.props.correctAnswer,
      userAnswer: ''
    }
  }

  // updateAnswers = () => {
  //   this.setState( {
  //     allAnswers: this.props.allAnswers,
  //     correctAnswer: this.props.correctAnswer
  //   } )
  // }

  verifyAnswer = () => {
    
  }



  render() {
    let btns = this.state.allAnswers.sort(() => 0.5 - Math.random()).map(a => {
      return <button onClick={this.verifyAnswer} className="ans-btn" value={a}>{a}</button>
    })
    return (
      <section className="ans-btn-section">{btns}</section>
      )
  }
}


export default Answer;