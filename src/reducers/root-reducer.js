import { combineReducers } from 'redux';
import { fake } from './fake-reducer';
import { housesReducer } from './housesReducer/housesReducer'

const rootReducer = combineReducers({
  housesReducer: housesReducer
});


export default rootReducer;
