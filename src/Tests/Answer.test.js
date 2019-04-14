import React from 'react';
import Answer from '../Components/Answer/Answer';
import { shallow } from 'enzyme';

describe('Answer', () => {

  let wrapper;

  const mockAnswers = ['Moony', 'Wormtail', 'Padfoot', 'Prongs']

  const mockCorrectAnswer = 'Padfoot';

  const mockNextQuestion = jest.fn();

  const mockIncorrectAns = jest.fn(); 

  beforeEach(() => {
    wrapper = shallow (
      <Answer allAnswers={mockAnswers} correctAnswer={mockCorrectAnswer} incorrectAns={mockIncorrectAns} nextQuestion={mockNextQuestion} />
    )
  });

  it.skip('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a proper default state', () => {
    expect(wrapper.state()).toEqual( {allAnswers: [], correctAnswer: '', userAns: ''} );
  });

  it('should update state', () => {
    expect(wrapper.state()).toEqual( {allAnswers: [], correctAnswer: '', userAns: ''} );
    wrapper.instance().updateState( { target: { value: 'Caput Draconis' } } );
    expect(wrapper.state()).toEqual( {allAnswers: mockAnswers, correctAnswer: mockCorrectAnswer, userAns: 'Caput Draconis'} );
  });

  
})