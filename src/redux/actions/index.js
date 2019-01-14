import { OWNER_UPDATE_VALUE } from '../actions/actionTypes';

export const clickButton = value => ({
    type: OWNER_UPDATE_VALUE,
    newValue: value
  });