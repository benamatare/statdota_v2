import { combineReducers } from 'redux';
// Import Reducers here -->
import search_data from './queryReducer.js';
import hero_data from './heroesReducer.js';
// Default State
export default combineReducers({
  search_data,
  hero_data
});
