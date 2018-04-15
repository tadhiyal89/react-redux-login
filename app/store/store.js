import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reducer from '../reducers/reducer';
import reducer2 from '../reducers/reducer2';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

const store = createStore(
  combineReducers({reducer:reducer,reducer2:reducer2}),
  {},
  compose(applyMiddleware(
    createLogger(),thunkMiddleware
  ),window.devToolsExtension ? window.devToolsExtension() : f => f)
);
//export default (applyMiddleware(thunk))(createStore)

export default store;
