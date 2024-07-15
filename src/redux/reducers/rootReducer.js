// src/redux/reducers/rootReducer.js

import { combineReducers } from 'redux';
import dataReducer from './DataReducers'; // Adjust the path if necessary

const rootReducer = combineReducers({
  data: dataReducer,
  // Add more reducers here as your app grows
});

export default rootReducer;
