import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import ajaxMiddleware from 'src/middlewares/ajaxMiddleware';
import socketMiddleware from 'src/middlewares/socketMiddleware';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    ajaxMiddleware,
    socketMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
