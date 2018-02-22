// fetch call here
const getHouses = async () => {
  try {
    const url = 'https://www.anapioficeandfire.com/api/houses'
    const initialFetch = await fetch(url);
    const fetchedObj = await initialFetch.json();
    const cleanObj = await cleanHouseData(fetchedObj);
    debugger

    if (initialFetch.status <= 200) {
      return fetchedObj
      console.log(fetchedObj)
    } else {
      throw new Error('Bad status')
    }
  } catch (err) {
    throw new Error('Error in getHouses fetch')
  }
}

const cleanHouseData = async (fetchedObj) => {
  // want to map through fetched obj
  // for each house
  // create an object with the housename as a key
  // and key value pairs of the following:
  // founded, seats, titles, ancestral weapons, coat of arms, sworm members, words
  // spread those objects into an array
  // do a promise.all of the objects
  // return the array to the getHouses obj so it can go into the store
  await console.log(fetchedObj)
}


// data formatting helper function here

export { getHouses }