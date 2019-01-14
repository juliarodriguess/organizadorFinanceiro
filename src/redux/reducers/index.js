import { ownerReducer } from './ownerReducer';
// import { OtherReducer } from './otherReducer';
import { combineReducers } from 'redux';


export const Reducers = combineReducers({
  ownerState: ownerReducer,
//   otherState: otherReducer
});