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
  const cleanedHouses = await fetchedObj.map( async (house) => {

    const swornMembers = await getSwornMembers(house);
    // refactor me later if there is time

    const seats = house.seats.toString() === "" ? 'N/A' : [...house.seats.join(', ')];
    const weapons = house.ancestralWeapons.toString() === "" ? 'N/A' : [...house.ancestralWeapons.join(', ')];
    const titles = house.titles.toString() === "" ? 'N/A' : [...house.titles.join(', ')];

    return {
      house: house.name ? house.name : 'N/A',
      seats: seats,
      titles: titles,
      ancestralWeapons: weapons,
      coatOfArms: house.coatOfArms ? house.coatOfArms : 'N/A',
      swornMembers: swornMembers,
      words: house.words ? house.words : 'N/A', 
      founded: house.founded ? house.founded : 'N/A'
    }
  })
 return cleanedHouses
}

const getSwornMembers = async (house) => {
  try {
    const houseArray = house.swornMembers
    const members = await houseArray.map( async (url) => {
      let memberObject = await fetch(url)
      return memberObject
    })
    
    const resolvedMembers = Promise.all(members);
    debugger
  } catch(err) {
    throw new Error('getSwornMembers failed to fetch')
  }
  
}

export { getHouses }