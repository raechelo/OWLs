import React from 'react';
import QuizContainer from '../Components/QuizContainer/QuizContainer';
import { shallow } from 'enzyme';
import data from '../data'

describe('QuizContainer', () => {
  
  let wrapper;

  const mockIncorrect = [];

  const mockSaveWrongQs = jest.fn();

  beforeEach(() => {
    wrapper = shallow (
      <QuizContainer incorrect={mockIncorrect} studySet={data} saveWrongQs={mockSaveWrongQs} />
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

  it('should add incorrect questions to the proper array', () => {
    expect(wrapper.state('incorrect')).toEqual([]);
    wrapper.instance().randomizeQuestions();
    wrapper.instance().incorrectAns();
    expect(wrapper.state('incorrect')).toEqual(1);
  });
})
