import React from 'react';
import ReactDOM from 'react-dom';
import App from '../Components/App/App';
import { shallow } from 'enzyme';



describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <App />
    )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should have a proper default state', () => {
    expect(wrapper.state()).toEqual( {questions: [], incorrect: [], house: ''} )
  });

  it('should update the house on user choice', () => {
    expect(wrapper.state('house')).toEqual('');
    wrapper.instance().handleClick( { target: { textContent: 'ravenclaw' } } );
    expect(wrapper.state('house')).toEqual('ravenclaw');
  });
})
