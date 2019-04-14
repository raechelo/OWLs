import React from 'react';
import Popup from '../Components/Popup/Popup';
import { shallow } from 'enzyme';

describe('Popup', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <Popup />
    )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  });
})