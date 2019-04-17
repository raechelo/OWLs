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

    wrapper.setState( {house: 'ravenclaw'} );
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a proper default state', () => {
    expect(wrapper.state()).toEqual( {questions: [], incorrect: [], house: ''} )
  });

  it('should fetch the data', () => {
    const mockResponse = {};
    const mockJsonPromise = Promise.resolve(mockResponse);
    const mockFetch = Promise.resolve({
      json: () => mockJsonPromise
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetch);

    const wrapper = shallow(<App />);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://fe-apps.herokuapp.com/api/v1/memoize/1901/raechelo/questions');

    global.fetch.mockClear()
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
