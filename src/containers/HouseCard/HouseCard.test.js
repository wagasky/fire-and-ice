import React from 'react';
import { shallow } from 'enzyme';
import { HouseCard, mapStateToProps, mapDispatchToProps } from './HouseCard';

describe('HouseCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HouseCard />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should map to the store correctly', () => {
    const mockStore = ['house', 'house']

    const mapped = mapStateToProps(mockStore);

    expect(mapped).toEqual(mockStore);

  });

})