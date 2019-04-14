import React from 'react';
import QuizContainer from '../Components/QuizContainer/QuizContainer';
import { shallow } from 'enzyme';
import data from '../data'

describe('QuizContainer', () => {
  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <QuizContainer studySet={data} />
    )
  });

  it('should match the snapshot wtih all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a proper default state', () => {
    expect(wrapper.state()).toEqual( {category: '', questions: [], currentQuestion: {}, incorrect: [] } )
  });

  it('should randomize questions', () => {
    expect(wrapper.state('questions')).toEqual([]);
    wrapper.instance().randomizeQuestions();
    expect(wrapper.state('questions')).toHaveLength(29);
  });
})
