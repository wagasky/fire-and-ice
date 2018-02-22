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
 return Promise.all(cleanedHouses)
}

const getSwornMembers = async (house) => {

  // try {
    const swornMembers = house.swornMembers
    const membersObject = await swornMembers.map( async member => {
    const memberFetch = await fetch(member, {
      method: 'GET'
      });
      return await memberFetch.json();
    });
    const resolvedMembers = await Promise.all(membersObject);

    return cleanSwornMembers(resolvedMembers);

  // } catch (err) {
  //   throw new Error('Error in getSwornMembers failed to fetch')
  // }

};

const cleanSwornMembers = swornMembers => {
  const memberNames = swornMembers.map( member => {
    return member.name;
  } );

  return memberNames.join(', ');
};


export { getHouses }