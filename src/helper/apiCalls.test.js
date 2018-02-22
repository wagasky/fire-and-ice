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
      const response = getHouses()
    })
  })
})