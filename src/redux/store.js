import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga'

import bookReducer from 'redux/reducers/bookReducer.js'
import rootSaga from 'redux/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
)
const store = createStore(bookReducer, enhancer);

sagaMiddleware.run(rootSaga)

export default store;