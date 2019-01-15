import { ownerReducer } from './ownerReducer';
import { expenseReducer } from './expenseReducer'
import { combineReducers } from 'redux';


export const Reducers = combineReducers({
  ownerState: ownerReducer,
  expenseState: expenseReducer
});