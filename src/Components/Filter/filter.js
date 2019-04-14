import React, { Component } from 'react';

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      category: ''
    }
  }

  updateCategory = () => {
    this.setState( {
      category: this.props.category,
      questions: this.props.studySet
    } )
  }

  filterBy = (e) => {
    let cat = e.target.textContent
    let filteredQs = this.props.studySet.filter(q => q.category === cat);
    this.setState( {
      category: cat,
      questions: filteredQs
    } )
  }

  render () {

    return (
      <div>
        <button onClick={this.filterBy}>React</button>
        <button onClick={this.filterBy}>Redux</button>
        <button onClick={this.filterBy}>Router</button>
      </div>
    )
  }
}

export default Filter;