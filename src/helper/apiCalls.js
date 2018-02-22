// fetch call here
const getHouses = async () => {
  try {
    const url = 'https://www.anapioficeandfire.com/api/houses'
    const initialFetch = await fetch(url);
    const fetchedObj = await initialFetch.json();
    const cleanObj = await cleanHouseData(fetchedObj);

    if (initialFetch.status <= 200) {
      return cleanObj
    } else {
      throw new Error('Bad status')
    }
  } catch (err) {
    throw new Error('Error in getHouses fetch')
  }
}

const cleanHouseData = async (fetchedObj) => {
  const cleanedHouses = await fetchedObj.map( (house) => {
    return {
      house: house.name,
      seats: house.seats,
      titles: house.titles,
      ancestralWeapons: house.ancestralWeapons,
      coatOfArms: house.coatOfArms,
      swornMembers: house.swornMembers,
      words: house.words

    }
  })
 return cleanedHouses
}

export { getHouses }