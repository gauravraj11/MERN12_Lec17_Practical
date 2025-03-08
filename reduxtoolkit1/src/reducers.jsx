import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import testReducer from './testSlice'
// import amountReducer from './amountSlice';


const rootReducer = combineReducers({

//   counter: counterReducer,
  test: testReducer
//    XYZ : amountReducer

  // Add more reducers here if needed
});

export default rootReducer;
