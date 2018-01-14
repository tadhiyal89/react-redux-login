import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers/reducer';
import thunkMiddleware from 'redux-thunk';
//import {createLogger} from 'redux-logger';

const store = createStore(
  reducer,
  compose(applyMiddleware(
    thunkMiddleware
  )),window.devToolsExtension ? window.devToolsExtension() : f => f
);
//export default (applyMiddleware(thunk))(createStore)

export default store;
