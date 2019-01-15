import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { Reducers } from '../reducers';

export const Store = compose(applyMiddleware(thunk))(createStore)(Reducers);