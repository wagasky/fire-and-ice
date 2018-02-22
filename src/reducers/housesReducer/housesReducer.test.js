import { housesReducer } from './housesReducer';
import * as actions from '../../actions/index';
import mockData from '../../helper/mockData'

describe('housesReducer', () => {
  let mockData;

  it('should return the default state', () => {
    const expected = [];

    expect(housesReducer(undefined, {})).toEqual(expected);
  })

  it('should return the state with an array of houses', () => {
    const expected = mockData;
    
    expects(housesReducer(undefined, actions.loadHouses(mockData)).toEqual(expected))
  })
})