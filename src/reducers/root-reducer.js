import { combineReducers } from 'redux';
import { fake } from './fake-reducer';
import { housesReducer } from './housesReducer/housesReducer'

const rootReducer = combineReducers({
  houses: housesReducer
});


export default rootReducer;
