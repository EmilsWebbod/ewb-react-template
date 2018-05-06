import { createBrowserHistory } from 'history';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import DevTools from './DevTools';
import reducers from './reducers';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);

const initialState = {};

const enhancer = compose(
  applyMiddleware(thunkMiddleware, middleware),
  DevTools.instrument()
);

const store = createStore(
  combineReducers({
    router: routerReducer,
    ...reducers
  }),
  initialState,
  enhancer
);

export {history};
export default store;
