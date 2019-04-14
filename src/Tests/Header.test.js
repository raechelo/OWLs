import React from 'react';
import Header from '../Components/Header/Header';
import { shallow } from 'enzyme';

describe('Header', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <Header />
    )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  });
})

