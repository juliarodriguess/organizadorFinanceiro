import { OWNER_UPDATE_VALUE } from '../actions/actionTypes';

const initialState = {
    newValue: ''
  };
 
export const ownerReducer = (state = initialState, action) => {
    switch (action.type) {
      case OWNER_UPDATE_VALUE:
        return {
          ...state,
          newValue: action.newValue
        };
      default:
        return state;
    }
};