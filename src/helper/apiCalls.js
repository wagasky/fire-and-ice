// fetch call here
const getHouses = async () => {
  try {
    const url = 'https://www.anapioficeandfire.com/api/houses'
    const initialFetch = await fetch(url);
    const fetchedObj = await initialFetch.json();
    const cleanObj = await cleanHouseData(fetchedObj);

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
  const cleanedHouses = fetchedObj.map( (house) => {
    console.log({
      house: house.name,
      seats: house.seats,
      titles: house.titles,
      ancestralWeapons: house.ancestralWeapons,
      coatOfArms: house.coatOfArms,
      swornMembers: house.swornMembers,
      words: house.words

    }) 
    
  })
  // want to map through fetched obj
  // for each house
  // create an object with the housename as a key
  // and key value pairs of the following:
  // founded, seats, titles, ancestral weapons, coat of arms, sworm members, words
  // spread those objects into an array
  // do a promise.all of the objects
  // return the array to the getHouses obj so it can go into the store
  // await console.log(fetchedObj)
}


// mock data from docs
//   {  
//      url:"https://www.anapioficeandfire.com/api/houses/81",
//      name:"House Corbray of Heart's Home",
//      region:"",
//      coatOfArms:"Three black ravens in flight, holding three red hearts, on a white field(Argent, three ravens volant sable, each clutching in their claws a heart gules)",
//      words:"",
//      titles:[  
//         "Lord of Heart's Home",
//         "King of the Fingers (historical)"
//      ],
//      seats:[  
//         "Heart's Home"
//      ],
//      currentLord:"https://www.anapioficeandfire.com/api/characters/681",
//      heir:"https://www.anapioficeandfire.com/api/characters/677",
//      overlord:"https://www.anapioficeandfire.com/api/houses/7",
//      founded:"",
//      founder:"https://www.anapioficeandfire.com/api/characters/256",
//      diedOut:"",
//      ancestralWeapons:[  
//         "Lady Forlorn"
//      ],
//      cadetBranches:[  

//      ],
//      swornMembers:[  
//         "https://www.anapioficeandfire.com/api/characters/255",
//         "https://www.anapioficeandfire.com/api/characters/256",
//         "https://www.anapioficeandfire.com/api/characters/447",
//         "https://www.anapioficeandfire.com/api/characters/654",
//         "https://www.anapioficeandfire.com/api/characters/677",
//         "https://www.anapioficeandfire.com/api/characters/681",
//         "https://www.anapioficeandfire.com/api/characters/871",
//         "https://www.anapioficeandfire.com/api/characters/1182"
//      ]
//   }
// ]
// data formatting helper function here

export { getHouses }