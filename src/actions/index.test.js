import * as actions from './index';
import mockData from '../helper/mockData'

describe('all actions', () => {

  it('should return a type of LOAD_HOUSES', () => {
    const houses = mockData;

    const expected = {
      type: 'LOAD_HOUSES',
      houses
    }
    expect(actions.LOAD_HOUSES(houses)).toEqual(expected);
  })

})