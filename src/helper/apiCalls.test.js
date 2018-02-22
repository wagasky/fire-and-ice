import { getHouses, cleanHouseData, getSwornMembers, cleanSwornMembers } from './apiCalls'


describe('apiCalls', () => {

  describe('getHouses', () => {
    const mockHouses = ['house1', 'house2'];

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockHouses)
    }));

    it('should be called with the correct params', () => {
      const url = 'https://www.anapioficeandfire.com/api/houses';

      expect(window.fetch).not.toHaveBeenCalled();

      getHouses();

      expect(window.fetch).toHaveBeenCalled(url);
    })

    it('should return the houses if the status is okay', () => {
      const expected = mockHouses
      const response = getHouses('http://localhost:3001/api/v1/houses')

      expect(response).resolves.toEqual(expected);
    })

    it('should throw an error if fetch fails', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 404
      }))
      const response = getHouses();
      const expected = Error('Error in getHouses fetch')
    })
  })

  describe('getSwornMembers', () => {
    const mockHouses = ['house1', 'house2'];

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockHouses)
    }));

    it('should be called with the correct params', () => {
      const url = 'http://localhost:3001/api/v1/houses';

      expect(window.fetch).not.toHaveBeenCalled();

      getSwornMembers();

      expect(window.fetch).toHaveBeenCalled(url);
    })

    it('should return the houses if the status is okay', () => {
      const expected = ['member', 'member']
      const url = 'http://localhost:3001/api/v1/character/:200'
      const response = getSwornMembers('')

      expect(response).resolves.toEqual(expected);
    })

    it('should throw an error if fetch fails', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 404
      }))
      const response = getSwornMembers();
      const expected = Error('Error in getSwornMembers fetch')
    })
  })


})