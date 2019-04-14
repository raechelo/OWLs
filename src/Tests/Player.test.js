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

  it('should have a proper default state', () => {
    expect(wrapper.state()).toEqual( {
      hufflePoints: 0,
      slyPoints: 0,
      gryfPoints: 0,
      ravenPoints: 0
    } )
  })
})