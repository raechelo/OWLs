import React, { Component } from 'react';
import data from '../../data'
import Header from '../Header/Header';
import QuizContainer from '../QuizContainer/QuizContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      questions: [],
      incorrect: [],
      house: ''
    }
  }

  componentDidMount = () => {
    this.setState( {questions: data} )
  }

  handleClick = (e) => {
    this.setState( {house: e.target.textContent} )
  }

  saveWrongQuestions = () => {
    let wrongQs = JSON.stringify(this.state.incorrect)
    localStorage.setItem("studyAgain", wrongQs);
  }

  studyWrongQs = () => {
    let savedQs = JSON.parse(localStorage.getItem("studyAgain"));
    this.setState( {questions: this.savedQs} )
  }

  render() {
    let defaultPage = 
    <div className="App">
      <section className="btn-container">
        <h2>Choose Your House</h2>
        <button onClick={this.handleClick} className="gryf btn">gryffindor</button>
        <button onClick={this.handleClick} className="huf btn">hufflepuff</button>
        <button onClick={this.handleClick} className="rav btn">ravenclaw</button>
        <button onClick={this.handleClick} className="sly btn">slytherin</button>
      </section>
    </div>
  
    return (
      <div className="style">
      <Header />
      {this.state.house ? <QuizContainer house={this.state.house} studySet={this.state.questions} incorrect={this.state.incorrect} /> : defaultPage}
      </div>
    )
  }
}

export default App;