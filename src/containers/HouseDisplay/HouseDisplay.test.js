import React from 'react';
import { shallow } from 'enzyme';
import { HouseDisplay, mapStateToProps, mapDispatchToProps } from './HouseDisplay';

describe('HouseDisplay', () => {
  let wrapper;
  const mockData = ['house 1', 'house 2', 'house 3'];
  const mockGetHouses = jest.fn();
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(
      [{ name: 'HOUSE'}]
    )
  }));

  beforeEach(() => {
    wrapper = shallow(<HouseDisplay getHouses={mockGetHouses}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should map to the store correctly', () => {
    const mockStore = mockData;

    const mapped = mapStateToProps(mockStore);

    expect(mapped).toEqual(mockStore);
  });

  it('should call the dispatch function when using a function to mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.loadHouses();

    expect(mockDispatch).toHaveBeenCalled();

  });
})