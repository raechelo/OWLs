import React, { Component } from 'react';


class Answer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allAnswers: [],
      correctAnswer: '',
      userAns: ''
    }
  }

  updateState = (e) => {
    this.setState( {
      allAnswers: this.props.allAnswers,
      correctAnswer: this.props.correctAnswer,
      userAns: e.target.value
    } )
    this.setUserAnswer();
  }

  setUserAnswer = () => {
    if (this.state.userAns !== this.state.correctAnswer) {
      this.props.incorrectAns();
      this.props.addOtherPoints();
    } else {
      this.props.addPoints();
    }
    this.props.nextQuestion();
  }


  render() {
    let btns = this.props.allAnswers.sort(() => 0.5 - Math.random()).map(a => {
      return <button onClick={this.updateState} className="ans-btn" value={a}>{a}</button>
    })

    return (
      <section className="ans-btn-section">{btns}</section>
      )
  }
}


export default Answer;