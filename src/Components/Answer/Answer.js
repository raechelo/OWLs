import React, { Component } from 'react';


class Answer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allAnswers: this.props.allAnswers,
      correctAnswer: this.props.correctAnswer
    }
  }

  updateState = () => {
    this.setState( {
      allAnswers: this.props.allAnswers,
      correctAnswer: this.props.correctAnswer
    } )
  }

  setUserAnswer = (e) => {
    if (!e.target.value === this.state.correctAnswer) {
      this.props.wrongAns();
      console.log('wrong ans')
    }
    this.updateState();
    this.props.correctAns();
    console.log('outside the if block')
  }


  render() {
    let btns = this.state.allAnswers.sort(() => 0.5 - Math.random()).map(a => {
      return <button onClick={this.setUserAnswer} className="ans-btn" value={a}>{a}</button>
    })

    return (
      <section className="ans-btn-section">{btns}</section>
      )
  }
}


export default Answer;