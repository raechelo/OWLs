import React from 'react';
import Player from '../Components/Player/Player';
import { shallow } from 'enzyme';

describe('Player', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <Player />
    )
  })

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

})