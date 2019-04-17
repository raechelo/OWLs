import React from 'react';
import Filter from '../Components/Filter/filter';
import { shallow } from 'enzyme';

describe('Filter', () => {

  const mockData = [
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
  ]

  let wrapper;

  beforeEach(() => {

    wrapper = shallow(
      <Filter studySet={mockData} />
    )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a proper default state', () => {
    expect(wrapper.state()).toEqual({ category: '' } )
  });

  it('should filter categories', () => {
    expect(wrapper.state('category')).toEqual( '' );
    wrapper.instance().filterBy( {target: {textContent: 'React' } } );
    expect(wrapper.state('category')).toEqual( 'React' );
  });
  
})

