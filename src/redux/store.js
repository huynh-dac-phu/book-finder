import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

import bookReducer from "redux/reducers/bookReducer";
import uiReducer from "redux/reducers/uiReducer";
import rootSaga from "redux/sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  books: bookReducer,
  ui: uiReducer
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(reducers, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
