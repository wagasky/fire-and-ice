import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps } from './HouseDisplay';
import { mockData } from '../../helper/mockData'

describe('HouseDisplay', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HouseDisplay />);
  });

  it('should match the snapshot', () => {

  })

  it('should map to the store correctly', () => {

  })

  it('should call the dispatch function when using a function to mapDispatchToProps', () => {
    
  })
})