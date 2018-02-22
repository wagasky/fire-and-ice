export const housesReducer = (state =[], action) => {
  switch(action.type) {
    case 'LOAD_HOUSES':
      return action.houses
    default:
      return state
  }
}