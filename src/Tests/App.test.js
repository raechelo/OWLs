import React from 'react';
import ReactDOM from 'react-dom';
import App from '../Components/App/App';
import { shallow } from 'enzyme';



describe('App', () => {

  const setSpy = jest.spyOn(Storage.prototype, 'setItem');

  const getSpy = jest.spyOn(Storage.prototype, 'getItem');

  const clearSpy = jest.spyOn(Storage.prototype, 'clear');

  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <App />
    )
  });

  afterEach(() => {
    setSpy.mockClear();
    getSpy.mockClear();
    clearSpy.mockClear();
  })

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a proper default state', () => {
    expect(wrapper.state()).toEqual( {questions: [], incorrect: [], house: ''} )
  });

  it.skip('should mount the component', () => {
    wrapper.instance().componentDidMount();
    expect(mountSpy).toHaveBeenCalled();
  })

  it('should update the house on user choice', () => {
    expect(wrapper.state('house')).toEqual('');
    wrapper.instance().handleClick( { target: { textContent: 'ravenclaw' } } );
    expect(wrapper.state('house')).toEqual('ravenclaw');
  });

  it('should have cleared the local storage', () => {
    wrapper.instance().clearOldQs();
    expect(clearSpy).toHaveBeenCalled();
  });

  it('should save items to local storage', () => {
    wrapper.instance().saveWrongQuestions();
    expect(setSpy).toHaveBeenCalled();
  });

  it('should get questions from local storage', () => {
    wrapper.instance().studyWrongQs();
    expect(getSpy).toHaveBeenCalled();
  });
})
