import { EXPENSE_POST_VALUE, EXPENSE_GET_VALUE } from '../actions/actionTypes';
 

export const expenseReducer = (state = [], action) => {
    switch (action.type) {
      case EXPENSE_POST_VALUE:
        return state.concat(action.data);
      case EXPENSE_GET_VALUE:
        return action.response
      default:
        return state;
    }
};