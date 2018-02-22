// fetch call here
const getHouses = async () => {
  try {
    const url = 'https://www.anapioficeandfire.com/api/houses'
    const initialFetch = await fetch(url);
    const fetchedObj = await initialFetch.json();

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


// data formatting helper function here

export { getHouses }