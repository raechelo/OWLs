import React from 'react';
import QuizContainer from '../Components/QuizContainer/QuizContainer';
import { shallow } from 'enzyme';

describe('QuizContainer', () => {
  
  let wrapper;

  const mockIncorrect = [];

  const mockSaveWrongQs = jest.fn();

  const mockHouse = 'ravenclaw'

  const data = [
    {
      "question": "In which lifecycle method should you fetch APIs?",
      "correctAnswer": "componentDidMount",
      "allAnswers": ["componentDidMount", "componentWillMount", "componentDoesMount", "componentDidUnmount"],
      "category": "React",
      "id": 1
    },
    {
      "question": "What would be the proper way to add new values to an array stored in state?",
      "correctAnswer": "this.setState({myArray: newValues})",
      "allAnswers": ["this.setState({myArray: newValues})", "this.setState(newValues)", "this.state.myArray.push(newValues)", "myArray.push(newValues)"],
      "category": "React",
      "id": 2
    }
  ];

  beforeEach(() => {
    wrapper = shallow (
      <QuizContainer incorrect={mockIncorrect} studySet={data} saveWrongQs={mockSaveWrongQs} house={mockHouse} />
    )
  });

  it('should match the snapshot wtih all the data passed in', () => {
    wrapper.setState( {questions: []} )
    expect(wrapper).toMatchSnapshot();
    
    wrapper.setState( {questions: data} )
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a proper default state', () => {
    expect(wrapper.state()).toEqual( {category: '', questions: [], currentQuestion: {}, incorrect: [], house: '', h: 0, r: 0, g:0, s:0 } )
  });

  it('should randomize questions', () => {
    expect(wrapper.state('questions')).toEqual([]);
    wrapper.instance().randomizeQuestions();
    expect(wrapper.state('currentQuestion')).toHaveProperty('allAnswers', 'id', 'question', 'correctAnswer', 'category');
    expect(wrapper.state('incorrect')).toEqual(mockIncorrect);
    expect(wrapper.state('house')).toEqual(mockHouse)
  });

  it('should add incorrect questions to the proper array', () => {
    expect(wrapper.state('incorrect')).toEqual([]);
    wrapper.instance().randomizeQuestions();
    wrapper.instance().incorrectAns();
    expect(wrapper.state('incorrect')).toEqual(1);
  });

  it('should add points to the players house for correct answers', () => {
    wrapper.setState( { house:'gryffindor' } )
    expect(wrapper.state('g')).toEqual( 0 );
    wrapper.instance().addPoints();
    expect(wrapper.state('g')).toEqual(100);
    
    wrapper.setState( { house: 'slytherin' } );
    expect(wrapper.state('s')).toEqual( 0 );
    wrapper.instance().addPoints();
    expect(wrapper.state('s')).toEqual(100);

    wrapper.setState( { house: 'hufflepuff' } );
    expect(wrapper.state('h')).toEqual( 0 );
    wrapper.instance().addPoints();
    expect(wrapper.state('h')).toEqual(100);

    wrapper.setState( { house: 'ravenclaw' } );
    expect(wrapper.state('r')).toEqual( 0 );
    wrapper.instance().addPoints();
    expect(wrapper.state('r')).toEqual(100);
  });

  it('should add points to other houses when a user answers incorrectly', () => {
    wrapper.setState( {house: 'gryffindor'} );
    expect(wrapper.state('g')).toEqual(0);
    wrapper.instance().addOtherPoints();
    expect(wrapper.state('r')).toEqual( 100 )
    expect(wrapper.state('s')).toEqual( 100 )
    expect(wrapper.state('h')).toEqual( 100 )

    wrapper.setState( {house: 'slytherin', g: 0, h: 0, s: 0, r: 0} );
    expect(wrapper.state('s')).toEqual(0);
    wrapper.instance().addOtherPoints();
    expect(wrapper.state('r')).toEqual( 100 )
    expect(wrapper.state('g')).toEqual( 100 )
    expect(wrapper.state('h')).toEqual( 100 )

    wrapper.setState( {house: 'hufflepuff', g: 0, h: 0, s: 0, r: 0} );
    expect(wrapper.state('h')).toEqual(0);
    wrapper.instance().addOtherPoints();
    expect(wrapper.state('r')).toEqual( 100 )
    expect(wrapper.state('s')).toEqual( 100 )
    expect(wrapper.state('g')).toEqual( 100 )

    wrapper.setState( {house: 'ravenclaw', g: 0, h: 0, s: 0, r: 0} );
    expect(wrapper.state('r')).toEqual(0);
    wrapper.instance().addOtherPoints();
    expect(wrapper.state('g')).toEqual( 100 )
    expect(wrapper.state('s')).toEqual( 100 )
    expect(wrapper.state('h')).toEqual( 100 )
  });
});
