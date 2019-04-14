import React from 'react';
import Filter from '../Components/Filter/filter';
import { shallow } from 'enzyme';

describe('Filter', () => {

  let wrapper;

  beforeEach(() => {

    wrapper = shallow(
      <Filter />
    )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
})

