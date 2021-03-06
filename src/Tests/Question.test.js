import React from 'react';
import Question from '../Components/Question/Question';
import { shallow } from 'enzyme';

describe('Question', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <Question />
    )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  }); 
})