import { createStore, applyMiddleware, compose } from "redux";

// import thunk from "redux-thunk";

import  createSagaMiddleware from "redux-saga";

import { persistStore } from "redux-persist";

import { fetchCollectionsStart } from "./shop-data/shopSaga";

import { rootSaga } from "./rootSaga";

import logger from "redux-logger";

import rootReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === "development"){
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

